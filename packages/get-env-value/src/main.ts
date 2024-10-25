import {packageTracer} from '@alwatr/package-tracer';
import {platformInfo} from '@alwatr/platform-info';

__dev_mode__: packageTracer.add(__package_name__, __package_version__);

/**
 * Parameters for retrieving an environment variable value.
 */
export type GetEnvValueOption = {
  /**
   * The name of the environment variable.
   */
  name: string;

  /**
   * The default value to use if the environment variable is not set.
   * If not provided, the environment variable is required and an error will be thrown if it is not set.
   * Except in development mode, where the development value will be used instead if provided.
   */
  defaultValue?: string;

  /**
   * The value to use in a development environment.
   * It will be overwrite the default value in development mode and completely ignored in production mode.
   */
  developmentValue?: string;
}

export function getEnvValue(option: GetEnvValueOption): string {
  let value = process.env[option.name];
  if (value === '') value = undefined; // empty string is considered as undefined in environment variables

  if (platformInfo.development === true) {
    value ??= option.developmentValue ?? option.defaultValue;
  }
  else {
    value ??= option.defaultValue;
  }

  if (value === undefined) {
    throw new Error(`Environment variable "${option.name}" is required.`);
  }

  return value;
}
