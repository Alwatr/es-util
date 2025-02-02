# Object.hasOwn Polyfill

A polyfill for `Object.hasOwn`.

## Installation

You can install this package using npm or yarn:

```bash
npm install @alwatr/polyfill-has-own
```

If you're using Yarn, you can do this with:

```bash
yarn add @alwatr/polyfill-has-own
```

## Usage

```ts
import '@alwatr/polyfill-has-own';

const obj = {foo: 'bar'};
obj.hasOwn('foo'); // true
```

### Contributing

Contributions are welcome! Please read our [contribution guidelines](https://github.com/Alwatr/.github/blob/next/CONTRIBUTING.md) before submitting a pull request.

### License

This project is licensed under the [AGPL-3.0 License](LICENSE).
