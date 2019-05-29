const {h} = soil.dom
const {element} = soil.arch

const counter = element(() => {
    const $count = h.span()

    const tmpl = h.div({}, [
        h.button({onclick: () => ctrl.value--}, ['-']),
        $count,
        h.button({onclick: () => ctrl.value++}, ['+'])
    ])

    const ctrl = {
        get value() {
            return parseInt($count.textContent, 10)
        },
        set value(v) {
            $count.textContent = '' + v
        }
    }

    return [tmpl, ctrl]
})
