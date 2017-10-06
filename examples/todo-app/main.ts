import {todoApp} from './TodoApp'
import {todoInput} from './TodoInput'
import {todoList} from './TodoList'
import {todoFilters} from './TodoFilters'
import {TodoService} from './TodoService'

// Composition root of the application.

const todoService = new TodoService
const $todoApp = todoApp(
    todoInput(todoService),
    todoList(todoService),
    todoFilters()
)

document.body.appendChild($todoApp().$el)

const $firstFocusable = document.querySelector('[autofocus]')
if ($firstFocusable) {
    ($firstFocusable as HTMLElement).focus()
}