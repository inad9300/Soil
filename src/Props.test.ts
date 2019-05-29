import {h} from './h'
import {Props} from './Props'

let a: h.A = undefined as any
let _a: Props<h.A> = a

let f: h.Form = undefined as any
let _f: Props<h.Form> = f

let _b: Props<h.Button> = {
    className: 'Go!',
    disabled: true,
    style: {
        display: 'block',
        textAlign: 'center'
    },
    onclick: (_evt: MouseEvent) => {},
    'aria-label': 'x'
}

let _i: Props<h.I> = {}

console.log(_a, _f, _b, _i)
