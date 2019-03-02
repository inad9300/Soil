import 'intern'
import {assert, chan, element, extend} from './index'

const {suite, test} = intern.getInterface('tdd')

suite('index (@soil/arch)', () => {

    test('exports the right artifacts', () => {
        assert(true, '')
        chan<any>()
        element(() => [document.createElement('div'), {}])
        extend({}, {})
    })
})
