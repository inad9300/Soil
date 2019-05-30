import {And, Equals, IsA, IsCallback, IsIndexSignature, IsReadonly, Not, Or} from './Types'

const eq1: Equals<{a: 1}, {a: 1}> = true
const eq2: Equals<{a: 1}, {a: 2}> = false

console.log(eq1, eq2)

const isa1: IsA<1, number> = true
const isa2: IsA<number, 1> = false

console.log(isa1, isa2)

const ro1: IsReadonly<{readonly a: 1}, 'a'> = true
const ro2: IsReadonly<{a: 1}, 'a'> = false

console.log(ro1, ro2)

const idx1: IsIndexSignature<number> = true
const idx2: IsIndexSignature<string> = true
const idx3: IsIndexSignature<1> = false
const idx4: IsIndexSignature<'a'> = false

console.log(idx1, idx2, idx3, idx4)

const cb1: IsCallback<(evt: Event) => 1> = true
const cb2: IsCallback<() => 1> = false
const cb3: IsCallback<Function> = false

console.log(cb1, cb2, cb3)

const not1: Not<true> = false
const not2: Not<false> = true

console.log(not1, not2)

const or1: Or<true, true> = true
const or2: Or<true, false> = true
const or3: Or<false, true> = true
const or4: Or<false, false> = false

console.log(or1, or2, or3, or4)

const and1: And<true, true> = true
const and2: And<true, false> = false
const and3: And<false, true> = false
const and4: And<false, false> = false

console.log(and1, and2, and3, and4)
