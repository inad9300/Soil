import {h} from 'soil-web'
import {noop} from './noop'
import {Todo} from './Todo'
import {show, hide} from './dom'
import {TodoService} from './TodoService'

export type TodoListI = {
    onSizeChange: (newSize: number) => void
}

export type TodoListO = {
    readonly $el: h.Ul
    addTodo: (todo: Todo) => void
    filterTodos: (filter: TodoFilterFn) => void
}

export type TodoFilterFn = ($todos: h.Li[]) => boolean[]

export const todoList = (todoService: TodoService) => (args: TodoListI): TodoListO => {
    const sizeChanged = args.onSizeChange || noop

    todoService.findTodos().then(todos => todos.forEach(addTodo))

    const $el = h.ul()

    function addTodo(todo: Todo) {
        const $todo = h.li({}, [
            h.label({textContent: todo.text}, [
                h.input({
                    type: 'checkbox',
                    onclick: (evt: MouseEvent) => updateTodoStatus($todo, todo, (evt.target as h.Input).checked)
                })
            ]),
            h.button({onclick: () => deleteTodo($todo, todo)}, '⨉')
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

    function deleteTodo($todo: h.Li, todo: Todo) {
        todoService.deleteTodo(todo).then(() => {
            $el.removeChild($todo)
            sizeChanged($el.children.length)
        })
    }

    function updateTodoStatus($todo: h.Li, todo: Todo, completed: boolean) {
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
        activeFilter(Array.from($el.children) as h.Li[])
            .forEach((shouldShow, idx) => {
                const $todo = $el.children[idx] as h.Li
                shouldShow ? show($todo) : hide($todo)
            })
    }

    return {$el, addTodo, filterTodos}
}