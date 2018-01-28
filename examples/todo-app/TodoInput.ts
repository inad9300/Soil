import {h, extend} from '@soil/web'
import {Todo} from './Todo'
import {TodoService} from './TodoService'

interface Options {
    onAddTodo(todo: Todo): void
}

export const TodoInput = ({todoService = TodoService()} = {}) => (options: Options) => {

    // Template.

    const $input = h.input({
        type: 'text',
        autofocus: true,
        placeholder: `What's left?`,
        onkeydown: (evt: KeyboardEvent) => {
            if (evt.key === 'Enter') {
                addTodo()
            }
        }
    })

    const $todoInput = h.div({}, [
        $input,
        h.button({onclick: addTodo}, 'Add')
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

    return extend($todoInput, {
        get onAddTodo() { return onAddTodo },
        set onAddTodo(f: Options['onAddTodo']) { setOnAddTodo(f) }
    })
}
