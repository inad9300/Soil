const {suite, test} = intern.getInterface('tdd')

import {text, h, s} from './index'

suite('index', () => {

    test('exports the right artifacts', () => {
        const t: Text = text('t')
        const ha: h.A = h.a()
        const sa: s.A = s.a()
    })
})
