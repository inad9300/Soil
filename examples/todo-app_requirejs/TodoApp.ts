import {h} from '@soil/dom'
import {todoList, TodoList} from './TodoList'
import {todoInput, TodoInput} from './TodoInput'
import {todoFilters} from './todoFilters'

const TodoAppFactory = (todoInput: TodoInput, todoList: TodoList) => () => {

    // Template.

    const $todoInput = todoInput({
        onAddTodo: todo => $todoList.addTodo(todo)
    })

    const $todoList = todoList({onSizeChange: toggleFilters})

    const $todoFilters = todoFilters({
        onFilterChange: filter => $todoList.filter = filter
    })

    const $self = h.div({}, [
        h.h1({}, ['Todo']),
        $todoInput,
        $todoList,
        $todoFilters
    ])

    // Internal methods.

    function toggleFilters(todoSize: number) {
        if (todoSize === 0) {
            $todoFilters.disable()
        } else if (todoSize === 1) {
            $todoFilters.enable()
        }
    }

    return $self
}

export const todoApp = TodoAppFactory(todoInput, todoList)
export type TodoApp = typeof todoApp
