export type False = '0'
export type True = '1'

export type If<C extends True | False, Then, Else> = {'0': Else, '1': Then}[C]

export type Diff<T extends string, U extends string> = (
    {[P in T]: P} & {[P in U]: never} & {[x: string]: never}
)[T]

export type X<T> = Diff<keyof T, keyof Object>

export type Is<T, U> = (Record<X<T & U>, False> & Record<any, True>)[Diff<X<T>, X<U>>]

/**
 * Version of TypeScript's `Partial` type that considers nested properties as optional too, recursively.
 *
 * FIXME The current implementation is taken from https://github.com/Microsoft/TypeScript/issues/12424 and has at least
 * one known issue. Newer versions of TypeScript will probably allow to create a more robust and more readable version
 * of this type.
 */
export type DeepPartial<T> = {
    [P in keyof T]?: If<Is<T[P], object>, T[P], DeepPartial<T[P]>>
}
