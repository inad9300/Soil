import {h, extend} from 'soil-web'
import {modal} from './modal'

export const loginModal = () => {

    // Template.

    const $username = h.input({placeholder: 'Username'})
    const $password = h.input({placeholder: 'Password', type: 'password'})

    const $body = h.form({}, [
        $username,
        $password
    ])

    const $modal = modal({title: 'Log in', body: $body, onSubmit})
    $modal.classList.add('login')

    // Internal methods.

    function onSubmit() {
        alert(`Welcome back, ${$username.value}`)
        $modal.close()
    }

    const openModal = $modal.open

    function open() {
        openModal()
        $username.focus()
    }

    // External API.

    return extend($modal, {open})
}
