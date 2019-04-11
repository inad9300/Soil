import {And, IsA, IsCallback, IsIndexSignature, IsReadonly, Not, Or, Or3, Primitive} from './Types'
import {AriaAttributes} from './AriaAttributes'

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
 * - Functions (except callbacks).
 * - Read-only primitive properties.
 * - Read-only non-primitive properties whose properties cannot be modified
 *   at creation time, e.g. `readonly form: HTMLFormElement | null`.
 */
export type Props<E extends Partial<Element & AriaAttributes>> = _Props<PickPropKeys<E>> & AriaAttributes
