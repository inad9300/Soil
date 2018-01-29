import {DeepPartial} from '../extra/DeepPartial'

/**
 * Assign properties to an object of type `HTMLElement` or `SVGElement`.
 */
export function assignProperties<E extends Element, P extends DeepPartial<E>>(elem: E, props: P): void {
    doAssignProperties(elem, props)
}

function doAssignProperties<E extends Element, P extends DeepPartial<E>>(elem: E, props: P): void {
    for (const p in props) {
        if (props.hasOwnProperty(p)) {
            if (isObject(props[p])) {
                // Go deeper, for properties such as `style`.
                assignNestedProperties((elem as any)[p], props[p])
            } else {
                if (p.indexOf('-') > -1) {
                    // Deal with custom and special attributes, such as `data-*` and `aria-*` attributes.
                    elem.setAttribute(p, props[p])
                } else {
                    // Treat the rest as standard properties.
                    (elem as any)[p] = props[p]
                }
            }
        }
    }
}

function assignNestedProperties(target: {[key: string]: any}, props: {[key: string]: any}) {
    for (const p in props) {
        if (props.hasOwnProperty(p)) {
            if (isObject(props[p])) {
                // Some SVG properties are even more nested.
                assignNestedProperties(target[p], props[p])
            } else {
                target[p] = props[p]
            }
        }
    }
}

function isObject(o: any): boolean {
    return o instanceof Object && (o as Object).constructor === Object
}
