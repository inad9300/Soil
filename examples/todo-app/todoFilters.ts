import {h} from '@soil/dom'
import {extend} from '@soil/arch'
import {TodosFilterFn} from './TodosFilterFn'

type OnFilterChangeFn = (filterFn: TodosFilterFn) => void

interface Options {
    onFilterChange: OnFilterChangeFn
}

export const todoFilters = (options: Options) => {

    // Template.

    const $filterButtons = [
        h.button({disabled: true, onclick: () => onFilterChange(todos => showAllTodosFilter(todos))}, ['All']),
        h.button({disabled: true, onclick: () => onFilterChange(todos => showActiveTodosFilter(todos))}, ['Active']),
        h.button({disabled: true, onclick: () => onFilterChange(todos => showCompletedTodosFilter(todos))}, ['Completed'])
    ]

    const $todoFilters = h.footer({}, $filterButtons)

    // Initialization.

    let onFilterChange: OnFilterChangeFn
    setOnFilterChange(options.onFilterChange)

    // Internal methods.

    function setOnFilterChange(f: OnFilterChangeFn) {
        onFilterChange = f
    }

    function showAllTodosFilter($todos: h.Input[]) {
        return $todos.map(() => true)
    }

    function showActiveTodosFilter($todos: h.Input[]) {
        return $todos.map($todo => !$todo.checked)
    }

    function showCompletedTodosFilter($todos: h.Input[]) {
        return $todos.map($todo => $todo.checked)
    }

    // External API.

    function enable() {
        $filterButtons.forEach(btn => btn.disabled = false)
    }

    function disable() {
        $filterButtons.forEach(btn => btn.disabled = true)
    }

    return extend($todoFilters, {
        get onFilterChange() { return onFilterChange },
        set onFilterChange(f: OnFilterChangeFn) { setOnFilterChange(f) },
        enable,
        disable
    })
}
