const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')
import {createElement} from '../../../support/testing/createElement'
import {elementsAreEqual} from '../../../support/testing/elementsAreEqual'

import {s} from './s'

const allSvgFunctions = Object.keys(s).map(k => (s as any)[k])
const allSvgTags = allSvgFunctions.map(f => f.name.endsWith('_') ? f.name.slice(0, -1) : f.name)

const tagsExcludedFromCreation = ['componentTransferFunction', 'textContent', 'textPositioning']
const tagsFailingDeepEquality = ['desc', 'foreignObject', 'title']

const globalAttributesObj = {
    id: 'c',
    tabIndex: 2,
    'font-size': '20px',
    'aria-label': 'An accessible label.',
    'data-custom-attribute': 'A custom attribute.',
    style: {color: 'black'},
    className: {baseVal: 'b'}
}

suite('s()', () => {

    test('elements without attributes nor children', () => {
        allSvgTags
            .filter(tag => tagsExcludedFromCreation.indexOf(tag) === -1)
            .forEach(tag => {
                const elemFromJs = (s as any)[tag]()
                const elemFromStr = createElement(`<${tag}></${tag}>`, true)

                elementsAreEqual(elemFromJs, elemFromStr)
            })
    })

    test('elements with global attributes, with no children', () => {
        const globalAttributesStr = `
            id="c"
            tabindex="2"
            font-size="20px"
            aria-label="An accessible label."
            data-custom-attribute="A custom attribute."
            style="color: black;"
            class="b"
        `

        allSvgTags
            .filter(tag => tagsExcludedFromCreation.indexOf(tag) === -1)
            .forEach(tag => {
                const elemFromJs = (s as any)[tag](globalAttributesObj)
                const elemFromStr = createElement(`<${tag} ${globalAttributesStr}></${tag}>`, true)

                elementsAreEqual(elemFromJs, elemFromStr)
            })
    })

    test('elements with attributes and children', () => {
        allSvgTags
            .filter(tag => tagsExcludedFromCreation.indexOf(tag) === -1)
            .forEach(tag => {
                const elemFromJs = (s as any)[tag]({}, [
                    s.tspan({id: 'a'}, ['A']),
                    s.tspan({id: 'b'}, ['B']),
                    s.tspan({id: 'c'}, [
                        '(',
                        s.a({href: {baseVal: 'https://developer.mozilla.org/'}}, [
                            'MD rocks!'
                        ]),
                        ')'
                    ])
                ])

                const elemFromStr = createElement(
                    `<${tag}>` +
                        '<tspan id="a">A</tspan>' +
                        '<tspan id="b">B</tspan>' +
                        '<tspan id="c">(<a href="https://developer.mozilla.org/">MDN rocks!</a>)</tspan>' +
                    `</${tag}>`,
                    true
                )

                elementsAreEqual(elemFromJs, elemFromStr, tagsFailingDeepEquality.indexOf(tag) > -1)
            })
    })

    test('elements with event listeners', () => {
        const $count = s.tspan({id: 'count'}, ['0'])
        const $counter = s.tspan({}, [
            s.tspan({
                id: 'increment-btn',
                onclick: () => $count.textContent = '' + (parseInt($count.textContent as string) + 1)
            }),
            $count,
            s.tspan({
                id: 'decrement-btn',
                onclick: () => $count.textContent = '' + (parseInt($count.textContent as string) - 1)
            })
        ])

        document.body.appendChild($counter)

        const countFromDom = document.getElementById('count') as any as s.Tspan
        const incrementBtn = document.getElementById('increment-btn') as any as s.Tspan
        const decrementBtn = document.getElementById('decrement-btn') as any as s.Tspan

        click(incrementBtn) // 1
        click(incrementBtn) // 2
        click(decrementBtn) // 1
        click(incrementBtn) // 2
        click(decrementBtn) // 1
        click(decrementBtn) // 0
        click(incrementBtn) // 1
        click(incrementBtn) // 2
        click(incrementBtn) // 3

        assert.strictEqual(countFromDom.textContent, '3', 'count is 3')

        function click(target: SVGElement) {
            const event = document.createEvent('SVGEvents')
            event.initEvent('click', true, true)
            target.dispatchEvent(event)
        }
    })

    test('specialized functions to create each SVG element', () => {
        allSvgFunctions.forEach((fn: Function, idx) => {
            const elemFromSpecializedFn: SVGElement = fn(globalAttributesObj)
            const elemFromGenericFn = (s as any)[allSvgTags[idx]](globalAttributesObj)

            elementsAreEqual(elemFromSpecializedFn, elemFromGenericFn)
        })
    })
})
