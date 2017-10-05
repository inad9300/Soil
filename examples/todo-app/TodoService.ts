import {Todo} from './Todo'

export class TodoService {

    constructor() {
    }

    private todos: Todo[] = [
        {id: 0, text: 'Prepare an awesome meal.', completed: false},
        {id: 1, text: 'Buy groceries.', completed: true},
        {id: 2, text: 'Eat!', completed: false}
    ]

    findTodos(): Promise<Todo[]> {
        return new Promise((resolve, reject) => resolve(this.todos))
    }

    createTodo(text: string): Promise<Todo> {
        return new Promise((resolve, reject) => {
            const nextId = Math.max(...this.todos.map(t => t.id)) + 1
            const newTodo = {id: nextId, text, completed: false}

            this.todos.push(newTodo)
            resolve(newTodo)
        })
    }

    updateTodoStatus(todo: Todo, completed: boolean): Promise<Todo> {
        return new Promise((resolve, reject) => {
            const targetTodo = this.todos.find(t => t.id === todo.id)
            if (targetTodo) {
                targetTodo.completed = completed
                resolve(targetTodo)
            } else {
                reject()
            }
        })
    }

    deleteTodo(todo: Todo): Promise<void> {
        return new Promise((resolve, reject) => {
            this.todos = this.todos.filter(t => t.id !== todo.id)
            resolve()
        })
    }
}