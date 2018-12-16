const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')
import {createElement} from '../../support/testing/createElement'

import {$} from './$'

suite('$()', () => {

    test('is equal to the equivalent native function', () => {
        assert.strictEqual($, document.querySelector)
    })

    test('finds elements in a tree', () => {
        document.body.appendChild(
            createElement(`
                <div class="wrapper">
                    <button>B</button>
                    <a href="#">
                        <span>needle</span>
                    </a>
                </div>
            `)
        )
        assert.strictEqual($('.wrapper span')!.textContent, 'needle')
    })
})
