const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')
import {createElement} from '../../support/testing/createElement'

import {h} from './html/h'
import {s} from './svg/s'
import {assignProperties} from './assignProperties'

suite('assignProperties()', () => {

    test('properties of various kinds', () => {
        function fun() {}

        const div = createElement('<div></div>') as h.Div
        assignProperties(div, {
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
            'aria-label': 'blah blah blah'
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
    })

    test('nested SVG properties', () => {
        const circle = createElement(`<circle />`, true) as s.Circle
        assignProperties(circle, {
            cx: {
                baseVal: {
                    value: 50
                }
            },
            cy: {
                baseVal: {
                    value: 50
                }
            },
            r: {
                baseVal: {
                    value: 40
                }
            },
            style: {
                stroke: 'green',
                strokeWidth: '4',
                fill: 'yellow'
            }
        })

        assert.strictEqual(circle.cx.baseVal.value, 50)
        assert.strictEqual(circle.cy.baseVal.value, 50)
        assert.strictEqual(circle.r.baseVal.value, 40)
        assert.strictEqual(circle.style.stroke, 'green')
        assert.strictEqual(circle.style.strokeWidth, '4')
        assert.strictEqual(circle.style.fill, 'yellow')
    })

    test('object properties not present in target', () => {
        const target = {x: 3}
        const source = {o: {y: 4}}

        assignProperties(target, source)

        assert.strictEqual((target as any).o.y, 4)
    })
})
