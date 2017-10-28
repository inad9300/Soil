import {h, Component} from 'soil-web'
import {TodoListI, TodoListO} from './TodoList'
import {TodoInputI, TodoInputO} from './TodoInput'
import {TodoFiltersI, TodoFiltersO} from './TodoFilters'

export type TodoAppI = {}

export type TodoAppO = {
    readonly $el: h.Div
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

    const $todoInput = todoInput({
        onAddTodo: todo => $todoList.addTodo(todo)
    })

    const $el = h.div({}, [
        h.h1({}, 'Todo'),
        $todoInput.$el,
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