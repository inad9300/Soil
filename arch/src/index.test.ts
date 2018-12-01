const {suite, test} = intern.getInterface('tdd')

import {assert, chan, extend, Component as _C, ComponentFactory as _CF} from './index'

suite('index (@soil/arch)', () => {

    test('exports the right artifacts', () => {
        assert(true, '')
        chan<any>()
        extend({}, {})
    })
})
