const {h} = soil.dom
const {extend} = soil.arch

const counter = (props) => {

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

    function setValue(v) {
        state.value = v
        $count.textContent = '' + v
    }

    return extend($self, {
        get value() { return state.value },
        set value(v) { setValue(v) }
    })
}
