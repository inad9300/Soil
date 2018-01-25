import {h, extend} from 'soil-web'
import {noop} from './noop'
import {Todo} from './Todo'
import {show, hide} from './dom'
import {TodoService} from './TodoService'
import {TodosFilterFn} from './TodosFilterFn'

type OnSizeChangeFn = (newSize: number) => void

interface Options {
    filter?: TodosFilterFn
    onSizeChange?: OnSizeChangeFn
}

export const TodoList = ({todoService = TodoService()} = {}) => (options: Options = {}) => {

    // Template.

    const $todoList = h.ul()

    // Initialization.

    let activeFilter: TodosFilterFn
    let onSizeChange: OnSizeChangeFn

    setFilter(options.filter || showAllFilter)
    setOnSizeChange(options.onSizeChange || noop)

    todoService.findTodos().then(todos => todos.forEach(addTodo))

    // Internal methods.

    function setFilter(f: TodosFilterFn) {
        activeFilter = f
        applyActiveFilter()
    }

    function setOnSizeChange(f: OnSizeChangeFn) {
        onSizeChange = f
    }

    function showAllFilter(items: h.Input[]) {
        return items.map(() => true)
    }

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

        $todoList.appendChild($todo)
        applyActiveFilter()
        onSizeChange($todoList.children.length)
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

    function deleteTodo($todo: h.Li, todo: Todo) {
        todoService.deleteTodo(todo).then(() => {
            $todoList.removeChild($todo)
            onSizeChange($todoList.children.length)
        })
    }

    function applyActiveFilter() {
        const checkboxes = (Array.from($todoList.children) as h.Li[])
            .map(li => li.querySelector('input[type=checkbox]') as h.Input)

        activeFilter(checkboxes)
            .forEach((shouldShow, idx) => {
                const $todo = $todoList.children[idx] as h.Li
                shouldShow ? show($todo) : hide($todo)
            })
    }

    // External API.

    return extend($todoList, {
        get filter() { return activeFilter },
        set filter(f: TodosFilterFn) { setFilter(f) },
        get onSizeChange() { return onSizeChange },
        set onSizeChange(f: OnSizeChangeFn) { setOnSizeChange(f) },
        addTodo
    })
}