/**
 * Function for DOM element selection, similar to the native `ParentNode.querySelector()`. It takes
 * advantage of the "universal" understanding of `$` as a selector function for maximum conciseness.
 *
 * TODO Improve function signatures.
 */
export function $(selector: string): Element | null
export function $(element: Element, selector: string): Element | null
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
