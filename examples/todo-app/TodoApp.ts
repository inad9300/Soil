import {h, Component} from 'soil-web'
import {TodoList} from './TodoList'
import {TodoInput} from './TodoInput'
import {todoFilters} from './todoFilters'

export const TodoApp = ({todoInput = TodoInput(), todoList = TodoList()} = {}) => () => {

    // Template.

    const $todoInput = todoInput({
        onAddTodo: todo => $todoList.addTodo(todo)
    })

    const $todoList = todoList({onSizeChange: toggleFilters})

    const $todoFilters = todoFilters({
        onFilterChange: filter => $todoList.filter = filter
    })

    const $todoApp = h.div({}, [
        h.h1({}, 'Todo'),
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

    return $todoApp
}