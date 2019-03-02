import 'intern'
import {createElement} from '../../../shared/testing/createElement'
import {elementsAreEqual} from '../../../shared/testing/elementsAreEqual'
import {h} from './h'

const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')

// Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#List_of_global_attributes.

const globalProps = {
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
    dataset: {x: 'y'},
    style: {color: 'black'}
}

const globalAttrs = `
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
    data-x="y"
    style="color: black;"
`

suite('h()', () => {

    test('elements without special requirements', () => {
        const _a: h.A = h.a(globalProps, [])
        elementsAreEqual(_a, createElement(`<a ${globalAttrs}></a>`))

        const _abbr: h.Abbr = h.abbr(globalProps, [])
        elementsAreEqual(_abbr, createElement(`<abbr ${globalAttrs}></abbr>`))

        const _address: h.Address = h.address(globalProps, [])
        elementsAreEqual(_address, createElement(`<address ${globalAttrs}></address>`))

        const _area: h.Area = h.area(globalProps)
        elementsAreEqual(_area, createElement(`<area ${globalAttrs}>`))

        const _article: h.Article = h.article(globalProps, [])
        elementsAreEqual(_article, createElement(`<article ${globalAttrs}></article>`))

        const _aside: h.Aside = h.aside(globalProps, [])
        elementsAreEqual(_aside, createElement(`<aside ${globalAttrs}></aside>`))

        const _audio: h.Audio = h.audio(globalProps, [])
        elementsAreEqual(_audio, createElement(`<audio ${globalAttrs}></audio>`))

        const _b: h.B = h.b(globalProps, [])
        elementsAreEqual(_b, createElement(`<b ${globalAttrs}></b>`))

        const _base: h.Base = h.base(globalProps)
        elementsAreEqual(_base, createElement(`<base ${globalAttrs}>`))

        const _bdi: h.Bdi = h.bdi(globalProps, [])
        elementsAreEqual(_bdi, createElement(`<bdi ${globalAttrs}></bdi>`))

        const _bdo: h.Bdo = h.bdo(globalProps, [])
        elementsAreEqual(_bdo, createElement(`<bdo ${globalAttrs}></bdo>`))

        const _blockquote: h.Blockquote = h.blockquote(globalProps, [])
        elementsAreEqual(_blockquote, createElement(`<blockquote ${globalAttrs}></blockquote>`))

        const _br: h.Br = h.br(globalProps)
        elementsAreEqual(_br, createElement(`<br ${globalAttrs}>`))

        const _button: h.Button = h.button(globalProps, [])
        elementsAreEqual(_button, createElement(`<button ${globalAttrs}></button>`))

        const _canvas: h.Canvas = h.canvas(globalProps, [])
        elementsAreEqual(_canvas, createElement(`<canvas ${globalAttrs}></canvas>`))

        const _cite: h.Cite = h.cite(globalProps, [])
        elementsAreEqual(_cite, createElement(`<cite ${globalAttrs}></cite>`))

        const _code: h.Code = h.code(globalProps, [])
        elementsAreEqual(_code, createElement(`<code ${globalAttrs}></code>`))

        const _data: h.Data = h.data(globalProps, [])
        elementsAreEqual(_data, createElement(`<data ${globalAttrs}></data>`))

        const _datalist: h.Datalist = h.datalist(globalProps, [])
        elementsAreEqual(_datalist, createElement(`<datalist ${globalAttrs}></datalist>`))

        const _dd: h.Dd = h.dd(globalProps, [])
        elementsAreEqual(_dd, createElement(`<dd ${globalAttrs}></dd>`))

        const _del: h.Del = h.del(globalProps, [])
        elementsAreEqual(_del, createElement(`<del ${globalAttrs}></del>`))

        const _details: h.Details = h.details(globalProps, [])
        elementsAreEqual(_details, createElement(`<details ${globalAttrs}></details>`))

        const _dfn: h.Dfn = h.dfn(globalProps, [])
        elementsAreEqual(_dfn, createElement(`<dfn ${globalAttrs}></dfn>`))

        const _dialog: h.Dialog = h.dialog(globalProps, [])
        elementsAreEqual(_dialog, createElement(`<dialog ${globalAttrs}></dialog>`))

        const _div: h.Div = h.div(globalProps, [])
        elementsAreEqual(_div, createElement(`<div ${globalAttrs}></div>`))

        const _dl: h.Dl = h.dl(globalProps, [])
        elementsAreEqual(_dl, createElement(`<dl ${globalAttrs}></dl>`))

        const _dt: h.Dt = h.dt(globalProps, [])
        elementsAreEqual(_dt, createElement(`<dt ${globalAttrs}></dt>`))

        const _em: h.Em = h.em(globalProps, [])
        elementsAreEqual(_em, createElement(`<em ${globalAttrs}></em>`))

        const _embed: h.Embed = h.embed(globalProps)
        elementsAreEqual(_embed, createElement(`<embed ${globalAttrs}>`))

        const _fieldset: h.Fieldset = h.fieldset(globalProps, [])
        elementsAreEqual(_fieldset, createElement(`<fieldset ${globalAttrs}></fieldset>`))

        const _figcaption: h.Figcaption = h.figcaption(globalProps, [])
        elementsAreEqual(_figcaption, createElement(`<figcaption ${globalAttrs}></figcaption>`))

        const _figure: h.Figure = h.figure(globalProps, [])
        elementsAreEqual(_figure, createElement(`<figure ${globalAttrs}></figure>`))

        const _footer: h.Footer = h.footer(globalProps, [])
        elementsAreEqual(_footer, createElement(`<footer ${globalAttrs}></footer>`))

        const _form: h.Form = h.form(globalProps, [])
        elementsAreEqual(_form, createElement(`<form ${globalAttrs}></form>`))

        const _h1: h.H1 = h.h1(globalProps, [])
        elementsAreEqual(_h1, createElement(`<h1 ${globalAttrs}></h1>`))

        const _h2: h.H2 = h.h2(globalProps, [])
        elementsAreEqual(_h2, createElement(`<h2 ${globalAttrs}></h2>`))

        const _h3: h.H3 = h.h3(globalProps, [])
        elementsAreEqual(_h3, createElement(`<h3 ${globalAttrs}></h3>`))

        const _h4: h.H4 = h.h4(globalProps, [])
        elementsAreEqual(_h4, createElement(`<h4 ${globalAttrs}></h4>`))

        const _h5: h.H5 = h.h5(globalProps, [])
        elementsAreEqual(_h5, createElement(`<h5 ${globalAttrs}></h5>`))

        const _h6: h.H6 = h.h6(globalProps, [])
        elementsAreEqual(_h6, createElement(`<h6 ${globalAttrs}></h6>`))

        const _header: h.Header = h.header(globalProps, [])
        elementsAreEqual(_header, createElement(`<header ${globalAttrs}></header>`))

        const _hr: h.Hr = h.hr(globalProps)
        elementsAreEqual(_hr, createElement(`<hr ${globalAttrs}>`))

        const _i: h.I = h.i(globalProps, [])
        elementsAreEqual(_i, createElement(`<i ${globalAttrs}></i>`))

        const _iframe: h.Iframe = h.iframe(globalProps, [])
        elementsAreEqual(_iframe, createElement(`<iframe ${globalAttrs}></iframe>`))

        const _img: h.Img = h.img(globalProps)
        elementsAreEqual(_img, createElement(`<img ${globalAttrs}>`))

        const _input: h.Input = h.input(globalProps)
        elementsAreEqual(_input, createElement(`<input ${globalAttrs}>`))

        const _ins: h.Ins = h.ins(globalProps, [])
        elementsAreEqual(_ins, createElement(`<ins ${globalAttrs}></ins>`))

        const _kbd: h.Kbd = h.kbd(globalProps, [])
        elementsAreEqual(_kbd, createElement(`<kbd ${globalAttrs}></kbd>`))

        const _label: h.Label = h.label(globalProps, [])
        elementsAreEqual(_label, createElement(`<label ${globalAttrs}></label>`))

        const _legend: h.Legend = h.legend(globalProps, [])
        elementsAreEqual(_legend, createElement(`<legend ${globalAttrs}></legend>`))

        const _li: h.Li = h.li(globalProps, [])
        elementsAreEqual(_li, createElement(`<li ${globalAttrs}></li>`))

        const _link: h.Link = h.link(globalProps)
        elementsAreEqual(_link, createElement(`<link ${globalAttrs}>`))

        const _main: h.Main = h.main(globalProps, [])
        elementsAreEqual(_main, createElement(`<main ${globalAttrs}></main>`))

        const _map: h.Map = h.map(globalProps, [])
        elementsAreEqual(_map, createElement(`<map ${globalAttrs}></map>`))

        const _mark: h.Mark = h.mark(globalProps, [])
        elementsAreEqual(_mark, createElement(`<mark ${globalAttrs}></mark>`))

        const _meta: h.Meta = h.meta(globalProps)
        elementsAreEqual(_meta, createElement(`<meta ${globalAttrs}>`))

        const _meter: h.Meter = h.meter(globalProps, [])
        elementsAreEqual(_meter, createElement(`<meter ${globalAttrs}></meter>`))

        const _nav: h.Nav = h.nav(globalProps, [])
        elementsAreEqual(_nav, createElement(`<nav ${globalAttrs}></nav>`))

        const _noscript: h.Noscript = h.noscript(globalProps, [])
        elementsAreEqual(_noscript, createElement(`<noscript ${globalAttrs}></noscript>`))

        const _object: h.Object = h.object(globalProps, [])
        elementsAreEqual(_object, createElement(`<object ${globalAttrs}></object>`))

        const _ol: h.Ol = h.ol(globalProps, [])
        elementsAreEqual(_ol, createElement(`<ol ${globalAttrs}></ol>`))

        const _optgroup: h.Optgroup = h.optgroup(globalProps, [])
        elementsAreEqual(_optgroup, createElement(`<optgroup ${globalAttrs}></optgroup>`))

        const _option: h.Option = h.option(globalProps, [])
        elementsAreEqual(_option, createElement(`<option ${globalAttrs}></option>`))

        const _output: h.Output = h.output(globalProps, [])
        elementsAreEqual(_output, createElement(`<output ${globalAttrs}></output>`))

        const _p: h.P = h.p(globalProps, [])
        elementsAreEqual(_p, createElement(`<p ${globalAttrs}></p>`))

        const _param: h.Param = h.param(globalProps)
        elementsAreEqual(_param, createElement(`<param ${globalAttrs}>`))

        const _picture: h.Picture = h.picture(globalProps, [])
        elementsAreEqual(_picture, createElement(`<picture ${globalAttrs}></picture>`))

        const _pre: h.Pre = h.pre(globalProps, [])
        elementsAreEqual(_pre, createElement(`<pre ${globalAttrs}></pre>`))

        const _progress: h.Progress = h.progress(globalProps, [])
        elementsAreEqual(_progress, createElement(`<progress ${globalAttrs}></progress>`))

        const _q: h.Q = h.q(globalProps, [])
        elementsAreEqual(_q, createElement(`<q ${globalAttrs}></q>`))

        const _rb: h.Rb = h.rb(globalProps, [])
        elementsAreEqual(_rb, createElement(`<rb ${globalAttrs}></rb>`))

        const _rp: h.Rp = h.rp(globalProps, [])
        elementsAreEqual(_rp, createElement(`<rp ${globalAttrs}></rp>`))

        const _rt: h.Rt = h.rt(globalProps, [])
        elementsAreEqual(_rt, createElement(`<rt ${globalAttrs}></rt>`))

        const _rtc: h.Rtc = h.rtc(globalProps, [])
        elementsAreEqual(_rtc, createElement(`<rtc ${globalAttrs}></rtc>`))

        const _ruby: h.Ruby = h.ruby(globalProps, [])
        elementsAreEqual(_ruby, createElement(`<ruby ${globalAttrs}></ruby>`))

        const _s: h.S = h.s(globalProps, [])
        elementsAreEqual(_s, createElement(`<s ${globalAttrs}></s>`))

        const _samp: h.Samp = h.samp(globalProps, [])
        elementsAreEqual(_samp, createElement(`<samp ${globalAttrs}></samp>`))

        const _script: h.Script = h.script(globalProps, [])
        elementsAreEqual(_script, createElement(`<script ${globalAttrs}></script>`))

        const _section: h.Section = h.section(globalProps, [])
        elementsAreEqual(_section, createElement(`<section ${globalAttrs}></section>`))

        const _select: h.Select = h.select(globalProps, [])
        elementsAreEqual(_select, createElement(`<select ${globalAttrs}></select>`))

        const _small: h.Small = h.small(globalProps, [])
        elementsAreEqual(_small, createElement(`<small ${globalAttrs}></small>`))

        const _source: h.Source = h.source(globalProps)
        elementsAreEqual(_source, createElement(`<source ${globalAttrs}>`))

        const _span: h.Span = h.span(globalProps, [])
        elementsAreEqual(_span, createElement(`<span ${globalAttrs}></span>`))

        const _strong: h.Strong = h.strong(globalProps, [])
        elementsAreEqual(_strong, createElement(`<strong ${globalAttrs}></strong>`))

        const _style: h.Style = h.style(globalProps, [])
        elementsAreEqual(_style, createElement(`<style ${globalAttrs}></style>`))

        const _sub: h.Sub = h.sub(globalProps, [])
        elementsAreEqual(_sub, createElement(`<sub ${globalAttrs}></sub>`))

        const _summary: h.Summary = h.summary(globalProps, [])
        elementsAreEqual(_summary, createElement(`<summary ${globalAttrs}></summary>`))

        const _sup: h.Sup = h.sup(globalProps, [])
        elementsAreEqual(_sup, createElement(`<sup ${globalAttrs}></sup>`))

        const _table: h.Table = h.table(globalProps, [])
        elementsAreEqual(_table, createElement(`<table ${globalAttrs}></table>`))

        const _template: h.Template = h.template(globalProps, [])
        elementsAreEqual(_template, createElement(`<template ${globalAttrs}></template>`))

        const _textarea: h.Textarea = h.textarea(globalProps, [])
        elementsAreEqual(_textarea, createElement(`<textarea ${globalAttrs}></textarea>`))

        const _time: h.Time = h.time(globalProps, [])
        elementsAreEqual(_time, createElement(`<time ${globalAttrs}></time>`))

        const _title: h.Title = h.title(globalProps, [])
        elementsAreEqual(_title, createElement(`<title ${globalAttrs}></title>`))

        const _track: h.Track = h.track(globalProps)
        elementsAreEqual(_track, createElement(`<track ${globalAttrs}>`))

        const _u: h.U = h.u(globalProps, [])
        elementsAreEqual(_u, createElement(`<u ${globalAttrs}></u>`))

        const _ul: h.Ul = h.ul(globalProps, [])
        elementsAreEqual(_ul, createElement(`<ul ${globalAttrs}></ul>`))

        const _var: h.Var = h.var(globalProps, [])
        elementsAreEqual(_var, createElement(`<var ${globalAttrs}></var>`))

        const _video: h.Video = h.video(globalProps, [])
        elementsAreEqual(_video, createElement(`<video ${globalAttrs}></video>`))

        const _wbr: h.Wbr = h.wbr(globalProps)
        elementsAreEqual(_wbr, createElement(`<wbr ${globalAttrs}>`))
    })

    test('event listeners', () => {
        const $count = h.span({id: 'count'}, ['0'])
        const $counter = h.div(globalProps, [
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

    test('attributes with some effect on page load', () => {
        assert.strictEqual(document.readyState, 'complete', 'the page has finished loading before running the test')

        document.body.appendChild(h.div(globalProps, [
            h.input({id: 'textbox', type: 'text', value: 'Abc'}),
            h.input({id: 'checkbox', type: 'checkbox', checked: true}),
            h.audio({id: 'audio-player', muted: true}),
            h.details({id: 'details', open: true}, [
                h.summary(globalProps, ['Some details']),
                h.p(globalProps, ['More info about the details.'])
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

    // Elements only allowed in certain contexts.

    test('<html>', () => {
        const elem = h.html({lang: 'en'}, [
            h.head(globalProps, [
                h.title(globalProps, ['Test title.'])
            ]),
            h.body(globalProps, [
                h.h1(globalProps, ['Fancy test.'])
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

    test('<table>', () => {
        const tableFromJS = h.table({}, [
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

        const tableFromStr = createElement(
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

        elementsAreEqual(tableFromJS, tableFromStr)
    })

    test('<select>', () => {
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

    test('<iframe>', () => {
        const iframeElem = h.iframe({title: 'iframe example', width: '400', height: '300'}, [
            h.p(globalProps, ['Your browser does not support iframes.'])
        ])

        document.body.appendChild(iframeElem)
        const iframeElemFromDom = document.querySelector('iframe') as h.Iframe

        assert.strictEqual(iframeElemFromDom.children.length, 1, 'iframe has one child')
        assert.strictEqual(iframeElemFromDom.children[0].tagName, 'P', 'iframe has a paragraph child')
        assert.strictEqual(iframeElemFromDom.children[0].textContent, 'Your browser does not support iframes.')
    })

    test('<noscript>', () => {
        const noscriptElem = h.noscript(globalProps, [
            h.a({href: 'https://www.mozilla.com/'}, ['La Morcilla Feroz.'])
        ])

        document.body.appendChild(noscriptElem)
        const noscriptElemFromDom = document.querySelector('noscript') as h.Noscript

        assert.strictEqual(noscriptElemFromDom.children.length, 1, 'noscript has one child')
        assert.strictEqual(noscriptElemFromDom.children[0].tagName, 'A', 'noscript has a anchor child')
        assert.strictEqual(noscriptElemFromDom.children[0].textContent, 'La Morcilla Feroz.')
    })

    test('<template>', () => {
        const templateElem = h.template({id: 'product-row'}, [
            h.tr(globalProps, [
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

    test('<script>, <style> and <textarea>', () => {
        const scriptFromFn = h.script({}, ['// Some JavaScript code...'])
        const scriptFromStr = createElement('<script>// Some JavaScript code...</script>')
        elementsAreEqual(scriptFromFn, scriptFromStr)

        const styleFromFn = h.style({}, ['/* Some CSS styles... * /'])
        const styleFromStr = createElement('<style>/* Some CSS styles... * /</style>')
        elementsAreEqual(styleFromFn, styleFromStr)

        const textareaFromFn = h.textarea({}, ['A value for the textarea.'])
        const textareaFromStr = createElement('<textarea>A value for the textarea.</textarea>')
        elementsAreEqual(textareaFromFn, textareaFromStr)
        assert.strictEqual(textareaFromFn.value, 'A value for the textarea.')
    })
})
