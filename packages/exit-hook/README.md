# Exit Hook

A utility for registering exit handlers in Node.js.

## Installation

```bash
yarn add @alwatr/exit-hook
```

## Usage

```typescript
import {exitHook} from '@alwatr/exit-hook';

const saveAllData = () => {
  // save all data
};

exitHook(saveAllData);
```

## Sponsors

The following companies, organizations, and individuals support Nanolib ongoing maintenance and development. Become a Sponsor to get your logo on our README and website.

[![Exir Studio](https://avatars.githubusercontent.com/u/181194967?s=200&v=4)](https://exirstudio.com)

### Contributing

Contributions are welcome! Please read our [contribution guidelines](https://github.com/Alwatr/.github/blob/next/CONTRIBUTING.md) before submitting a pull request.

### License

This project is licensed under the [AGPL-3.0 License](LICENSE).
