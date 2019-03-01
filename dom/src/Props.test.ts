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
        display: 'block'
    },
    onclick: (_evt: MouseEvent) => {}
}

let _i: Props<h.I> = {}
