import {HtmlTypes} from './HtmlTypes'

type T = HtmlTypes extends Record<keyof HTMLElementTagNameMap, HTMLElement>
    ? true
    : false

const t: T = true

console.log(t)
