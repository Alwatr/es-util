# Parse-duration

A simple utility to parse a duration string into milliseconds number.

## Installation

```bash
yarn add @alwatr/parse-duration
```

## Usage

```js
import {parseDuration} from '@alwatr/parse-duration';

parseDuration('10s'); // 10,000
parseDuration('10m'); // 600,000
parseDuration('10h'); // 36,000,000
parseDuration('10d'); // 864,000,000
parseDuration('10w'); // 6,048,000,000
parseDuration('10M'); // 25,920,000,000
parseDuration('10y'); // 315,360,000,000
parseDuration('10d', 'h'); // 240
```

### Unit Table

| Unit | Description |
| ---- | ----------- |
| `s`  | Second      |
| `m`  | Minute      |
| `h`  | Hour        |
| `d`  | Day         |
| `w`  | Week        |
| `M`  | Month       |
| `y`  | Year        |

### Contributing

Contributions are welcome! Please read our [contribution guidelines](https://github.com/Alwatr/.github/blob/next/CONTRIBUTING.md) before submitting a pull request.

### License

This project is licensed under the [AGPL-3.0 License](LICENSE).
