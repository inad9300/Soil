/**
 * Create HTML and SVG elements from a valid HTML string.
 *
 * NOTE The given HTML must contain only one root element, of type `Element`.
 */
export function createElement(html: string, isSvg = false): Element {
    if (isSvg) {
        html = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${html}</svg>`
    }
    const elem = document.createRange().createContextualFragment(html).firstElementChild as Element
    if (isSvg) {
        return elem.firstElementChild as Element
    }
    return elem
}
