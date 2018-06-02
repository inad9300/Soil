import {app} from './app'
import {Note} from './Note'

const notes: Note[] = [
    {id: 1, body: 'First note', timestamp: Date.now()},
    {id: 2, body: 'Second note', timestamp: Date.now()},
    {id: 3, body: 'Third note', timestamp: Date.now()}
]

document
    .getElementById('app')!
    .appendChild(
        app({notes})
    )
