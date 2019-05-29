/// <reference types="intern" />

const {suite, test} = intern.getInterface('tdd')

import {h, s, element} from './index'

suite('index (@soil/dom)', () => {

    test('exports the right artifacts', () => {
        const ha: h.A = h('a')
        const sa: s.A = s('a')

        ha.href
        sa.href

        element(() => [document.createElement('div'), {}])
    })
})
