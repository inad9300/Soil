import {todoApp} from './TodoApp'
import {todoInput} from './TodoInput'
import {todoList} from './TodoList'
import {todoFilters} from './TodoFilters'
import {TodoService} from './TodoService'
import {autofocus} from '../../src/fix/autofocus'

// Composition root of the application.

const todoService = new TodoService
const $todoApp = todoApp(
    todoInput(todoService),
    todoList(todoService),
    todoFilters()
)

document.body.appendChild($todoApp().$el)
autofocus()