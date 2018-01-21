/**
 * Version of TypeScript's `Partial` type that considers nested properties as optional too, recursively.
 *
 * FIXME This type undermines type safety, e.g. the compiler will not check function signatures. An eye must be kept on
 * https://github.com/Microsoft/TypeScript/issues/12424.
 *
 * TODO Consider the alternative proposed in https://github.com/Microsoft/TypeScript/issues/12424.
 */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] | DeepPartial<T[P]>
}