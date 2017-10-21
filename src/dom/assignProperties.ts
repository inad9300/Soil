import {DeepPartial} from '../extra/DeepPartial'

type MapToAny = {[key: string]: any}

/**
 * Assign properties to an object of type `Element`.
 */
export function assignProperties<E extends Element, P extends DeepPartial<Element>>(elem: E, props: P): void {
    for (const p in props) {
        if (props.hasOwnProperty(p)) {
            if ((props as any)[p] instanceof Object && (props[p] as Object).constructor === Object) {
                // Go one level deeper, for properties such as `style`.
                for (const subP in props[p]) {
                    if ((props[p] as Object).hasOwnProperty(subP)) {
                        (elem as MapToAny)[p][subP] = props[p][subP]
                    }
                }
            } else {
                if (p.indexOf('-') > -1) {
                    // Deal with custom and special attributes, such as `data-*` and `aria-*` attributes.
                    elem.setAttribute(p, props[p])
                } else {
                    // Treat the rest as standard `Element` properties.
                    (elem as MapToAny)[p] = props[p]
                }
            }
        }
    }
}