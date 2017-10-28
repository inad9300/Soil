import * as dom from './dom'
import noop from './noop'
import {Todo} from './Todo'
import {TodoService} from './TodoService'
// import {ul, Ul, li, Li, button, label, input, Input} from '../../src/dom/h'
import {h} from 'soil-web'

export type TodoListI = {
    onSizeChange: (newSize: number) => void
}

export type TodoListO = {
    readonly $el: Ul
    addTodo: (todo: Todo) => void
    filterTodos: (filter: TodoFilterFn) => void
}

export type TodoFilterFn = ($todos: Li[]) => boolean[]

export const todoList = (todoService: TodoService) => (args: TodoListI): TodoListO => {
    const sizeChanged = args.onSizeChange || noop

    todoService.findTodos().then(todos => todos.forEach(addTodo))

    const $el = ul()

    function addTodo(todo: Todo) {
        const $todo = li({}, [
            button({onclick: () => deleteTodo($todo, todo)}, 'X'),
            label({textContent: todo.text}, [
                input({
                    type: 'checkbox',
                    onclick: (evt: MouseEvent) => updateTodoStatus($todo, todo, (evt.target as Input).checked)
                })
            ])
        ])

        $el.appendChild($todo)
        applyActiveFilter()
        sizeChanged($el.children.length)
    }

    let activeFilter: TodoFilterFn

    function filterTodos(filter: TodoFilterFn) {
        activeFilter = filter
        applyActiveFilter()
    }

    function deleteTodo($todo: Li, todo: Todo) {
        todoService.deleteTodo(todo).then(() => {
            $el.removeChild($todo)
            sizeChanged($el.children.length)
        })
    }

    function updateTodoStatus($todo: Li, todo: Todo, completed: boolean) {
        todoService.updateTodoStatus(todo, completed).then(todo => {
            if (todo.completed) {
                $todo.classList.add('completed')
            } else {
                $todo.classList.remove('completed')
            }
            applyActiveFilter()
        })
    }

    function applyActiveFilter() {
        if (!activeFilter) {
            return
        }
        activeFilter(Array.from($el.children) as Li[])
            .forEach((shouldShow, idx) => {
                const $todo = $el.children[idx] as Li
                shouldShow ? dom.show($todo) : dom.hide($todo)
            })
    }

    return {$el, addTodo, filterTodos}
}