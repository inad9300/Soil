import {h} from 'soil-web'
import {noop} from './noop'
import {TodoFilterFn} from './TodoList'

export type TodoFiltersI = {
    onFilterChange: (filterFn: TodoFilterFn) => void
}

export type TodoFiltersO = {
    readonly $el: h.Div
    enable: () => void
    disable: () => void
}

export const todoFilters = () => (args: TodoFiltersI): TodoFiltersO => {
    const filterChanged = args.onFilterChange || noop

    const $filters = [
        h.button({disabled: true, onclick: () => filterChanged(todos => showAllTodos(todos))}, 'All'),
        h.button({disabled: true, onclick: () => filterChanged(todos => showActiveTodos(todos))}, 'Active'),
        h.button({disabled: true, onclick: () => filterChanged(todos => showCompletedTodos(todos))}, 'Completed')
    ]

    const $el = h.div({}, $filters)

    function enable() {
        $filters.forEach(btn => btn.disabled = false)
    }

    function disable() {
        $filters.forEach(btn => btn.disabled = true)
    }

    function showAllTodos($todos: h.Li[]) {
        return $todos.map(() => true)
    }

    function showActiveTodos($todos: h.Li[]) {
        return $todos.map($todo => !isTodoComplete($todo))
    }

    function showCompletedTodos($todos: h.Li[]) {
        return $todos.map($todo => isTodoComplete($todo))
    }

    function isTodoComplete($todo: h.Li): boolean {
        return ($todo.querySelector('input[type=checkbox]') as h.Input).checked
    }

    return {$el, enable, disable}
}