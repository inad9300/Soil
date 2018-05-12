const {suite, test} = intern.getInterface('tdd')

import {h, s} from './index'

suite('index', () => {

    test('exports the right artifacts', () => {
        const ha: h.A = h.a()
        const sa: s.A = s.a()

        ha.href
        sa.href
    })
})
