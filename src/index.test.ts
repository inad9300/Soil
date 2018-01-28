const {suite, test} = intern.getInterface('tdd')

import {Component, ComponentFactory, Channel, assert, extend, h, s, DeepPartial, autofocus} from './index'

suite('index', () => {

    test('exports the right artifacts', () => {
        let comp: Component
        let compFactory: ComponentFactory

        const stringChan = new Channel<string>()

        assert(true)
        extend({}, {})

        h.h('a')
        s.s('a')

        let o: DeepPartial<Object>

        autofocus()
    })
})
