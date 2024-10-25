import {packageTracer} from '@alwatr/package-tracer';

__dev_mode__: packageTracer.add(__package_name__, __package_version__);

export function getEnvValue(params: { key: string; devValue: string; isRequired?: true; }): string {
  if (__dev_mode__ === true) {
    process.env[params.key] = params.devValue;
  }

  /**
   * Is's possible we need a `env` key that required in `dev` mode too.
   */
  if (
    params.isRequired === true &&
    (process.env[params.key] === undefined || process.env[params.key] === '')
  ) {
    throw new Error(`${params.key} is a required ENV key.`);
  }

  return process.env[params.key] as string;
}
