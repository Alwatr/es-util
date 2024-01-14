import {newFlatomise} from '@alwatr/flatomise';

import type {Dictionary} from '@alwatr/type-helper';

/**
 * A queue that executes async tasks in order like mutex and semaphore methodology
 *
 * @example
 * ```ts
 * const queue = new AsyncQueue();
 *
 * function longTask() {
 *   queue.push('longTaskId', async () => {
 *     // ...
 *   });
 * }
 * ```
 */
export class AsyncQueue {
  /**
   * A record of task IDs and their corresponding last queued task promises.
   */
  private queue__: Dictionary<Promise<unknown>> = {};

  /**
   * Push a async task to the queue.
   *
   * @param taskId task id
   * @param task async task
   * @returns A promise that resolves when the task is done.
   *
   * @example
   * ```typescript
   * const queue = new AsyncQueue();
   *
   * function longTask() {
   *  queue.push('longTaskId', async () => {
   *   // ...
   * });
   * ```
   */
  async push<T>(taskId: string, task: () => Promise<T>): Promise<T> {
    const flatomise = newFlatomise<T>();

    const previousTaskPromise = this.queue__[taskId];
    this.queue__[taskId] = flatomise.promise;

    try {
      await previousTaskPromise;
    }
    catch (_e) {
      // ignore
    }

    setTimeout(() => {
      task()
        .then(flatomise.resolve, flatomise.reject)
        .then(() => {
          if (this.queue__[taskId] === flatomise.promise) {
            delete this.queue__[taskId];
          }
        });
    }, 0);

    return flatomise.promise;
  }

  /**
   * Check if the task running in the queue.
   *
   * @param taskId task id
   * @returns true if the task is running, otherwise false.
   * @example
   * ```typescript
   * if (queue.isRunning('longTaskId')) {
   *  // ...
   * }
   * ```
   */
  isRunning(taskId: string): boolean {
    return this.queue__[taskId] !== undefined;
  }

  /**
   * Wait for the all tasks in the queue to finish.
   *
   * @param taskId task id
   * @returns A promise that resolves when all tasks are done.
   * @example
   * ```typescript
   * await queue.waitForFinish('longTaskId');
   * ```
   */
  waitForFinish(taskId: string): Promise<unknown> {
    return this.queue__[taskId] ?? Promise.resolve();
  }
}
