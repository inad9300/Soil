import {h} from '@soil/dom'
import {Note} from './Note'
import {formatTimestamp} from './formatTimestamp'

type NoteEditorInput = {
    onNoteEditorChange: (noteBody: string) => void
}

export const noteEditor = (input: NoteEditorInput) => {

    const $noteEditorInfo = h.p({className: 'note-editor-info'})

    const $noteEditorInput = h.textarea({
        className: 'node-editor-input',
        oninput: event => input.onNoteEditorChange((event.target as h.Textarea).value)
    })

    const $noteEditor = h.div({className: 'note-editor'}, [
        $noteEditorInfo,
        $noteEditorInput
    ])

    function setNote(note: Note) {
        $noteEditorInfo.textContent = formatTimestamp(note.timestamp)
        $noteEditorInput.value = note.body
    }

    return Object.assign($noteEditor, {setNote})
}
