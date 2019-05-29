import {extend} from './extend'
import {Props} from './Props'
import {assignProps} from './assignProps'

/**
 * Define a custom UI component, i.e. a piece of code whose (only) purpose is to
 * render HTML and/or SVG elements on the screen and manage the user interaction
 * with these.
 *
 * Components created with this function will behave very similarly to native
 * HTML and SVG elements – custom elements can be considered special cases of
 * native ones (as in Web Components).
 */
export function element<
    E extends Element,
    A extends Props<E> & Record<string, any>,
    C extends void | (string | Element)[]
>(definition: (children: C) => [E, A]) {
    return (props: void | Props<E & A>, children: C): E & A => {
        const [elem, api] = definition(children)
        extend(elem, api)
        if (props !== undefined) {
            assignProps(elem as E & A, props)
        }
        return elem as E & A
    }
}
