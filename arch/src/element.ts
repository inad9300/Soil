import {extend} from './extend'
import {Props} from '../../dom/src/Props'
import {assignProps} from '../../dom/src/assignProps'
import {AriaAttributes} from '../../dom/src/AriaAttributes'

export function element<
    E extends Element,
    A extends Props<E> & AriaAttributes & {[prop: string]: any},
    C extends void | (string | Element)[] = void
>(definition: (children?: C) => [E, A]) {
    return (props: Props<A>, children: C): E & A => {
        const [elem, api] = definition(children)
        extend(elem, api)
        if (props !== undefined) {
            assignProps(elem as E & A, props as any) // TODO Review cast to `any`.
        }
        return elem as E & A
    }
}
