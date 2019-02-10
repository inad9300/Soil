/**
 * Function for DOM element selection, similar to the native `ParentNode.querySelector()`. It takes
 * advantage of the "universal" understanding of `$` as a selector function for maximum conciseness.
 * An optional element can be provided to determine the selection context.
 */
export function $<K extends keyof HTMLElementTagNameMap>(selector: K, context?: ParentNode): HTMLElementTagNameMap[K] | null
export function $<K extends keyof SVGElementTagNameMap>(selector: K, context?: ParentNode): SVGElementTagNameMap[K] | null
export function $<E extends Element = Element>(selector: string, context?: ParentNode): E | null
export function $(selector: string, context: ParentNode = document): Element | null {
    return context.querySelector(selector)
}
