/**
 * Function for DOM element selection, similar to the native `ParentNode.querySelector()`. It takes
 * advantage of the "universal" understanding of `$` as a selector function for maximum conciseness.
 */
export function $<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null
export function $<K extends keyof HTMLElementTagNameMap>(element: Element, selector: K): HTMLElementTagNameMap[K] | null

export function $<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null
export function $<K extends keyof SVGElementTagNameMap>(element: Element, selector: K): SVGElementTagNameMap[K] | null

export function $<E extends Element = Element>(selector: string): E | null
export function $<E extends Element = Element>(element: Element, selector: string): E | null

export function $(selectorOrElement: string | Element, nothingOrSelector: void | string): Element | null {
    let context: Element
    let selector: string
    if (typeof selectorOrElement === 'string') {
        context = document
        selector = selectorOrElement
    } else {
        context = selectorOrElement
        selector = nothingOrSelector
    }
    return context.querySelector(selector)
}
