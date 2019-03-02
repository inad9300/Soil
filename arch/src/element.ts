import {extend} from './extend'
import {Props} from '../../dom/src/Props'
import {assignProps} from '../../dom/src/assignProps'
import {AriaAttributes} from '../../dom/src/AriaAttributes'

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
    A extends Props<E> & AriaAttributes & {[prop: string]: any},
    C extends void | (string | Element)[] = void
>(definition: (children?: C) => [E, A]) {
    // FIXME `Props` makes every property optional, but this decision should be
    // left for the programmer.
    return (props: Props<A>, children: C): E & A => {
        const [elem, api] = definition(children)
        extend(elem, api)
        if (props !== undefined) {
            // TODO Review cast to `any`.
            // TODO Verify that getters and setters work.
            assignProps(elem as E & A, props as any)
        }
        return elem as E & A
    }
}
