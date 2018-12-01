import {h} from '@soil/dom'
import {extend} from '@soil/arch'

export const counter = (options: {value?: number} = {}) => {

    // Template.

    const $count = h.span({})

    const $counter = h.div({}, [
        h.button({onclick: () => setValue(value - 1)}, ['-']),
        $count,
        h.button({onclick: () => setValue(value + 1)}, ['+'])
    ])

    // Initialization.

    let value: number
    setValue(options.value || 0)

    // Internal methods.

    function setValue(v: number) {
        value = v
        $count.textContent = '' + v
    }

    // External API.

    return extend($counter, {
        get value() { return value },
        set value(v: number) { setValue(v) }
    })
}
