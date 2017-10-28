import noop from './noop'
import {Todo} from './Todo'
import {TodoService} from './TodoService'
import {input, div, Div, button} from '../../src/dom/h'

export type TodoInputI = {
    onAddTodo: (todo: Todo) => void
}

export type TodoInputO = {
    readonly $el: Div
}

export const todoInput = (todoService: TodoService) => (args: TodoInputI): TodoInputO => {
    const todoAdded = args.onAddTodo || noop

    const $input = input({
        autofocus: true,
        placeholder: `What's left?`,
        onkeydown: (evt: KeyboardEvent) => {
            if (evt.key === 'Enter') addTodo()
        }
    })

    const $el = div({}, [
        $input,
        button({onclick: addTodo}, 'Add')
    ])

    function addTodo() {
        todoService.createTodo($input.value).then(todo => {
            todoAdded(todo)

            $input.value = ''
            $input.focus()
        })
    }

    return {$el}
}