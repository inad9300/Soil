import {TodoApp} from './TodoApp'
import {autofocus} from 'soil-web'

const todoApp = TodoApp()
const $todoApp = todoApp()

document.body.appendChild($todoApp)
autofocus()
