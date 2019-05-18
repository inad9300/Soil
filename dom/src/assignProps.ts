import {AriaAttributes} from './AriaAttributes'
import {isPlainObject} from './isPlainObject'
import {Props} from './Props'

/**
 * Assign properties from an object literal to an object of type `HTMLElement`
 * or `SVGElement`.
 */
export function assignProps<E extends Element, P extends Props<E> & AriaAttributes>(elem: E, props: P): void {
    for (const p in props) {
        if (props.hasOwnProperty(p)) {
            if (p === 'role' || p.startsWith('aria-')) {
                // First-class support for accessibility attributes.
                elem.setAttribute(p, props[p as keyof AriaAttributes] || '')
            } else if (isPlainObject(props[p])) {
                // Go deeper for properties such as `style` or SVG-specific properties.
                assignNestedProps(elem[p as keyof E], props[p]!)
            } else {
                elem[p as keyof E] = (props as unknown as E)[p as keyof E]
            }
        }
    }
}

function assignNestedProps<T extends Record<any, any>, P extends Record<any, any>>(target: T, props: P): void {
    for (const p in props) {
        if (props.hasOwnProperty(p)) {
            if (isPlainObject(props[p])) {
                if (target[p] === undefined) {
                    target[p] = {} as any
                }
                assignNestedProps(target[p], props[p])
            } else {
                target[p] = props[p]
            }
        }
    }
}
