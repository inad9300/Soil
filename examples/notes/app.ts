import {h} from '@soil/dom'
import {Note} from './Note'
import {toolbar} from './toolbar'
import {noteSelectors} from './noteSelectors'
import {noteEditor} from './noteEditor'

type AppInput = {
    notes: Note[]
}

export const app = (input: AppInput) => {

    const notes = input.notes

    const $toolbar = toolbar({
        onNewNote: () => {
            const newNote = {
                id: Date.now(),
                body: '',
                timestamp: Date.now()
            }

            notes.push(newNote)
            $noteSelectors.addNote(newNote)

            selectNote(newNote)
        },
        onDeleteNote: () => {
            const activeNote = $noteSelectors.getActive().getNote()
            $noteSelectors.deleteNote(activeNote)

            const idx = notes.findIndex(note => note.id === activeNote.id)
            notes.splice(idx, 1)

            if (notes.length > 0) {
                selectNote(notes[0])
            } else {
                $noteEditor.setNote({
                    id: 0,
                    body: '',
                    timestamp: Date.now()
                })
            }
        },
        onSearchNote: searchText => {
            $noteSelectors.filterNotes(searchText)
            const firstVisible = $noteSelectors.getFirstVisible()
            if (firstVisible) {
                $noteSelectors.setActive(firstVisible)
                $noteEditor.setNote(firstVisible)
            }
        }
    })

    const $noteSelectors = noteSelectors({
        onNoteSelected: selectNote
    })

    const $noteEditor = noteEditor({
        onNoteEditorChange: noteBody => {
            const activeSelector = $noteSelectors.getActive()
            if (activeSelector) {
                const activeNote = activeSelector.getNote()
                activeNote.body = noteBody
                activeSelector.setNote(activeNote)
            }
        }
    })

    const $app = h.div({id: 'app'}, [
        $toolbar,
        h.div({className: 'note-container'}, [
            $noteSelectors,
            $noteEditor
        ])
    ])

    function selectNote(note: Note) {
        $noteSelectors.setActive(note)
        $noteEditor.setNote(note)
        $noteEditor.focus()
    }

    notes.forEach($noteSelectors.addNote)
    selectNote(notes[0])

    return $app
}
