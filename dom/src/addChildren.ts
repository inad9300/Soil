/**
 * Add children to the given element.
 */
export function addChildren(elem: Element, children: (Element | string)[]): void {
    children.forEach(child =>
        elem.appendChild(typeof child === 'string'
            ? document.createTextNode(child)
            : child)
    )
}
