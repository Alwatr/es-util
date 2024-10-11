import {createLogger} from '@alwatr/logger';
import {packageTracer} from '@alwatr/package-tracer';

__dev_mode__: packageTracer.add(__package_name__, __package_version__);

const logger = /* #__PURE__ */ createLogger(__package_name__);

export const renderState = <R, T extends string>(
  state: T,
  renderRecord: Record<T | '_default', undefined | T | (() => R)>,
  thisArg: unknown = null,
): R | undefined => {
  logger.logMethodArgs?.('renderState', {state, renderRecord});

  let render = renderRecord[state];

  if (typeof render === 'string') {
    render = renderRecord[render as T];
  }

  if (render === undefined) {
    if (renderRecord._default === undefined) {
      logger.error('renderState', 'invalid_render_state');
      return;
    }
    // else
    if (typeof renderRecord._default === 'string') {
      if (renderRecord[renderRecord._default] === undefined) {
        logger.error('renderState', 'invalid_default_render');
        return;
      }
      // else
      return renderState(renderRecord._default, renderRecord, thisArg);
    }
    // else
    render = renderRecord._default;
  }

  if (typeof render !== 'function') {
    logger.error('renderState', 'invalid_render_state');
    return;
  }

  try {
    return render.call(thisArg);
  }
  catch (err) {
    logger.error('renderState', 'render_error', err);
    return;
  }
};
