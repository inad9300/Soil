/**
 * Enhanced alias of `document.querySelectorAll()`, for the sake of conciseness.
 * In contrast with the native function, the return type is `Array` and not
 * `NodeListOf`.
 *
 * The function signatures are derived from the native interface `NodeSelector`.
 */
export function $$<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K][]
export function $$<K extends keyof HTMLElementTagNameMap>(element: Element, selector: K): HTMLElementTagNameMap[K][]

export function $$<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K][]
export function $$<K extends keyof SVGElementTagNameMap>(element: Element, selector: K): SVGElementTagNameMap[K][]

export function $$<E extends Element = Element>(selector: string): E[]
export function $$<E extends Element = Element>(element: Element, selector: string): E[]

export function $$(selectorOrElement: string | Element, nothingOrSelector: void | string) {
    let context: Element
    let selector: string
    if (typeof selectorOrElement === 'string') {
        context = document
        selector = selectorOrElement
    } else {
        context = selectorOrElement
        selector = nothingOrSelector
    }
    return Array.from(context.querySelectorAll(selector))
}
