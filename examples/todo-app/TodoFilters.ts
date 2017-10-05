import noop from './noop'
import {TodoFilterFn} from './TodoList'
import {button, div, Div, Li, Input} from '../../src/dom/h'

export type TodoFiltersI = {
    onFilterChange: (filterFn: TodoFilterFn) => void
}

export type TodoFiltersO = {
    $el: Div
    enable: () => void
    disable: () => void
}

export const todoFilters = () => (args: TodoFiltersI): TodoFiltersO => {
    const filterChanged = args.onFilterChange || noop

    const $filters = [
        button({disabled: true, onclick: () => filterChanged(todos => showAllTodos(todos))}, 'All'),
        button({disabled: true, onclick: () => filterChanged(todos => showActiveTodos(todos))}, 'Active'),
        button({disabled: true, onclick: () => filterChanged(todos => showCompletedTodos(todos))}, 'Completed')
    ]

    const $el = div({}, $filters)

    function enable() {
        $filters.forEach(btn => btn.disabled = false)
    }

    function disable() {
        $filters.forEach(btn => btn.disabled = true)
    }

    function showAllTodos($todos: Li[]) {
        return $todos.map(() => true)
    }

    function showActiveTodos($todos: Li[]) {
        return $todos.map($todo => !isTodoComplete($todo))
    }

    function showCompletedTodos($todos: Li[]) {
        return $todos.map($todo => isTodoComplete($todo))
    }

    function isTodoComplete($todo: Li): boolean {
        return ($todo.querySelector('input[type=checkbox]') as Input).checked
    }

    return {$el, enable, disable}
}