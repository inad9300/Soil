const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')
import {createElement} from '../testing/support/createElement'
import {elementsAreEqual} from '../testing/support/elementsAreEqual'

import {h, HTMLProperties} from './h'
import {Audio, Button, Details, H1, Iframe, Input, Noscript, Option, Template, Select, Span} from './h'
import {a, abbr, address, area, article, aside, audio, b, base, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, data, datalist, dd, del, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, map, mark, menu, meta, meter, nav, nextid, nobr, noscript, object, ol, optgroup, option, output, p, param, picture, pre, progress, q, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, sup, table, tbody, td, template, textarea, tfoot, th, thead, time, title, tr, track, u, ul, var_, video, wbr, bdi, details, dialog, main, menuitem, rp, summary} from './h'

const allHtmlFunctions = [a, abbr, address, area, article, aside, audio, b, base, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, data, datalist, dd, del, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, map, mark, menu, meta, meter, nav, nextid, nobr, noscript, object, ol, optgroup, option, output, p, param, picture, pre, progress, q, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, sup, table, tbody, td, template, textarea, tfoot, th, thead, time, title, tr, track, u, ul, var_, video, wbr, bdi, details, dialog, main, menuitem, rp, summary]

const allHtmlTags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'dfn', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'nextid', 'nobr', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'bdi', 'details', 'dialog', 'main', 'menuitem', 'rp', 'summary']

const tagsExcludedFromCreation = ['html', 'head', 'body', 'caption', 'col', 'colgroup', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr']
const tagsNotAcceptingChildren = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'menuitem']

// Tags with special requirements for their children, or not playing well together with the function used to create
// elements from HTML strings (which is the case for `<template>`).
const tagsNotAcceptingEveryChildren = ['iframe', 'noframes', 'noscript', 'script', 'select', 'style', 'table', 'template', 'textarea', 'title']

const globalAttributesObj: HTMLProperties = {
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
                const elemFromJs = h(tag)
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
                const elemFromJs = h(tag, globalAttributesObj)
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
                const elemFromJs = h(tag, {}, [
                    h('span', {title: 'A'}, 'A'),
                    h('span', {className: 'b'}, 'B'),
                    h('span', {id: 'c'}, 'C')
                ])

                const elemFromStr = createElement(
                    `<${tag}>` +
                        '<span title="A">A</span>' +
                        '<span class="b">B</span>' +
                        '<span id="c">C</span>' +
                    `</${tag}>`
                )

                elementsAreEqual(elemFromJs, elemFromStr)
            })
    })

    test('elements with event listeners', () => {
        const $count = span({id: 'count'}, '0')
        const $counter = div({}, [
            button({
                id: 'increment-btn',
                onclick: () => $count.textContent = '' + (parseInt($count.textContent as string) + 1)
            }),
            $count,
            button({
                id: 'decrement-btn',
                onclick: () => $count.textContent = '' + (parseInt($count.textContent as string) - 1)
            })
        ])

        document.body.appendChild($counter)

        const countFromDom = document.getElementById('count') as Span
        const incrementBtn = document.getElementById('increment-btn') as Button
        const decrementBtn = document.getElementById('decrement-btn') as Button

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

    test('elements with attributes having some effect on page load', t => {
        assert.strictEqual(document.readyState, 'complete', 'the page has finished loading before running the test')

        document.body.appendChild(div({}, [
            input({id: 'textbox', type: 'text', value: 'Abc'}),
            input({id: 'checkbox', type: 'checkbox', checked: true}),
            audio({id: 'audio-player', muted: true}),
            details({id: 'details', open: true}, [
                summary({}, 'Some details'),
                p({}, 'More info about the details.')
            ]),
            select({id: 'dropdown'}, [
                option({value: 'a'}, 'Opt. A'),
                option({value: 'b', selected: true}, 'Opt. B')
            ])
        ]))

        assert.strictEqual((document.querySelector('#textbox') as Input).value, 'Abc')
        assert.strictEqual((document.querySelector('#checkbox') as Input).checked, true)
        assert.strictEqual((document.querySelector('#audio-player') as Audio).muted, true)
        assert.strictEqual((document.querySelector('#details') as Details).open, true)
        assert.strictEqual((document.querySelector('#dropdown option[value=b]') as Option).selected, true)
    })

    test('specialized functions to create each HTML element', () => {
        allHtmlFunctions.forEach((fn: Function, idx) => {
            const elemFromSpecializedFn: HTMLElement = fn(globalAttributesObj)
            const elemFromGenericFn = h(allHtmlTags[idx], globalAttributesObj)

            elementsAreEqual(elemFromSpecializedFn, elemFromGenericFn)
        })
    })

    // Elements accepting only certain kinds of children.

    test('<html>, <head>, <title> and <body> tags', () => {
        const elem = html({lang: 'en'}, [
            head({}, [
                title({}, 'Test title.')
            ]),
            body({}, [
                h1({}, 'Fancy test.')
            ])
        ])

        document.open()
        document.write('')
        document.appendChild(elem)
        document.close()

        assert.strictEqual(document.querySelectorAll('*').length, 5, 'there are 4 HTML elements on the page')
        assert.strictEqual(document.title, 'Test title.')
        assert.strictEqual((document.querySelector('h1') as H1).textContent, 'Fancy test.')
    })

    test('table with all table-specific elements', () => {
        const completeTableFromJs = h('table', {}, [
            h('caption', {}, 'A table caption.'),
            h('colgroup', {}, [
                h('col', {span: 2, style: {backgroundColor: 'red'}}),
                h('col', {style: {backgroundColor: 'yellow'}}),
            ]),
            h('thead', {}, [
                h('tr', {}, [
                    h('th', {}, 'H1'),
                    h('th', {}, 'H2'),
                    h('th', {}, 'H3')
                ])
            ]),
            h('tbody', {}, [
                h('tr', {}, [
                    h('td', {}, 'B1'),
                    h('td', {}, 'B2'),
                    h('td', {}, 'B3')
                ])
            ]),
            h('tfoot', {}, [
                h('tr', {}, [
                    h('td', {}, 'F1'),
                    h('td', {}, 'F2'),
                    h('td', {}, 'F3')
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
        const selectElem = select({name: 'select'}, [
            optgroup({label: 'Group 1'}, [
                option({value: 'value1'}, 'Value 1'),
                option({value: 'value2', selected: true}, 'Value 2'),
            ]),
            optgroup({label: 'Group 2'}, [
                option({value: 'value3'}, 'Value 3')
            ])
        ])

        document.body.appendChild(selectElem)
        assert.strictEqual((document.querySelectorAll('optgroup') as NodeListOf<Option>).length, 2,
            'there are 2 <optgroup> elements on the page')
        assert.strictEqual((document.querySelectorAll('option') as NodeListOf<Option>).length, 3,
            'there are 3 <option> elements on the page')
        assert.strictEqual((document.querySelector('select[name=select]') as Select).value, 'value2')
    })

    test('<iframe> element', () => {
        const iframeElem = iframe({title: 'iframe example', width: '400', height: '300'}, [
            p({}, 'Your browser does not support iframes.')
        ])

        document.body.appendChild(iframeElem)
        const iframeElemFromDom = document.querySelector('iframe') as Iframe

        assert.strictEqual(iframeElemFromDom.children.length, 1, 'iframe has one child')
        assert.strictEqual(iframeElemFromDom.children[0].tagName, 'P', 'iframe has a paragraph child')
        assert.strictEqual(iframeElemFromDom.children[0].textContent, 'Your browser does not support iframes.')
    })

    test('<noscript> element', () => {
        const noscriptElem = noscript({}, [
            a({href: 'https://www.mozilla.com/'}, 'La Morcilla Feroz.')
        ])

        document.body.appendChild(noscriptElem)
        const noscriptElemFromDom = document.querySelector('noscript') as Noscript

        assert.strictEqual(noscriptElemFromDom.children.length, 1, 'noscript has one child')
        assert.strictEqual(noscriptElemFromDom.children[0].tagName, 'A', 'noscript has a anchor child')
        assert.strictEqual(noscriptElemFromDom.children[0].textContent, 'La Morcilla Feroz.')
    })

    test('<template> element', () => {
        const templateElem = template({id: 'product-row'}, [
            tr({}, [
                td({className: 'record'}),
                td()
            ])
        ])

        document.body.appendChild(templateElem)
        const templateElemFromDom = document.getElementById('product-row') as Template

        assert.strictEqual(templateElemFromDom.children.length, 1, 'template has one, direct child')
        assert.strictEqual(templateElemFromDom.children[0].tagName, 'TR', 'template has a table row child')
        assert.strictEqual(templateElemFromDom.children[0].children.length, 2, 'template child has two children')
        assert.strictEqual(templateElemFromDom.children[0].children[0].tagName, 'TD', 'template child has table division children')
        assert.strictEqual(templateElemFromDom.children[0].children[0].className, 'record', 'template child has table division children with "record" class')
    })

    test('<script>, <style> and <textarea> elements, which only accept text as children', () => {
        const scriptFromFn = script({}, '// Some JavaScript code...')
        const scriptFromStr = createElement('<script>// Some JavaScript code...</script>')
        elementsAreEqual(scriptFromFn, scriptFromStr)

        const styleFromFn = style({}, '/* Some CSS styles... */')
        const styleFromStr = createElement('<style>/* Some CSS styles... */</style>')
        elementsAreEqual(styleFromFn, styleFromStr)

        const textareaFromFn = textarea({}, 'A value for the textarea.')
        const textareaFromStr = createElement('<textarea>A value for the textarea.</textarea>')
        elementsAreEqual(textareaFromFn, textareaFromStr)
        assert.strictEqual(textareaFromFn.value, 'A value for the textarea.')
    })
})