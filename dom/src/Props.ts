import {AriaAttributes} from './AriaAttributes'

type Primitive = boolean | number | string | symbol | null | undefined | void

type Not<T extends boolean> = T extends true ? false : true

type Or<A extends boolean, B extends boolean> = A extends true
    ? true
    : B extends true
        ? true
        : false

type Or3<A extends boolean, B extends boolean, C extends boolean> = A extends true
    ? true
    : B extends true
        ? C extends true
            ? true
            : false
        : false

type And<A extends boolean, B extends boolean> = A extends true
    ? B extends true
        ? true
        : false
    : false

type IsA<T, E> = T extends E ? true : false

type Equals<X, Y> =
    (<T> () => T extends X ? 1 : 2) extends
        (<T> () => T extends Y ? 1 : 2)
            ? true
            : false

type IsReadonly<O extends Record<any, any>, P extends keyof O> = Not<Equals<{[_ in P]: O[P]}, {-readonly [_ in P]: O[P]}>>

type IsIndexSignature<P> = string extends P
    ? true
    : number extends P
        ? true
        : false

type IsCallback<F extends Function> = F extends (...args: any[]) => any
    ? Parameters<F>[0] extends Event
        ? true
        : false
    : false

type PropKeys<E extends Record<any, any>> = {
    [P in keyof E]: Or<IsA<E[P], never>, IsIndexSignature<P>> extends true
        ? never
        : E[P] extends Primitive
            ? IsReadonly<E, P> extends true
                ? never
                : P
            : E[P] extends Function
                ? IsReadonly<E, P> extends true
                    ? never
                    : IsCallback<E[P]> extends true
                        ? P
                        : never
                : And<IsReadonly<E, P>, Or3<IsA<E[P], EventTarget>, IsA<E[P], HTMLCollectionBase>, IsA<E[P], NodeList>>> extends true
                    ? never
                    : P
} extends {[_ in keyof E]: infer U}
    ? U
    : never

type PickPropKeys<O extends Record<any, any>> = Pick<O, PropKeys<O>>

type _Props<E extends Record<any, any>> = {
    [P in keyof E]?: E[P] extends Array<infer U>
        ? Array<_Props<U>>
        : E[P] extends ReadonlyArray<infer U>
            ? ReadonlyArray<_Props<U>>
            : And<IsA<E[P], Record<any, any>>, Not<IsA<E[P], Function>>> extends true
                ? _Props<PickPropKeys<E[P]>>
                : E[P]
}

/**
 * From a given `Element`, pick those properties that can be used when creating
 * them. That means recursively ignoring:
 * - Index signatures.
 * - Functions (except those accepting a callback as first argument).
 * - Read-only primitive properties.
 * - Read-only non-primitive properties whose properties cannot be modified
 *   at creation time, e.g. `readonly form: HTMLFormElement | null`.
 * - IDEA Deprecated fields.
 * - IDEA Properties which, after ignoring all properties above, are left with
 *   an empty interface.
 */
export type Props<E extends Partial<Element>> = _Props<PickPropKeys<E>> & AriaAttributes
