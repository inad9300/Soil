import {div, Div, h1} from '../../src/dom/h'
import {Component} from '../../src/core/Component'
import {TodoInputI, TodoInputO} from './TodoInput'
import {TodoListI, TodoListO} from './TodoList'
import {TodoFiltersI, TodoFiltersO} from './TodoFilters'

export type TodoAppI = {}

export type TodoAppO = {
    $el: Div
}

export const todoApp = (todoInput: Component<TodoInputI, TodoInputO>,
    todoList: Component<TodoListI, TodoListO>,
    todoFilters: Component<TodoFiltersI, TodoFiltersO>) => (args?: TodoAppI): TodoAppO => {

    const $todoList = todoList({
        onSizeChange: todoSize => toggleFilters(todoSize)
    })

    const $todoFilters = todoFilters({
        onFilterChange: filter => $todoList.filterTodos(filter)
    })

    const $el = div({}, [
        h1({}, 'Todo'),
        todoInput({onAddTodo: todo => $todoList.addTodo(todo)}).$el,
        $todoList.$el,
        $todoFilters.$el
    ])

    function toggleFilters(todoSize: number) {
        if (todoSize === 0)
            $todoFilters.disable()
        else if (todoSize === 1)
            $todoFilters.enable()
    }

    return {$el}
}