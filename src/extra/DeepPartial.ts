export interface DeepPartialArray<T> extends Array<DeepPartial<T>> {}

export type DeepPartialObject<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
}

/**
 * Version of TypeScript's `Partial` type that considers nested properties as
 * optional too, recursively.
 */
export type DeepPartial<T> =
    T extends any[] ? DeepPartialArray<T[number]> :
    T extends object ? DeepPartialObject<T> :
    T
