import {h} from 'soil-web'

type ModalI = {
    title: string
    body: HTMLElement
    onSubmit: Function
}

type ModalO = {
    readonly $el: h.Div
    open: () => void
    close: () => void
}

export const modal = (args: ModalI): ModalO => {

    const $el = h.div({className: 'hidden modal overlay', onclick: close}, [
        h.div({className: 'container', onclick: preventClose}, [
            h.div({className: 'title'}, args.title),
            h.div({className: 'body'}, [
                args.body
            ]),
            h.div({className: 'footer'}, [
                h.button({className: 'cancel', onclick: close}, 'Cancel'),
                h.button({className: 'submit', onclick: args.onSubmit}, 'Submit'),
                h.div({className: 'clear'})
            ])
        ])
    ])

    function open() {
        $el.classList.remove('hidden')
    }

    function close() {
        $el.classList.add('hidden')
    }

    function preventClose(evt: Event) {
        evt.stopPropagation()
    }

    return {$el, open, close}
}