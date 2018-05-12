/**
 * Add children to the given element.
 */
export function addChildren(elem: Element, children: (Element | Text)[]): void {
    children.forEach(elem.appendChild)
}
