import {h, extend} from '@soil/web'

interface Options {
    title: string
    body: HTMLElement
    onSubmit(): void
}

export const modal = (options: Options) => {

    // Template.

    const $title = h.div({className: 'title'})

    const $body = h.div({className: 'body'})

    const $modal = h.div({className: 'hidden modal overlay', onclick: close}, [
        h.div({className: 'container', onclick: preventClose}, [
            $title,
            $body,
            h.div({className: 'footer'}, [
                h.button({className: 'cancel', onclick: close}, 'Cancel'),
                h.button({className: 'submit', onclick: () => onSubmit()}, 'Submit'),
                h.div({className: 'clear'})
            ])
        ])
    ])

    // Initialization.

    let title: string
    let body: HTMLElement
    let onSubmit: () => void

    setTitle(options.title)
    setBody(options.body)
    setOnSubmit(options.onSubmit)

    // Internal methods.

    function setTitle(t: string) {
        $title.textContent = title = t
    }

    function setBody(b: HTMLElement) {
        body = b
        $body.innerHTML = ''
        $body.appendChild(b)
    }

    function setOnSubmit(f: () => void) {
        onSubmit = f
    }

    function open() {
        $modal.classList.remove('hidden')
    }

    function close() {
        $modal.classList.add('hidden')
    }

    function preventClose(evt: Event) {
        evt.stopPropagation()
    }

    // External API.

    return extend($modal, {
        open,
        close,
        get title() { return title },
        set title(t: string) { setTitle(t) },
        get body() { return body },
        set body(b: HTMLElement) { setBody(b) },
        get onSubmit() { return onSubmit },
        set onSubmit(f: () => void) { setOnSubmit(f) }
    })
}
