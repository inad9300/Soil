import 'intern'
import {element, chan, assert} from './index'

const {suite, test} = intern.getInterface('tdd')

suite('index (@soil/arch)', () => {

    test('exports the right artifacts', () => {
        element(() => [document.createElement('div'), {}])
        chan<any>()
        assert(true, '')
    })
})
