const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')
import {createElement} from '../testing/support/createElement'

import {HTMLElementProperties} from './h'
import {assignProperties} from './assignProperties'

suite('assignProperties()', () => {

    test('properties of various kinds', () => {
        function fun() {}

        const div = createElement('<div></div>') as HTMLElement
        assignProperties<HTMLElement, HTMLElementProperties>(div, {
            id: 'i',
            className: 'c',
            title: 't',
            style: {
                color: 'black',
                backgroundColor: 'green'
            },
            onclick: fun,
            contentEditable: 'true',
            tabIndex: 8,
            'aria-label': 'blah blah blah',
            'data-thing': 'y'
        })

        assert.strictEqual(div.id, 'i')
        assert.strictEqual(div.getAttribute('id'), 'i')

        assert.strictEqual(div.className, 'c')
        assert.strictEqual(div.getAttribute('class'), 'c')

        assert.strictEqual(div.title, 't')
        assert.strictEqual(div.getAttribute('title'), 't')

        assert.strictEqual(div.style.color, 'black')
        assert.strictEqual(div.style.backgroundColor, 'green')
        assert.strictEqual(div.getAttribute('style'), 'color: black; background-color: green;')

        assert.strictEqual(div.onclick, fun)
        assert.strictEqual(div.getAttribute('onclick'), null)

        assert.strictEqual(div.isContentEditable, true)
        assert.strictEqual(div.contentEditable, 'true')
        assert.strictEqual(div.getAttribute('contenteditable'), 'true')

        assert.strictEqual(div.tabIndex, 8)
        assert.strictEqual(div.getAttribute('tabindex'), '8')

        assert.strictEqual(div.getAttribute('aria-label'), 'blah blah blah')

        assert.strictEqual(div.getAttribute('data-thing'), 'y')
    })
})