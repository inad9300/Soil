import {And, Equals, IsA, IsCallback, IsIndexSignature, IsReadonly, Not, Or, Or3} from './Types'

const _eq1: Equals<{a: 1}, {a: 1}> = true
const _eq2: Equals<{a: 1}, {a: 2}> = false

const _isa1: IsA<1, number> = true
const _isa2: IsA<number, 1> = false

const _ro1: IsReadonly<{readonly a: 1}, 'a'> = true
const _ro2: IsReadonly<{a: 1}, 'a'> = false

const _idx1: IsIndexSignature<number> = true
const _idx2: IsIndexSignature<string> = true
const _idx3: IsIndexSignature<1> = false
const _idx4: IsIndexSignature<'a'> = false

const _cb1: IsCallback<(evt: Event) => 1> = true
const _cb2: IsCallback<() => 1> = false
const _cb3: IsCallback<Function> = false

const _not1: Not<true> = false
const _not2: Not<false> = true

const _or1: Or<true, true> = true
const _or2: Or<true, false> = true
const _or3: Or<false, true> = true
const _or4: Or<false, false> = false

const _or31: Or3<true, true, true> = true
const _or32: Or3<true, true, false> = true
const _or33: Or3<false, true, true> = true
const _or34: Or3<true, false, true> = true
const _or35: Or3<true, false, false> = true
const _or36: Or3<false, true, false> = true
const _or37: Or3<false, false, true> = true
const _or38: Or3<false, false, false> = false

const _and1: And<true, true> = true
const _and2: And<true, false> = false
const _and3: And<false, true> = false
const _and4: And<false, false> = false
