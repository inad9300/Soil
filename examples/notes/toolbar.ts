import {h} from '@soil/dom'

type ToolbarInput = {
    onNewNote: () => void
    onDeleteNote: () => void
    onSearchNote: (text: string) => void
}

export const toolbar = (input: ToolbarInput) => h.div({className: 'toolbar'}, [
    h.button({
        textContent: 'New',
        className: 'toolbar-button toolbar-button-new',
        onclick: input.onNewNote
    }),
    h.button({
        textContent: 'Delete',
        className: 'toolbar-button toolbar-button-delete',
        onclick: input.onDeleteNote
    }),
    h.input({
        type: 'search',
        placeholder: 'Search...',
        className: 'toolbar-search',
        oninput: event => input.onSearchNote((event.target as h.Input).value)
    })
])
