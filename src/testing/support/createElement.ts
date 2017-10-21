/**
 * Create HTML and SVG elements from a valid HTML string.
 *
 * The given HTML must contain only one root element, of type `Element`.
 */
export function createElement(html: string): Element {
    return document.createRange().createContextualFragment(html).firstElementChild as Element
}