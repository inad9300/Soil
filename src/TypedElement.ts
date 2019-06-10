import {HtmlTypes} from './HtmlTypes'

export type TypedElement<T extends keyof HtmlTypes, E extends Element, C extends void | (string | Element)[]> = E & {
    readonly __tagName: T
    append(...nodes: C[]): void
    prepend(...nodes: C[]): void
    appendChild(newChild: C): C
    insertBefore(newChild: C, refChild: C | null): C
    removeChild(oldChild: C): C
    replaceChild(newChild: C, oldChild: C): C
}
