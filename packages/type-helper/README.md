# Typescript Type Helpers

Collection of useful typescript type helpers.

## Installation

```bash
yarn add @alwatr/type-helper
```

## Usage

```typescript
import type {JSONObject} from '@alwatr/type-helper';

const obj: JSONObject = {
  foo: 'bar',
  baz: {
    qux: 1,
    arr: [1, 2, 3],
  },
  qux: true,
};
```

Read the [source code](https://github.com/Alwatr/nanolib/tree/next/packages/type-helper/src) for more details.

### Contributing

Contributions are welcome! Please read our [contribution guidelines](https://github.com/Alwatr/.github/blob/next/CONTRIBUTING.md) before submitting a pull request.

### License

This project is licensed under the [AGPL-3.0 License](LICENSE).
