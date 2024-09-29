/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-indexed-object-style, @typescript-eslint/ban-types */

/**
 * Represents a primitive type in TypeScript.
 * @typedef {string | number | bigint | boolean | symbol | null | undefined} Primitive
 */
export type Primitive = string | number | bigint | boolean | symbol | null | undefined;

/**
 * Represents a type that includes all falsy values: false, '', 0, null, and undefined.
 */
export type Falsy = false | '' | 0 | null | undefined;

/**
 * Represents a type that can be null or undefined.
 */
export type Nullish = null | undefined;

/**
 * Represents a type that can be either a value of type T or null.
 * @template T - The type of the value.
 */
export type Nullable<T> = T | null;

/**
 * Represents a type that can either be of type T or undefined.
 * @template T - The type parameter.
 */
export type Maybe<T> = T | undefined;

/**
 * Represents a type that can either be a value of type T or a promise that resolves to a value of type T.
 * @template T - The type of the value or the resolved value.
 */
export type MaybePromise<T> = T | Promise<T>;

/**
 * Represents a type that can be either a single value or an array of values.
 * @template T - The type of the value(s).
 */
export type SingleOrArray<T> = T | T[];

/**
 * Type helper that removes the undefined type from a given type.
 * @template T The type to remove undefined from.
 * @returns The type without undefined.
 */
export type NonUndefined<T> = T extends undefined ? never : T;

/**
 * Returns the keys of an object type `T` that are required (not optional).
 *
 * @template T - The object type.
 * @returns The keys of `T` that are required.
 */
export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

/**
 * Returns the keys of an object type `T` that are optional.
 *
 * @template T - The object type.
 * @returns The keys of `T` that are optional.
 */
export type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

/**
 * Represents a type that makes all properties of an object mutable (remove readonly).
 */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

/**
 * Represents a type that makes all properties of an object immutable (readonly).
 */
export type Immutable<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * Represents a type that makes all properties of an object and its nested objects readonly.
 * @template T - The type to make readonly.
 * @returns The readonly version of the input type.
 */
export type DeepReadonly<T> = T extends ((...args: any[]) => any) | Primitive
  ? T
  : T extends DeepReadonlyArray_<infer U>
    ? DeepReadonlyArray_<U>
    : T extends DeepReadonlyObject_<infer V>
      ? DeepReadonlyObject_<V>
      : T;
type DeepReadonlyArray_<T> = readonly DeepReadonly<T>[];
type DeepReadonlyObject_<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

/**
 * Recursively makes all properties of an object and its nested objects/array required.
 *
 * @template T - The type to make deep required.
 * @param {T} value - The value to make deep required.
 * @returns {DeepRequired<T>} - The deep required type.
 */
export type DeepRequired<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
    ? DeepRequiredArray_<T[number]>
    : T extends object
      ? DeepRequiredObject_<T>
      : T;
type DeepRequiredArray_<T> = DeepRequired<NonUndefined<T>>[];
type DeepRequiredObject_<T> = {
  [P in keyof T]-?: DeepRequired<NonUndefined<T[P]>>;
};

/**
 * Represents a type that makes all properties of the given type optional recursively.
 * @template T - The type to make partial.
 */
export type DeepPartial<T> = {[P in keyof T]?: DeepPartial_<T[P]>};
type DeepPartial_<T> = T extends ((...args: any[]) => any) | Primitive
  ? T
  : T extends (infer U)[]
    ? DeepPartialArray_<U>
    : T extends object
      ? DeepPartial<T>
      : T | undefined;
type DeepPartialArray_<T> = DeepPartial_<T>[];

/**
 * Represents a class constructor.
 * @template T - The type of the class.
 */
export type Class<T> = new (...args: any[]) => T;

/**
 * Removes the first parameter from a function type.
 * @template F The function type.
 * @returns A new function type without the first parameter.
 */
export type OmitFirstParam<F> = F extends (x: any, ...args: infer A) => infer R ? (...args: A) => R : never;

/**
 * Retrieves the type of a property from an object type.
 *
 * @template T - The object type.
 * @template K - The property key.
 * @returns {Prop<T, K>} - The type of the property.
 */
export type Prop<T, K> = K extends keyof T ? T[K] : never;

/**
 * Retrieves the union of all values in the given object type.
 * @typeparam T - The object type.
 * @returns The union of all values in the object type.
 */
export type Values<T> = T[keyof T];

/**
 * Extracts the type of individual items in an array.
 * If the input type is an array, it returns the type of the array items.
 * If the input type is not an array, it returns the input type itself.
 *
 * @typeParam T - The input type.
 * @returns The type of individual items in the array, or the input type itself.
 */
export type ArrayItems<T> = T extends (infer K)[] ? K : T;

/**
 * Merges two types together by omitting keys from the first type that exist in the second type,
 * and then combining the remaining keys with the keys from the second type.
 * @template M - The first type to merge.
 * @template N - The second type to merge.
 * @returns A new type that is the result of merging the two input types.
 */
export type Merge<M, N> = Omit<M, keyof N> & N;

/**
 * Make all properties in T required and exclude undefined and null from the property type.
 */
export type StrictlyRequired<T> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};

/**
 * Represents an object that has the ability to add event listeners.
 */
export interface HasAddEventListener {
  addEventListener: (type: string, listener: EventListenerOrEventListenerObject, options?: AddEventListenerOptions) => void;
}

/**
 * Represents a dictionary object with string keys and values of type T.
 */
export type Dictionary<T = any> = {[key in string]?: T};

/**
 * Matches any valid JSON primitive value.
 */
export type JsonPrimitive = string | number | boolean | null;

/**
 * Strigifyable JSON value that can be of type `string`, `number`, `boolean`, `null`, `undefined`,
 * `JSONArray`, or `JSONObject`.
 */
export type JsonValue = JsonPrimitive | JsonArray | JsonObject | JsonifiableObject;

/**
 * Represents `Array<JSONValues>`.
 */
export type JsonArray = JsonValue[] | readonly JsonValue[];

/**
 * Represents an `Dictionary` of `JSONValue` (Record<string, JSONValues>)
 */
export type JsonObject = {[Key in string]: JsonValue} & {[Key in string]?: JsonValue | undefined};

/**
 * Represents an object that can be converted to JSON value (JsonObject or an object with toJSON method).
 */
export type JsonifiableObject = JsonObject | {toJSON: () => JsonValue};

/**
 * Represents a Json response content that can be of type `JSONArray` or `JSONObject`.
 */
export type Json = JsonArray | JsonObject | JsonifiableObject;

/**
 * Represents a type that cannot be converted to JSON.
 * This includes functions, undefined, and symbols.
 */
export type NotJsonifiable = ((...arguments_: any[]) => any) | undefined | symbol;

/**
 * Filters out the keys from an object type that have values that are not JSONifiable.
 * @template T - The object type to filter.
 * @returns The keys from the object type that have values that are JSONifiable.
 */
export type FilterJsonifiableKeys<T extends object> = {
  [Key in keyof T]: T[Key] extends NotJsonifiable ? never : Key;
}[keyof T];

/**
 * Converts an object type to a JSONifiable object type.
 * @template T - The object type to be converted.
 * @returns The JSONifiable object.
 */
export type JsonifyObject<T extends object> = {
  [Key in keyof Pick<T, FilterJsonifiableKeys<T>>]: T[Key];
};

/**
 * Convert simple type (بکش از ما بیرون).
 * Useful to flatten the type output to improve type hints shown in editors.
 * And also to transform an interface into a type to aide with assignability.
 *
 * @template T - The type to be simplified.
 * @returns The simplified type.
 */
export type Simplify<T> = {[KeyType in keyof T]: T[KeyType]} & {};
