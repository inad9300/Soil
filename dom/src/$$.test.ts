const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')
import {createElement} from '../../support/testing/createElement'

import {$$} from './$$'

suite('$$()', () => {

    test('works in a way similar to the corresponding native function', () => {
        document.body.appendChild(
            createElement(`
                <ul class="list">
                    <li class="needle">A</li>
                    <li class="needle">B</li>
                    <li class="needle">C</li>
                    <li class="needle">D</li>
                    <li class="needle">E</li>
                </ul>
            `)
        )

        const needlesArray = $$('.needle')
        const needlesNodeList = document.querySelectorAll('.needle')

        assert.strictEqual(needlesArray.length, 5)
        assert.strictEqual(needlesArray.length, needlesNodeList.length)
        assert.strictEqual(needlesArray instanceof Array, true)
        needlesArray.forEach((needle, idx) =>
            assert.strictEqual(needle, needlesNodeList[idx]))
    })
})
