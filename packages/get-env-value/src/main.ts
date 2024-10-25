import {packageTracer} from '@alwatr/package-tracer';
import {platformInfo} from '@alwatr/platform-info';

__dev_mode__: packageTracer.add(__package_name__, __package_version__);

interface GetEnvValueParams {
  name: string;
  defaultValue?: string;
  developmentValue?: string;
}

export function getEnvValue(params: GetEnvValueParams): string {
  if (platformInfo.development === true) {
    const value = params.developmentValue ?? params.defaultValue;
    if (value === undefined) {
      throw new Error(`Set default value or development value for ${params.name} while you are developing.`);
    }

    return value;
  }

  if (process.env[params.name] === undefined || process.env[params.name] === '') {
    throw new Error(`${params.name} is a required ENV key in production.`);
  }

  return process.env[params.name]!;
}
