# Get Env Value

## Installation

```bash
yarn add @alwatr/get-env-value
```

## Usage

```ts
import {getEnvValue} from '@alwatr/get-env-value';

const envValue = getEnvValue({
  key: 'test',
  devValue: '',
  isRequired: true,
}); // There is an error, because `test` is a required key with an empty string.

const envValue = getEnvValue({
  key: 'test',
  devValue: '123',
  isRequired: true,
}); // It's Ok in `devMode`, but if the value of `test` be `undefined` in `process.env`, there is an error otherwise it's Ok.
```

## Sponsors

The following companies, organizations, and individuals support Nanolib ongoing maintenance and development. Become a Sponsor to get your logo on our README and website.

[![Exir Studio](https://avatars.githubusercontent.com/u/181194967?s=200&v=4)](https://exirstudio.com)

### Contributing

Contributions are welcome! Please read our [contribution guidelines](https://github.com/Alwatr/.github/blob/next/CONTRIBUTING.md) before submitting a pull request.

### License

This project is licensed under the [AGPL-3.0 License](LICENSE).
