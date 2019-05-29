import {h} from '@soil/dom'
import {element} from '@soil/arch'

export const counter = element(() => {
    const count = h('span')

    const tmpl = h('div', {}, [
        h('button', {onclick: () => ctrl.value--}, ['-']),
        count,
        h('button', {onclick: () => ctrl.value++}, ['+'])
    ])

    const ctrl = {
        get value() {
            return parseInt(count.textContent!, 10)
        },
        set value(c: number) {
            count.textContent = '' + c
        }
    }

    return [tmpl, ctrl]
})
