const {suite, test} = intern.getInterface('tdd')

import {assert, Channel, extend, Component as _C, ComponentFactory as _CF} from './index'

suite('index (@soil/arch)', () => {

    test('exports the right artifacts', () => {
        assert(true, '')
        new Channel<any>()
        extend({}, {})
    })
})
