/// <reference types="intern" />

const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')

import {h} from './h'
import {s} from './s'
import {addChildren} from './addChildren'
import {createElement} from '../testing/createElement'

suite('addChildren()', () => {

    test('works for HTML elements', () => {
        const div = createElement('<div></div>') as h.Div
        const span = createElement('<span></span>') as h.Span
        const strong = createElement('<strong></strong>') as h.Strong

        addChildren(div, [span, strong, 'test text'])

        assert.strictEqual(div.children.length, 2)
        assert.strictEqual(div.childNodes.length, 3)
        assert.strictEqual(div.firstElementChild!.tagName.toLowerCase(), 'span')
        assert.strictEqual(div.lastElementChild!.tagName.toLowerCase(), 'strong')
        assert.strictEqual(div.lastChild!.nodeType, Node.TEXT_NODE)
        assert.strictEqual(div.lastChild!.textContent, 'test text')
    })

    test('works for SVG elements', () => {
        const g = createElement('<g></g>', true) as s.G
        const a = createElement('<a></a>', true) as s.A
        const circle = createElement('<circle />') as s.Circle

        addChildren(g, [a, circle, 'test text'])

        assert.strictEqual(g.children.length, 2)
        assert.strictEqual(g.childNodes.length, 3)
        assert.strictEqual(g.firstElementChild!.tagName.toLowerCase(), 'a')
        assert.strictEqual(g.lastElementChild!.tagName.toLowerCase(), 'circle')
        assert.strictEqual(g.lastChild!.nodeType, Node.TEXT_NODE)
        assert.strictEqual(g.lastChild!.textContent, 'test text')
    })
})
