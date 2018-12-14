import {h} from '@soil/dom'
import {extend} from '@soil/arch'

export const counter = (props: {value: number}) => {

    const $count = h.span({})

    const $self = h.div({}, [
        h.button({onclick: () => setValue(state.value - 1)}, ['-']),
        $count,
        h.button({onclick: () => setValue(state.value + 1)}, ['+'])
    ])

    const state = {
        value: 0
    }

    setValue(props.value)

    function setValue(v: number) {
        state.value = v
        $count.textContent = '' + v
    }

    return extend($self, {
        get value() { return state.value },
        set value(v: number) { setValue(v) }
    })
}
