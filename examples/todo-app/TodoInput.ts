import {h} from 'soil-web'
import {noop} from './noop'
import {Todo} from './Todo'
import {TodoService} from './TodoService'

export type TodoInputI = {
    onAddTodo: (todo: Todo) => void
}

export type TodoInputO = {
    readonly $el: h.Div
}

export const todoInput = (todoService: TodoService) => (args: TodoInputI): TodoInputO => {
    const todoAdded = args.onAddTodo || noop

    const $input = h.input({
        autofocus: true,
        placeholder: `What's left?`,
        onkeydown: (evt: KeyboardEvent) => {
            if (evt.key === 'Enter') addTodo()
        }
    })

    const $el = h.div({}, [
        $input,
        h.button({onclick: addTodo}, 'Add')
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