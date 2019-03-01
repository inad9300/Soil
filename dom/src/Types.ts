export type Primitive = boolean | number | string | symbol | null | undefined | void

export type Not<T extends boolean> = T extends true ? false : true

export type Or<A extends boolean, B extends boolean> = A extends true
    ? true
    : B extends true
        ? true
        : false

export type Or3<A extends boolean, B extends boolean, C extends boolean> = Or<A, Or<B, C>>

export type And<A extends boolean, B extends boolean> = A extends true
    ? B extends true
        ? true
        : false
    : false

export type IsA<T, E> = T extends E ? true : false

export type Equals<X, Y> =
    (<T> () => T extends X ? 1 : 2) extends
        (<T> () => T extends Y ? 1 : 2)
            ? true
            : false

export type IsReadonly<O extends Record<any, any>, P extends keyof O> =
    Not<Equals<{[_ in P]: O[P]}, {-readonly [_ in P]: O[P]}>>

export type IsIndexSignature<P> = Or<IsA<string, P>, IsA<number, P>>

export type IsCallback<F extends Function> = F extends (...args: any[]) => any
    ? And<Not<IsA<Parameters<F>[0], Primitive>>, IsA<Parameters<F>[0], Event>> extends true
        ? true
        : false
    : false
