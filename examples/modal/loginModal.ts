import {h} from 'soil-web'
import {modal} from './modal'

type LoginModalI = {}

type LoginModalO = {
    readonly $el: h.Div
    open: () => void
    close: () => void
}

export const loginModal = (args?: LoginModalI): LoginModalO => {

    const $username = h.input({placeholder: 'Username'})
    const $password = h.input({placeholder: 'Password', type: 'password'})

    const $modalBody = h.form({}, [
        $username,
        $password
    ])

    const $modal = modal({title: 'Log in', body: $modalBody, onSubmit})
    $modal.$el.classList.add('login')

    function onSubmit() {
        alert(`Welcome back, ${$username.value}`)
        close()
    }

    function open() {
        $modal.open()
        $username.focus()
    }

    function close() {
        $modal.close()
    }

    return {$el: $modal.$el, open, close}
}