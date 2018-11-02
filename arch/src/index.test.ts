const {suite, test} = intern.getInterface('tdd')

import {assert, Channel, extend, Component as _C, ComponentFactory as _CF} from './index'

suite('index', () => {

    test('exports the right artifacts', () => {
        assert(true, '')
        new Channel<any>()
        extend({}, {})
    })
})
