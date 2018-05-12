const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')
import {createElement} from '../../../support/testing/createElement'
import {elementsAreEqual} from '../../../support/testing/elementsAreEqual'

import {h} from './h'

const allHtmlFunctions = Object.keys(h).filter(k => k !== 'x').map(k => (h as any)[k])
const allHtmlTags = allHtmlFunctions.map(f => f.name.endsWith('_') ? f.name.slice(0, -1) : f.name)

const tagsExcludedFromCreation = ['html', 'head', 'body', 'caption', 'col', 'colgroup', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr']
const tagsNotAcceptingChildren = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']

// Tags with special requirements for their children, or not playing well together with the function used to create
// elements from HTML strings (which is the case for `<template>`).
const tagsNotAcceptingEveryChildren = ['iframe', 'noframes', 'noscript', 'script', 'select', 'style', 'table', 'template', 'textarea', 'title']

const globalAttributesObj = {
    accessKey: 'A',
    className: 'b',
    contentEditable: 'true',
    dir: 'ltr',
    draggable: false,
    id: 'c',
    lang: 'fr',
    spellcheck: true,
    tabIndex: 2,
    title: 'd',
    'aria-label': 'An accessible label.',
    'data-custom-attribute': 'A custom attribute.',
    style: {color: 'black'}
}

suite('h()', () => {

    test('elements without attributes nor children', () => {
        allHtmlTags
            .filter(tag => tagsExcludedFromCreation.indexOf(tag) === -1)
            .forEach(tag => {
                const elemFromJs = (h as any)[tag]()
                const elemFromStr = createElement(`<${tag}></${tag}>`)

                elementsAreEqual(elemFromJs, elemFromStr)
            })
    })

    test('elements with global attributes, with no children', () => {
        const globalAttributesStr = `
            accesskey="A"
            class="b"
            contenteditable="true"
            dir="ltr"
            draggable="false"
            id="c"
            lang="fr"
            spellcheck="true"
            tabindex="2"
            title="d"
            aria-label="An accessible label."
            data-custom-attribute="A custom attribute."
            style="color: black;"
        `

        allHtmlTags
            .filter(tag => tagsExcludedFromCreation.indexOf(tag) === -1)
            .forEach(tag => {
                const elemFromJs = (h as any)[tag](globalAttributesObj)
                const elemFromStr = createElement(`<${tag} ${globalAttributesStr}></${tag}>`)

                elementsAreEqual(elemFromJs, elemFromStr)
            })
    })

    test('elements with attributes and children', () => {
        allHtmlTags
            .filter(tag => tagsExcludedFromCreation.indexOf(tag) === -1)
            .filter(tag => tagsNotAcceptingChildren.indexOf(tag) === -1)
            .filter(tag => tagsNotAcceptingEveryChildren.indexOf(tag) === -1)
            .forEach(tag => {
                const elemFromJs = (h as any)[tag]({}, [
                    h.span({title: 'A'}, ['A']),
                    h.span({className: 'b'}, ['B']),
                    h.span({id: 'c'}, [
                        '(', h.abbr({title: '??'}, ['C']), ')'
                    ])
                ])

                const elemFromStr = createElement(
                    `<${tag}>` +
                        '<span title="A">A</span>' +
                        '<span class="b">B</span>' +
                        '<span id="c">(<abbr title="??">C</abbr>)</span>' +
                    `</${tag}>`
                )

                elementsAreEqual(elemFromJs, elemFromStr)
            })
    })

    test('elements with event listeners', () => {
        const $count = h.span({id: 'count'}, ['0'])
        const $counter = h.div({}, [
            h.button({
                id: 'increment-btn',
                onclick: () => $count.textContent = '' + (parseInt($count.textContent as string) + 1)
            }),
            $count,
            h.button({
                id: 'decrement-btn',
                onclick: () => $count.textContent = '' + (parseInt($count.textContent as string) - 1)
            })
        ])

        document.body.appendChild($counter)

        const countFromDom = document.getElementById('count') as h.Span
        const incrementBtn = document.getElementById('increment-btn') as h.Button
        const decrementBtn = document.getElementById('decrement-btn') as h.Button

        incrementBtn.click() // 1
        incrementBtn.click() // 2
        decrementBtn.click() // 1
        incrementBtn.click() // 2
        decrementBtn.click() // 1
        decrementBtn.click() // 0
        incrementBtn.click() // 1
        incrementBtn.click() // 2
        incrementBtn.click() // 3

        assert.strictEqual(countFromDom.textContent, '3', 'count is 3')
    })

    test('elements with attributes having some effect on page load', () => {
        assert.strictEqual(document.readyState, 'complete', 'the page has finished loading before running the test')

        document.body.appendChild(h.div({}, [
            h.input({id: 'textbox', type: 'text', value: 'Abc'}),
            h.input({id: 'checkbox', type: 'checkbox', checked: true}),
            h.audio({id: 'audio-player', muted: true}),
            h.details({id: 'details', open: true}, [
                h.summary({}, ['Some details']),
                h.p({}, ['More info about the details.'])
            ]),
            h.select({id: 'dropdown'}, [
                h.option({value: 'a'}, ['Opt. A']),
                h.option({value: 'b', selected: true}, ['Opt. B'])
            ])
        ]))

        assert.strictEqual((document.querySelector('#textbox') as h.Input).value, 'Abc')
        assert.strictEqual((document.querySelector('#checkbox') as h.Input).checked, true)
        assert.strictEqual((document.querySelector('#audio-player') as h.Audio).muted, true)
        assert.strictEqual((document.querySelector('#details') as h.Details).open, true)
        assert.strictEqual((document.querySelector('#dropdown option[value=b]') as h.Option).selected, true)
    })

    test('specialized functions to create each HTML element', () => {
        allHtmlFunctions.forEach((fn: Function, idx) => {
            const elemFromSpecializedFn: HTMLElement = fn(globalAttributesObj)
            const elemFromGenericFn = (h as any)[allHtmlTags[idx]](globalAttributesObj)

            elementsAreEqual(elemFromSpecializedFn, elemFromGenericFn)
        })
    })

    // Elements accepting only certain kinds of children.

    test('<html>, <head>, <title> and <body> tags', () => {
        const elem = h.html({lang: 'en'}, [
            h.head({}, [
                h.title({}, ['Test title.'])
            ]),
            h.body({}, [
                h.h1({}, ['Fancy test.'])
            ])
        ])

        document.open()
        document.write('')
        document.appendChild(elem)
        document.close()

        assert.strictEqual(document.querySelectorAll('*').length, 5, 'there are 4 HTML elements on the page')
        assert.strictEqual(document.title, 'Test title.')
        assert.strictEqual((document.querySelector('h1') as h.H1).textContent, 'Fancy test.')
    })

    test('table with all table-specific elements', () => {
        const completeTableFromJs = h.table({}, [
            h.caption({}, ['A table caption.']),
            h.colgroup({}, [
                h.col({span: 2, style: {backgroundColor: 'red'}}),
                h.col({style: {backgroundColor: 'yellow'}}),
            ]),
            h.thead({}, [
                h.tr({}, [
                    h.th({}, ['H1']),
                    h.th({}, ['H2']),
                    h.th({}, ['H3'])
                ])
            ]),
            h.tbody({}, [
                h.tr({}, [
                    h.td({}, ['B1']),
                    h.td({}, ['B2']),
                    h.td({}, ['B3'])
                ])
            ]),
            h.tfoot({}, [
                h.tr({}, [
                    h.td({}, ['F1']),
                    h.td({}, ['F2']),
                    h.td({}, ['F3'])
                ])
            ])
        ])

        const completeTableFromStr = createElement(
            '<table>' +
                '<caption>A table caption.</caption>' +
                '<colgroup>' +
                    '<col span="2" style="background-color: red;">' +
                    '<col style="background-color: yellow;">' +
                '</colgroup>' +
                '<thead>' +
                    '<tr>' +
                        '<th>H1</th>' +
                        '<th>H2</th>' +
                        '<th>H3</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr>' +
                        '<td>B1</td>' +
                        '<td>B2</td>' +
                        '<td>B3</td>' +
                    '</tr>' +
                '</tbody>' +
                '<tfoot>' +
                    '<tr>' +
                        '<td>F1</td>' +
                        '<td>F2</td>' +
                        '<td>F3</td>' +
                    '</tr>' +
                '</tfoot>' +
            '</table>'
        )

        elementsAreEqual(completeTableFromJs, completeTableFromStr)
    })

    test('<select> element', () => {
        const selectElem = h.select({name: 'select'}, [
            h.optgroup({label: 'Group 1'}, [
                h.option({value: 'value1'}, ['Value 1']),
                h.option({value: 'value2', selected: true}, ['Value 2']),
            ]),
            h.optgroup({label: 'Group 2'}, [
                h.option({value: 'value3'}, ['Value 3'])
            ])
        ])

        document.body.appendChild(selectElem)
        assert.strictEqual((document.querySelectorAll('optgroup') as NodeListOf<h.Option>).length, 2,
            'there are 2 <optgroup> elements on the page')
        assert.strictEqual((document.querySelectorAll('option') as NodeListOf<h.Option>).length, 3,
            'there are 3 <option> elements on the page')
        assert.strictEqual((document.querySelector('select[name=select]') as h.Select).value, 'value2')
    })

    test('<iframe> element', () => {
        const iframeElem = h.iframe({title: 'iframe example', width: '400', height: '300'}, [
            h.p({}, ['Your browser does not support iframes.'])
        ])

        document.body.appendChild(iframeElem)
        const iframeElemFromDom = document.querySelector('iframe') as h.Iframe

        assert.strictEqual(iframeElemFromDom.children.length, 1, 'iframe has one child')
        assert.strictEqual(iframeElemFromDom.children[0].tagName, 'P', 'iframe has a paragraph child')
        assert.strictEqual(iframeElemFromDom.children[0].textContent, 'Your browser does not support iframes.')
    })

    test('<noscript> element', () => {
        const noscriptElem = h.noscript({}, [
            h.a({href: 'https://www.mozilla.com/'}, ['La Morcilla Feroz.'])
        ])

        document.body.appendChild(noscriptElem)
        const noscriptElemFromDom = document.querySelector('noscript') as h.Noscript

        assert.strictEqual(noscriptElemFromDom.children.length, 1, 'noscript has one child')
        assert.strictEqual(noscriptElemFromDom.children[0].tagName, 'A', 'noscript has a anchor child')
        assert.strictEqual(noscriptElemFromDom.children[0].textContent, 'La Morcilla Feroz.')
    })

    test('<template> element', () => {
        const templateElem = h.template({id: 'product-row'}, [
            h.tr({}, [
                h.td({className: 'record'}),
                h.td()
            ])
        ])

        document.body.appendChild(templateElem)
        const templateElemFromDom = document.getElementById('product-row') as h.Template

        assert.strictEqual(templateElemFromDom.children.length, 1, 'template has one, direct child')
        assert.strictEqual(templateElemFromDom.children[0].tagName, 'TR', 'template has a table row child')
        assert.strictEqual(templateElemFromDom.children[0].children.length, 2, 'template child has two children')
        assert.strictEqual(templateElemFromDom.children[0].children[0].tagName, 'TD', 'template child has table division children')
        assert.strictEqual(templateElemFromDom.children[0].children[0].className, 'record', 'template child has table division children with "record" class')
    })

    test('<script>, <style> and <textarea> elements, which only accept text as children', () => {
        const scriptFromFn = h.script({}, ['// Some JavaScript code...'])
        const scriptFromStr = createElement('<script>// Some JavaScript code...</script>')
        elementsAreEqual(scriptFromFn, scriptFromStr)

        const styleFromFn = h.style({}, ['/* Some CSS styles... */'])
        const styleFromStr = createElement('<style>/* Some CSS styles... */</style>')
        elementsAreEqual(styleFromFn, styleFromStr)

        const textareaFromFn = h.textarea({}, ['A value for the textarea.'])
        const textareaFromStr = createElement('<textarea>A value for the textarea.</textarea>')
        elementsAreEqual(textareaFromFn, textareaFromStr)
        assert.strictEqual(textareaFromFn.value, 'A value for the textarea.')
    })
})
