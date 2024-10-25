import {isNumber} from '@alwatr/is-number';
import {packageTracer} from '@alwatr/package-tracer';

__dev_mode__: packageTracer.add(__package_name__, __package_version__);

/**
 * Unit conversion table
 */
const unitConversion_ = {
  s: 1_000,
  m: 60_000,
  h: 3_600_000,
  d: 86_400_000,
  w: 604_800_000,
  M: 2_592_000_000,
  y: 31_536_000_000,
} as const;

/**
 * Duration unit: `s` for seconds, `m` for minutes, `h` for hours, `d` for days, `w` for weeks, `M` for months, `y` for years.
 */
export type DurationUnit = keyof typeof unitConversion_;

/**
 * Duration string format: `number + unit`, for example `10m` means 10 minutes.
 */
export type Duration = `${number}${DurationUnit}` | number;

/**
 * Parse duration string to milliseconds number.
 *
 * @param duration - duration string or number, for example `10m` means 10 minutes.
 * @param toUnit - convert to unit, default is `ms` for milliseconds.
 * @return duration in milliseconds.
 * @example
 * ```ts
 * parseDuration('10m'); // 600000
 * parseDuration('10m', 's'); // 600
 * parseDuration(120_000, 'm'); // 2
 * ```
 */
export const parseDuration = (duration: Duration, toUnit?: DurationUnit): number => {
  let ms: number;

  if (typeof duration === 'number') {
    ms = duration;
  }
  else {
    const durationNumberStr = duration.slice(0, duration.length - 1);
    if (!isNumber(durationNumberStr)) {
      throw new Error(`not_a_number`);
    }
    const durationNumber = +durationNumberStr;
    const durationUnit = duration.slice(-1) as DurationUnit;
    const unitConversionFactor = unitConversion_[durationUnit];
    if (unitConversionFactor === undefined) {
      throw new Error(`invalid_unit`, {cause: {duration}});
    }
    ms = durationNumber * unitConversionFactor;
  }

  if (toUnit === undefined) {
    return ms;
  }

  // else
  const toFactor = unitConversion_[toUnit];
  if (toFactor === undefined) {
    throw new Error(`invalid_unit`, {cause: {toUnit}});
  }
  return ms / toFactor;
};
