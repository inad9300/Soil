import {isObject} from './isObject'

/**
 * Assign properties from an object literal to an object of type `HTMLElement`
 * or `SVGElement`.
 */
export function assignProperties<E extends {[p: string]: any}, P extends {[p: string]: any}>(elem: E, props: P): void {
    for (const p in props) {
        if (props.hasOwnProperty(p)) {
            if (p === 'role' || p.startsWith('aria-')) {
                // First-class support for accessibility attributes.
                elem.setAttribute(p, props[p])
            } else if (isObject(props[p])) {
                // Go deeper for properties such as `style` or SVG-specific properties.
                assignNestedProperties(elem[p], props[p])
            } else {
                elem[p] = props[p]
            }
        }
    }
}

function assignNestedProperties<E extends {[p: string]: any}, P extends {[p: string]: any}>(elem: E, props: P): void {
    for (const p in props) {
        if (props.hasOwnProperty(p)) {
            if (isObject(props[p])) {
                if (!elem[p]) {
                    elem[p as string] = {}
                }
                assignNestedProperties(elem[p], props[p])
            } else {
                elem[p] = props[p]
            }
        }
    }
}
