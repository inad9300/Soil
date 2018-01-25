const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')

import {textarea} from '../dom/h'
import {autofocus} from './autofocus'

suite('autofocus()', () => {

    test('focus is set to the first visible element', () => {
        assert.strictEqual(document.readyState, 'complete', 'the page has finished loading before running the test')

        document.body.appendChild(textarea({id: 't1', autofocus: true, style: {display: 'none'}}))
        document.body.appendChild(textarea({id: 't2', autofocus: true}))
        document.body.appendChild(textarea({id: 't3', autofocus: true}))
        assert.strictEqual(document.activeElement, document.body)

        autofocus()
        assert.strictEqual(document.activeElement, document.querySelector('textarea#t2'))
    })
})
