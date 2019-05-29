import {And, Equals, IsA, IsCallback, IsIndexSignature, IsReadonly, Not, Or} from './Types'

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

const _and1: And<true, true> = true
const _and2: And<true, false> = false
const _and3: And<false, true> = false
const _and4: And<false, false> = false

console.log(
    _eq1, _eq2, _isa1, _isa2, _ro1, _ro2, _idx1, _idx2, _idx3, _idx4, _cb1,
    _cb2, _cb3, _not1, _not2, _or1, _or2, _or3, _or4,_and1, _and2, _and3, _and4
)
