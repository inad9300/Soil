import {h} from '@soil/dom'
import {loginModal} from './loginModal'

const $loginModal = loginModal()
const $loginBtn = h.button({onclick: $loginModal.open}, ['Log in'])

document.body.appendChild($loginModal)
document.body.appendChild($loginBtn)
