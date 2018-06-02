import {h} from '@soil/dom'
import {Note} from './Note'
import {formatTimestamp} from './formatTimestamp'

type NoteSelectorInput = {
    note: Note
}

function formatNoteTitle(noteBody: string): string {
    const maxLength = 20

    if (!noteBody) {
        return '(Empty note)'
    } else if (noteBody.length > maxLength) {
        return noteBody.substring(0, maxLength - 3) + '...'
    } else {
        return noteBody
    }
}

export const noteSelector = (input: NoteSelectorInput) => {

    const $noteSelectorTitle = h.p({className: 'note-selector-title'})

    const $noteSelectorTimestamp = h.p({className: 'note-selector-timestamp'})

    const $noteSelector = h.div({className: 'note-selector'}, [
        $noteSelectorTitle,
        $noteSelectorTimestamp
    ])

    function getNote() {
        return input.note
    }

    function setNote(note: Note) {
        $noteSelectorTitle.textContent = formatNoteTitle(note.body)
        $noteSelectorTimestamp.textContent = formatTimestamp(note.timestamp)
    }

    function setActiveState(active: boolean) {
        if (active) {
            $noteSelector.classList.add('active')
        } else {
            $noteSelector.classList.remove('active')
        }
    }

    function isActive(): boolean {
        return $noteSelector.classList.contains('active')
    }

    setNote(input.note)

    return Object.assign($noteSelector, {getNote, setNote, setActiveState, isActive})
}
