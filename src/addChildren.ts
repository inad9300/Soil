/**
 * Add children to the given element.
 */
export function addChildren(elem: Element, children: (string | Element)[]): void {
    for (let i = 0; i < children.length; ++i) {
        const child = children[i]
        elem.appendChild(
            typeof child === 'string'
                ? document.createTextNode(child)
                : child
        )
    }
}
