const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')
import {createElement} from '../testing/support/createElement'
import {elementsAreEqual} from '../testing/support/elementsAreEqual'

import {s, SVGElementProperties, SVGTag} from './s'
import {Tspan} from './s'
import {a, circle, clipPath, componentTransferFunction, defs, desc, ellipse, feBlend, feColorMatrix, feComponentTransfer, feComposite, feConvolveMatrix, feDiffuseLighting, feDisplacementMap, feDistantLight, feFlood, feFuncA, feFuncB, feFuncG, feFuncR, feGaussianBlur, feImage, feMerge, feMergeNode, feMorphology, feOffset, fePointLight, feSpecularLighting, feSpotLight, feTile, feTurbulence, filter, foreignObject, g, gradient, image, line, linearGradient, marker, mask, metadata, path, pattern, polygon, polyline, radialGradient, rect, script, stop, style, svg, switch_, symbol, text, textContent, textPath, textPositioning, title, tspan, use, view} from './s'

const allSvgFunctions = [a, circle, clipPath, componentTransferFunction, defs, desc, ellipse, feBlend, feColorMatrix, feComponentTransfer, feComposite, feConvolveMatrix, feDiffuseLighting, feDisplacementMap, feDistantLight, feFlood, feFuncA, feFuncB, feFuncG, feFuncR, feGaussianBlur, feImage, feMerge, feMergeNode, feMorphology, feOffset, fePointLight, feSpecularLighting, feSpotLight, feTile, feTurbulence, filter, foreignObject, g, gradient, image, line, linearGradient, marker, mask, metadata, path, pattern, polygon, polyline, radialGradient, rect, script, stop, style, svg, switch_, symbol, text, textContent, textPath, textPositioning, title, tspan, use, view]

const allSvgTags: SVGTag[] = ['a', 'circle', 'clipPath', 'componentTransferFunction', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'foreignObject', 'g', 'gradient', 'image', 'line', 'linearGradient', 'marker', 'mask', 'metadata', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script', 'stop', 'style', 'svg', 'switch', 'symbol', 'text', 'textContent', 'textPath', 'textPositioning', 'title', 'tspan', 'use', 'view']

const tagsExcludedFromCreation = ['componentTransferFunction', 'textContent', 'textPositioning']
const tagsFailingDeepEquality = ['desc', 'foreignObject', 'title']

const globalAttributesObj: SVGElementProperties = {
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
                const elemFromJs = s(tag)
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
                const elemFromJs = s(tag, globalAttributesObj)
                const elemFromStr = createElement(`<${tag} ${globalAttributesStr}></${tag}>`, true)

                elementsAreEqual(elemFromJs, elemFromStr)
            })
    })

    test('elements with attributes and children', () => {
        allSvgTags
            .filter(tag => tagsExcludedFromCreation.indexOf(tag) === -1)
            .forEach(tag => {
                const elemFromJs = s(tag, {}, [
                    s('tspan', {id: 'a'}, 'A'),
                    s('tspan', {id: 'b'}, 'B'),
                    s('tspan', {id: 'c'}, 'C')
                ])

                const elemFromStr = createElement(
                    `<${tag}>` +
                        '<tspan id="a">A</tspan>' +
                        '<tspan id="b">B</tspan>' +
                        '<tspan id="c">C</tspan>' +
                    `</${tag}>`,
                    true
                )

                elementsAreEqual(elemFromJs, elemFromStr, tagsFailingDeepEquality.indexOf(tag) > -1)
            })
    })

    test('elements with event listeners', () => {
        const $count = tspan({id: 'count'}, '0')
        const $counter = tspan({}, [
            tspan({
                id: 'increment-btn',
                onclick: () => $count.textContent = '' + (parseInt($count.textContent as string) + 1)
            }),
            $count,
            tspan({
                id: 'decrement-btn',
                onclick: () => $count.textContent = '' + (parseInt($count.textContent as string) - 1)
            })
        ])

        document.body.appendChild($counter)

        const countFromDom = document.getElementById('count') as any as Tspan
        const incrementBtn = document.getElementById('increment-btn') as any as Tspan
        const decrementBtn = document.getElementById('decrement-btn') as any as Tspan

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
            var event = document.createEvent('SVGEvents')
            event.initEvent('click', true, true)
            target.dispatchEvent(event)
        }
    })

    test('specialized functions to create each SVG element', () => {
        allSvgFunctions.forEach((fn: Function, idx) => {
            const elemFromSpecializedFn: SVGElement = fn(globalAttributesObj)
            const elemFromGenericFn = s(allSvgTags[idx], globalAttributesObj)

            elementsAreEqual(elemFromSpecializedFn, elemFromGenericFn)
        })
    })
})