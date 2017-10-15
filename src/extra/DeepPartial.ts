/**
 * Version of TypeScript's `Partial` type that considers nested properties as optional too.
 */
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
}