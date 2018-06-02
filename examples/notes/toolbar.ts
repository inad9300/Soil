import {h} from '@soil/dom'

type ToolbarInput = {
    onNewNote: () => void
    onDeleteNote: () => void
    onSearchNote: (text: string) => void
}

export const toolbar = (input: ToolbarInput) => {

    const $newBtn = h.button({
        className: 'toolbar-button toolbar-button-new',
        onclick: input.onNewNote
    }, ['New'])

    const $deleteBtn = h.button({
        className: 'toolbar-button toolbar-button-delete',
        onclick: input.onDeleteNote
    }, ['Delete'])

    const $searchInput = h.input({
        type: 'search',
        className: 'toolbar-search',
        placeholder: 'Search...',
        oninput: event => input.onSearchNote((event.target as h.Input).value)
    })

    const $toolbar = h.div({className: 'toolbar'}, [
        $newBtn,
        $deleteBtn,
        $searchInput
    ])

    return $toolbar
}
