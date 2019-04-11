import {h} from './html/h'
import {Props} from './Props'

let a: h.A
let _a: Props<h.A> = a

let f: h.Form
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
