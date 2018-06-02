import {h} from '@soil/dom'
import {Note} from './Note'
import {noteSelector} from './noteSelector'

type NoteSelectorsInput = {
    onNoteSelected: (note: Note) => void
}

export const noteSelectors = (input: NoteSelectorsInput) => {

    const $noteSelectors = h.div({className: 'note-selectors'})

    function getChildren(): ReturnType<typeof noteSelector>[] {
        return Array.from($noteSelectors.children) as any
    }

    function addNote(note: Note) {
        $noteSelectors.appendChild(
            Object.assign(
                noteSelector({note}),
                {onclick: input.onNoteSelected}
            )
        )
    }

    function deleteNote(note: Note) {
        getChildren()
            .find(child => child.getNote().id === note.id)!
            .remove()
    }

    function getActive() {
        return getChildren().find(child => child.isActive())!
    }

    function setActive(note: Note) {
        getChildren()
            .forEach(child => {
                child.setActiveState(false)
                if (child.getNote().id === note.id) {
                    child.setActiveState(true)
                }
            })
    }

    function filterNotes(searchText: string) {
        searchText = searchText.toLowerCase()

        getChildren()
            .forEach(child => {
                if (child.getNote().body.toLowerCase().indexOf(searchText) > -1) {
                    child.classList.remove('hidden')
                } else {
                    child.classList.add('hidden')
                }
            })
    }

    return Object.assign($noteSelectors, {addNote, deleteNote, getActive, setActive, filterNotes})
}
