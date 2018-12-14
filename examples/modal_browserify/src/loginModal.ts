import {h} from '@soil/dom'
import {extend} from '@soil/arch'
import {modal} from './modal'

export const loginModal = () => {

    const $usernameInput = h.input({placeholder: 'Username'})
    const $passwordInput = h.input({placeholder: 'Password', type: 'password'})

    const $self = modal({title: 'Log in', onSubmit, className: 'login'}, [
        h.form({}, [
            $usernameInput,
            $passwordInput
        ])
    ])

    function onSubmit() {
        if (!$passwordInput.value) {
            alert('Please, type your password')
            $passwordInput.focus()
            return
        }
        alert(`Welcome back, ${$usernameInput.value || 'Mr. Undefined'}`)
        $self.close()
    }

    const openModal = $self.open
    const closeModal = $self.close

    function open() {
        openModal()
        $usernameInput.focus()
    }

    function close() {
        closeModal()
        $usernameInput.value = ''
        $passwordInput.value = ''
    }

    return extend($self, {open, close})
}
