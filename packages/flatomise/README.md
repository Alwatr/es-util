# Flatomise

A utility for creating promises that can be externally resolved or rejected.

## Installation

```bash
yarn add @alwatr/flatomise
```

## Usage

```typescript
import {newFlatomise} from '@alwatr/flatomise';

const flatomise = newFlatomise();
flatomise.promise.then(() => {
  console.log('flatomise resolved');
});
flatomise.resolve();
```

For real usage, see [async-queue](https://github.com/Alwatr/nanolib/blob/next/packages/async-quque/src/main.ts).

### Contributing

Contributions are welcome! Please read our [contribution guidelines](https://github.com/Alwatr/.github/blob/next/CONTRIBUTING.md) before submitting a pull request.

### License

This project is licensed under the [AGPL-3.0 License](LICENSE).
