const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')
import {createElement} from '../testing/support/createElement'
import {elementsAreEqual} from '../testing/support/elementsAreEqual'

import {h, HTMLElementProperties} from './h'
import {a, abbr, address, area, article, aside, audio, b, base, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, data, datalist, dd, del, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, map, mark, menu, meta, meter, nav, nextid, nobr, noframes, noscript, object, ol, optgroup, option, output, p, param, picture, pre, progress, q, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, sup, table, tbody, td, template, textarea, tfoot, th, thead, time, title, tr, track, u, ul, var_, video, wbr, bdi, details, dialog, main, menuitem, rp, summary} from './h'

const allHtmlTags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'dfn', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'nextid', 'nobr', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'bdi', 'details', 'dialog', 'main', 'menuitem', 'rp', 'summary']

const allHtmlFunctions = [a, abbr, address, area, article, aside, audio, b, base, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, data, datalist, dd, del, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, map, mark, menu, meta, meter, nav, nextid, nobr, noframes, noscript, object, ol, optgroup, option, output, p, param, picture, pre, progress, q, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, sup, table, tbody, td, template, textarea, tfoot, th, thead, time, title, tr, track, u, ul, var_, video, wbr, bdi, details, dialog, main, menuitem, rp, summary]

// TODO Create tests for all the special cases.
const tagsExcludedFromCreation = ['html', 'head', 'body', 'caption', 'col', 'colgroup', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr']
const tagsNotAcceptingChildren = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'menuitem']
const tagsNotAcceptingEveryChildren = ['iframe', 'noframes', 'noscript', 'script', 'select', 'style', 'table', 'template', 'textarea', 'title']

const globalAttributesObj: HTMLElementProperties = {
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

    test('create elements without attributes nor children', () => {
        allHtmlTags
            .filter(tag => tagsExcludedFromCreation.indexOf(tag) === -1)
            .forEach(tag => {
                const elemFromJs = h(tag)
                const elemFromHtml = createElement(`<${tag}></${tag}>`)

                elementsAreEqual(elemFromJs, elemFromHtml)
            })
    })

    test('create elements with global attributes, with no children', () => {
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
                const elemFromHtml = createElement(`<${tag} ${globalAttributesStr}></${tag}>`)

                elementsAreEqual(elemFromJs, elemFromHtml)
            })
    })

    test('create elements with attributes and children', () => {
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

                const elemFromHtml = createElement(
                    `<${tag}>` +
                        '<span title="A">A</span>' +
                        '<span class="b">B</span>' +
                        '<span id="c">C</span>' +
                    `</${tag}>`)

                    elementsAreEqual(elemFromJs, elemFromHtml)
            })
    })

    test('create table with all table-specific elements', () => {
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

        const completeTableFromHtml = createElement(
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

        elementsAreEqual(completeTableFromJs, completeTableFromHtml)
    })

    test('use specialized functions to create each HTML element', () => {
        allHtmlFunctions.forEach((fn: Function, idx) => {
            const elemFromSpecializedFn = fn(globalAttributesObj)
            const elemFromGenericFn = h(allHtmlTags[idx], globalAttributesObj)

            elementsAreEqual(elemFromSpecializedFn, elemFromGenericFn)
        })
    })
})