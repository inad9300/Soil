import {h} from '@soil/dom'
import {Note} from './Note'
import {toolbar} from './toolbar'
import {noteSelectors} from './noteSelectors'
import {noteEditor} from './noteEditor'

type AppInput = {
    notes: Note[]
}

export const app = (input: AppInput) => {

    const $toolbar = toolbar({
        onNewNote: () => {
            const newNote = {
                id: Date.now(),
                body: '',
                timestamp: Date.now()
            }

            input.notes.push(newNote)
            $noteSelectors.addNote(newNote)

            selectNote(newNote)
        },
        onDeleteNote: () => {
            const activeNote = $noteSelectors.getActive().getNote()
            $noteSelectors.deleteNote(activeNote)

            const idx = input.notes.findIndex(note => note.id === activeNote.id)
            input.notes.slice(idx, 1)

            selectNote(input.notes[0])
        },
        onSearchNote: searchText => $noteSelectors.filterNotes(searchText)
    })

    const $noteSelectors = noteSelectors({
        onNoteSelected: note => selectNote(note)
    })

    const $noteEditor = noteEditor({
        onNoteEditorChange: noteBody => {
            const activeSelector = $noteSelectors.getActive()
            const activeNote = activeSelector.getNote()

            activeNote.body = noteBody
            activeSelector.setNote(activeNote)
        }
    })

    const $app = h.div({id: 'app'}, [
        h.div({className: 'note-container'}, [
            $toolbar,
            $noteSelectors,
            $noteEditor
        ])
    ])

    function selectNote(note?: Note) {
        if (note) {
            $noteSelectors.setActive(note)
            $noteEditor.setNote(note)
        } else {
            $noteEditor.setNote({
                id: 0,
                body: '',
                timestamp: Date.now()
            })
        }
    }

    input.notes.forEach($noteSelectors.addNote)
    selectNote(input.notes[0])

    return $app
}
