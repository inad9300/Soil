import {h} from '@soil/web'
import {loginModal} from './loginModal'

const $loginModal = loginModal()
const $loginBtn = h.button({onclick: $loginModal.open}, 'Log in')

document.body.appendChild($loginBtn)
document.body.appendChild($loginModal)
