import {h} from '@soil/dom'
import {extend} from '@soil/arch'

interface Props {
    title: string
    onSubmit(): void
    className?: string
}

export const modal = (props: Props, children: HTMLElement[]) => {

    const $self = h.div({className: 'hidden modal overlay ' + (props.className || ''), onclick: close}, [
        h.div({className: 'container', onclick: preventClose}, [
            h.div({className: 'title'}, [props.title]),
            h.div({className: 'body'}, children),
            h.div({className: 'footer'}, [
                h.button({className: 'cancel', onclick: close}, ['Cancel']),
                h.button({className: 'submit', onclick: () => props.onSubmit()}, ['Submit']),
                h.div({className: 'clear'})
            ])
        ])
    ])

    document.addEventListener('keyup', evt => {
        if (evt.key === 'Escape') {
            close()
        }
    })

    function open() {
        $self.classList.remove('hidden')
    }

    function close() {
        $self.classList.add('hidden')
    }

    function preventClose(evt: Event) {
        evt.stopPropagation()
    }

    return extend($self, {open, close})
}
