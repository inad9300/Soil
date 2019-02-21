import {Props} from './src/Props'
import {extend} from '../arch/src/extend'
import {assignProperties} from './src/assignProperties'
import {addChildren} from './src/addChildren'

// TODO Specialize for HTML and SVG elements.
function component<E extends Element, C extends Record<string, any>>(
    base: () => E,
    derived: (base: E) => C
) {
    return (props?: Props<E> & Partial<C>, children?: (Element | string)[]): E & C => {
        const b = base()
        extend(b, derived(b))
        if (props !== undefined) {
            assignProperties(b, props)
        }
        if (children !== undefined) {
            addChildren(b, children)
        }
        return b as E & C
    }
}

//

import {h} from './src/html/h'

const myComponent = component(h.button, $self => {
    $self.className = 'my-component'

    return {
        get data() {
            return Symbol('s')
        },
        set data(s: symbol) {
            console.log(s)
        }
    }
})

const mc = myComponent({data: Symbol('t')}, [])

mc.data = Symbol('tt')
mc.click()
