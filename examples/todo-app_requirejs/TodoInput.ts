import {h} from '@soil/dom'
import {extend} from '@soil/arch'
import {Todo} from './Todo'
import {todoService, TodoService} from './TodoService'

interface Options {
    onAddTodo(todo: Todo): void
}

const TodoInputFactory = (todoService: TodoService) => (options: Options) => {

    // Template.

    const $input = h.input({
        type: 'text',
        placeholder: `What's left??`,
        onkeydown: (evt: KeyboardEvent) => {
            if (evt.key === 'Enter') {
                addTodo()
            }
        }
    })

    const $self = h.div({}, [
        $input,
        h.button({onclick: addTodo}, ['Add'])
    ])

    // Initialization.

    let onAddTodo: Options['onAddTodo']
    setOnAddTodo(options.onAddTodo)

    // Internal methods.

    function setOnAddTodo(f: Options['onAddTodo']) {
        onAddTodo = f
    }

    function addTodo() {
        if ($input.value.length === 0) {
            return
        }

        todoService.createTodo($input.value).then(todo => {
            onAddTodo(todo)

            $input.value = ''
            $input.focus()
        })
    }

    // External API.

    return extend($self, {
        get onAddTodo() { return onAddTodo },
        set onAddTodo(f: Options['onAddTodo']) { setOnAddTodo(f) }
    })
}

export const todoInput = TodoInputFactory(todoService)
export type TodoInput = typeof todoInput
