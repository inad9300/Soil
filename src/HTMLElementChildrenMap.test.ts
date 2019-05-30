import {HTMLElementChildrenMap} from './HTMLElementChildrenMap'

type T = HTMLElementChildrenMap extends Record<keyof HTMLElementTagNameMap, void | (string | Element)[]>
    ? true
    : false

const t: T = true

console.log(t)
