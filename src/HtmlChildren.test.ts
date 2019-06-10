import {HtmlChildren} from './HtmlChildren'

type T = HtmlChildren extends Record<keyof HTMLElementTagNameMap, void | (string | Element)[]>
    ? true
    : false

const t: T = true

console.log(t)
