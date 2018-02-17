/**
 * Set of helper functions to facilitate the work with HTML elements, specially their creation.
 *
 * NOTE The following functions silently depend on the `document` variable being globally available. Therefore, unit
 * tests of components that use them must be run inside a browser, or must expose `document` globally, e.g. through
 * PhantomJS or jsdom.
 *
 * The HTML elements considered below are based on the TypeScript (2.6.2) interface `ElementTagNameMap` and its
 * ascendants, on the list of void, raw text and other special elements present in [The HTML syntax](https://www.w3.org/TR/html51/syntax.html#writing-html-documents-elements)
 * by the W3C, and on MDN's list of [Obsolete and deprecated elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Obsolete_and_deprecated_elements).
 * Non-standard elements, such as `<x-ms-webview>`, are also excluded.
 */

import {assignProperties} from './assignProperties'
import {DeepPartial} from '../extra/DeepPartial'
import {Svg} from './s'

/**
 * Types added manually as they are not yet present in TypeScript (2.6.2) but they are listed in W3Schools' list of
 * [HTML5 New Elements](https://www.w3schools.com/html/html5_new_elements.asp).
 *
 * TODO Follow up [TypeScript issue #17828](https://github.com/Microsoft/TypeScript/issues/17828).
 */
export type HTMLDetailsElement = HTMLElement & {open: boolean}
export type HTMLDialogElement = HTMLElement & {open: boolean}

/**
 * List of all HTML tag names.
 */
export type HTMLTag
    = 'a'
    | 'abbr'
    | 'address'
    | 'area'
    | 'article'
    | 'aside'
    | 'audio'
    | 'b'
    | 'base'
    | 'bdi'
    | 'bdo'
    | 'blockquote'
    | 'body'
    | 'br'
    | 'button'
    | 'canvas'
    | 'caption'
    | 'cite'
    | 'code'
    | 'col'
    | 'colgroup'
    | 'data'
    | 'datalist'
    | 'dd'
    | 'del'
    | 'details'
    | 'dfn'
    | 'dialog'
    | 'div'
    | 'dl'
    | 'dt'
    | 'em'
    | 'embed'
    | 'fieldset'
    | 'figcaption'
    | 'figure'
    | 'footer'
    | 'form'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'head'
    | 'header'
    | 'hr'
    | 'html'
    | 'i'
    | 'iframe'
    | 'img'
    | 'input'
    | 'ins'
    | 'kbd'
    | 'label'
    | 'legend'
    | 'li'
    | 'link'
    | 'main'
    | 'map'
    | 'mark'
    | 'meta'
    | 'meter'
    | 'nav'
    | 'noscript'
    | 'object'
    | 'ol'
    | 'optgroup'
    | 'option'
    | 'output'
    | 'p'
    | 'param'
    | 'picture'
    | 'pre'
    | 'progress'
    | 'q'
    | 'rp'
    | 'rt'
    | 'ruby'
    | 's'
    | 'samp'
    | 'script'
    | 'section'
    | 'select'
    | 'small'
    | 'source'
    | 'span'
    | 'strong'
    | 'style'
    | 'sub'
    | 'summary'
    | 'sup'
    | 'table'
    | 'tbody'
    | 'td'
    | 'template'
    | 'textarea'
    | 'tfoot'
    | 'th'
    | 'thead'
    | 'time'
    | 'title'
    | 'tr'
    | 'track'
    | 'u'
    | 'ul'
    | 'var'
    | 'video'
    | 'wbr'

/**
 * Aliases for HTML element types, whose native counterparts are not always easy to guess or find.
 *
 * Notice that some elements do not have a specific interface to define them, and they resort to a more generic one,
 * e.g. `Ul` (unordered list) is well-defined by `HTMLUListElement`, but `B` (bold) simply delegates to `HTMLElement`.
 */
export type A = HTMLAnchorElement
export type Abbr = HTMLElement
export type Address = HTMLElement
export type Area = HTMLAreaElement
export type Article = HTMLElement
export type Aside = HTMLElement
export type Audio = HTMLAudioElement
export type B = HTMLElement
export type Base = HTMLBaseElement
export type Bdi = HTMLElement
export type Bdo = HTMLElement
export type Blockquote = HTMLQuoteElement
export type Body = HTMLBodyElement
export type Br = HTMLBRElement
export type Button = HTMLButtonElement
export type Canvas = HTMLCanvasElement
export type Caption = HTMLTableCaptionElement
export type Cite = HTMLElement
export type Code = HTMLElement
export type Col = HTMLTableColElement
export type Colgroup = HTMLTableColElement
export type Data = HTMLDataElement
export type Datalist = HTMLDataListElement
export type Dd = HTMLElement
export type Del = HTMLModElement
export type Details = HTMLDetailsElement
export type Dfn = HTMLElement
export type Dialog = HTMLDialogElement
export type Div = HTMLDivElement
export type Dl = HTMLDListElement
export type Dt = HTMLElement
export type Em = HTMLElement
export type Embed = HTMLEmbedElement
export type Fieldset = HTMLFieldSetElement
export type Figcaption = HTMLElement
export type Figure = HTMLElement
export type Footer = HTMLElement
export type Form = HTMLFormElement
export type H1 = HTMLHeadingElement
export type H2 = HTMLHeadingElement
export type H3 = HTMLHeadingElement
export type H4 = HTMLHeadingElement
export type H5 = HTMLHeadingElement
export type H6 = HTMLHeadingElement
export type Head = HTMLHeadElement
export type Header = HTMLElement
export type Hr = HTMLHRElement
export type Html = HTMLHtmlElement
export type I = HTMLElement
export type Iframe = HTMLIFrameElement
export type Img = HTMLImageElement
export type Input = HTMLInputElement
export type Ins = HTMLModElement
export type Kbd = HTMLElement
export type Label = HTMLLabelElement
export type Legend = HTMLLegendElement
export type Li = HTMLLIElement
export type Link = HTMLLinkElement
export type Main = HTMLElement
export type Map = HTMLMapElement
export type Mark = HTMLElement
export type Meta = HTMLMetaElement
export type Meter = HTMLMeterElement
export type Nav = HTMLElement
export type Noscript = HTMLElement
export type Object = HTMLObjectElement
export type Ol = HTMLOListElement
export type Optgroup = HTMLOptGroupElement
export type Option = HTMLOptionElement
export type Output = HTMLOutputElement
export type P = HTMLParagraphElement
export type Param = HTMLParamElement
export type Picture = HTMLPictureElement
export type Pre = HTMLPreElement
export type Progress = HTMLProgressElement
export type Q = HTMLQuoteElement
export type Rp = HTMLElement
export type Rt = HTMLElement
export type Ruby = HTMLElement
export type S = HTMLElement
export type Samp = HTMLElement
export type Script = HTMLScriptElement
export type Section = HTMLElement
export type Select = HTMLSelectElement
export type Small = HTMLElement
export type Source = HTMLSourceElement
export type Span = HTMLSpanElement
export type Strong = HTMLElement
export type Style = HTMLStyleElement
export type Sub = HTMLElement
export type Summary = HTMLElement
export type Sup = HTMLElement
export type Table = HTMLTableElement
export type Tbody = HTMLTableSectionElement
export type Td = HTMLTableDataCellElement
export type Template = HTMLTemplateElement
export type Textarea = HTMLTextAreaElement
export type Tfoot = HTMLTableSectionElement
export type Th = HTMLTableHeaderCellElement
export type Thead = HTMLTableSectionElement
export type Time = HTMLTimeElement
export type Title = HTMLTitleElement
export type Tr = HTMLTableRowElement
export type Track = HTMLTrackElement
export type U = HTMLElement
export type Ul = HTMLUListElement
export type Var = HTMLElement
export type Video = HTMLVideoElement
export type Wbr = HTMLElement

/**
 * Map from HTML tag names to their corresponding types.
 */
export interface HTMLTagMap {
    a: A
    abbr: Abbr
    address: Address
    area: Area
    article: Article
    aside: Aside
    audio: Audio
    b: B
    base: Base
    bdi: Bdi
    bdo: Bdo
    blockquote: Blockquote
    body: Body
    br: Br
    button: Button
    canvas: Canvas
    caption: Caption
    cite: Cite
    code: Code
    col: Col
    colgroup: Colgroup
    data: Data
    datalist: Datalist
    dd: Dd
    del: Del
    details: Details
    dfn: Dfn
    dialog: Dialog
    div: Div
    dl: Dl
    dt: Dt
    em: Em
    embed: Embed
    fieldset: Fieldset
    figcaption: Figcaption
    figure: Figure
    footer: Footer
    form: Form
    h1: H1
    h2: H2
    h3: H3
    h4: H4
    h5: H5
    h6: H6
    head: Head
    header: Header
    hr: Hr
    html: Html
    i: I
    iframe: Iframe
    img: Img
    input: Input
    ins: Ins
    kbd: Kbd
    label: Label
    legend: Legend
    li: Li
    link: Link
    main: Main
    map: Map
    mark: Mark
    meta: Meta
    meter: Meter
    nav: Nav
    noscript: Noscript
    object: Object
    ol: Ol
    optgroup: Optgroup
    option: Option
    output: Output
    p: P
    param: Param
    picture: Picture
    pre: Pre
    progress: Progress
    q: Q
    rp: Rp
    rt: Rt
    ruby: Ruby
    s: S
    samp: Samp
    script: Script
    section: Section
    select: Select
    small: Small
    source: Source
    span: Span
    strong: Strong
    style: Style
    sub: Sub
    summary: Summary
    sup: Sup
    table: Table
    tbody: Tbody
    td: Td
    template: Template
    textarea: Textarea
    tfoot: Tfoot
    th: Th
    thead: Thead
    time: Time
    title: Title
    tr: Tr
    track: Track
    u: U
    ul: Ul
    var: Var
    video: Video
    wbr: Wbr
    [customTag: string]: HTMLElement
}

/**
 * Allowed types for the children of HTML elements, if they accept them and don't have special constraints.
 */
export type HTMLChildren = string | (HTMLElement | Svg | string)[]

/**
 * HTML element content categories, extracted from https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories
 * (deprecated, experimental or poorly-supported elements are excluded).
 */
export namespace HTMLContent {

    export type Metadata = (Base | Link | Meta | Noscript | Script | Style | Title)[]

    export type FlowItems = A | Abbr | Address | Article | Aside | Audio | B | Bdo | Bdi | Blockquote | Br | Button | Canvas | Cite | Code | Data | Datalist | Del | Details | Dfn | Div | Dl | Em | Embed | Fieldset | Figure | Footer | Form | H1 | H2 | H3 | H4 | H5 | H6 | Header | Hr | I | Iframe | Img | Input | Ins | Kbd | Label | Main | Map | Mark | Meter | Nav | Noscript | Object | Ol | Output | P | Pre | Progress | Q | Ruby | S | Samp | Script | Section | Select | Small | Span | Strong | Sub | Sup | Svg | Table | Template | Textarea | Time | Ul | Var | Video | Wbr | Area | Link | Meta | string

    export type Flow = HTMLContent.FlowItems[] | string

    export type Sectioning = (Article | Aside | Nav | Section)[]

    export type HeadingItems = H1 | H2 | H3 | H4 | H5 | H6

    export type Heading = HTMLContent.HeadingItems[]

    export type PhrasingItems = Abbr | Audio | B | Bdo | Br | Button | Canvas | Cite | Code | Data | Datalist | Dfn | Em | Embed | I | Iframe | Img | Input | Kbd | Label | Mark | Meter | Noscript | Object | Output | Progress | Q | Ruby | Samp | Script | Select | Small | Span | Strong | Sub | Sup | Svg | Textarea | Time | Var | Video | Wbr | A | Area | Del | Ins | Link | Map | Meta | string

    export type Phrasing = PhrasingItems[] | string

    export type Embedded = (Audio | Canvas | Embed | Iframe | Img | Object | Svg | Video)[]

    export type Interactive = (A | Button | Details | Embed | Iframe | Label | Select | Textarea | Audio | Img | Input | Object | Video)[]

    export type Palpable = HTMLChildren

    export type FormAssociated = (Button | Fieldset | Input | Label | Meter | Object | Output | Progress | Select | Textarea)[]

    export type FormAssociatedListed = (Button | Fieldset | Input | Object | Output | Select | Textarea)[]

    export type FormAssociatedLabelable = (Button | Input | Meter | Output | Progress | Select | Textarea)[]

    export type FormAssociatedSubmittable = (Button | Input | Object | Select | Textarea)[]

    export type FormAssociatedResettable = (Input | Output | Select | Textarea)[]

    export type ScriptSupportingItems = Script | Template

    export type ScriptSupporting = HTMLContent.ScriptSupportingItems[]

    export type Transparent = HTMLChildren
}

/**
 * Allowed types for the properties of HTML elements.
 */
export type HTMLProperties<E extends HTMLElement = HTMLElement> = DeepPartial<E> & {[prop: string]: any}

/**
 * Helper function to concisely create instances of any HTML element, including custom ones.
 */
export function h<K extends keyof HTMLTagMap>(name: K, props?: HTMLProperties<HTMLTagMap[K]>, children?: HTMLChildren): HTMLTagMap[K] {
    const elem: HTMLTagMap[K] = document.createElement(name)

    if (props !== undefined) {
        assignProperties<HTMLTagMap[K], HTMLProperties<HTMLTagMap[K]>>(elem, props)
    }

    if (children !== undefined) {
        if (typeof children === 'string') {
            elem.appendChild(document.createTextNode(children))
        } else {
            children.forEach(child => elem.appendChild(
                typeof child === 'string'
                    ? document.createTextNode(child)
                    : child
            ))
        }
    }

    return elem
}

/**
 * Helpers to allow creating any concrete HTML element in a more concise manner.
 *
 * The types of these are almost always stricter than those of `h()`, e.g. `br()` does not accept children, `ul()`
 * accepts only `Li` children.
 *
 * TODO Once TypeScript's `Exclude` is available, some of the types of `children` can be even stricter.
 */
export const a = (props?: DeepPartial<A>, children?: HTMLContent.Transparent): A => h('a', props, children)
export const abbr = (props?: DeepPartial<Abbr>, children?: HTMLContent.Phrasing): Abbr => h('abbr', props, children)
export const address = (props?: DeepPartial<Address>, children?: HTMLContent.Flow): Address => h('address', props, children)
export const area = (props?: DeepPartial<Area>): Area => h('area', props)
export const article = (props?: DeepPartial<Article>, children?: HTMLContent.Flow): Article => h('article', props, children)
export const aside = (props?: DeepPartial<Aside>, children?: HTMLContent.Flow): Aside => h('aside', props, children)
export const audio = (props?: DeepPartial<Audio>, children?: HTMLContent.Transparent): Audio => h('audio', props, children)
export const b = (props?: DeepPartial<B>, children?: HTMLContent.Phrasing): B => h('b', props, children)
export const base = (props?: DeepPartial<Base>): Base => h('base', props)
export const bdi = (props?: DeepPartial<Bdi>, children?: HTMLContent.Phrasing): Bdi => h('bdi', props, children)
export const bdo = (props?: DeepPartial<Bdo>, children?: HTMLContent.Phrasing): Bdo => h('bdo', props, children)
export const blockquote = (props?: DeepPartial<Blockquote>, children?: HTMLContent.Flow): Blockquote => h('blockquote', props, children)
export const body = (props?: DeepPartial<Body>, children?: HTMLContent.Flow): Body => h('body', props, children)
export const br = (props?: DeepPartial<Br>): Br => h('br', props)
export const button = (props?: DeepPartial<Button>, children?: HTMLContent.Phrasing): Button => h('button', props, children)
export const canvas = (props?: DeepPartial<Canvas>, children?: HTMLContent.Transparent): Canvas => h('canvas', props, children)
export const caption = (props?: DeepPartial<Caption>, children?: HTMLContent.Flow): Caption => h('caption', props, children)
export const cite = (props?: DeepPartial<Cite>, children?: HTMLContent.Phrasing): Cite => h('cite', props, children)
export const code = (props?: DeepPartial<Code>, children?: HTMLContent.Phrasing): Code => h('code', props, children)
export const col = (props?: DeepPartial<Col>): Col => h('col', props)
export const colgroup = (props?: DeepPartial<Colgroup>, children?: Col[]): Colgroup => h('colgroup', props, children)
export const data = (props?: DeepPartial<Data>, children?: HTMLContent.Phrasing): Data => h('data', props, children)
export const datalist = (props?: DeepPartial<Datalist>, children?: HTMLContent.Phrasing | Option[]): Datalist => h('datalist', props, children)
export const dd = (props?: DeepPartial<Dd>, children?: HTMLContent.Flow): Dd => h('dd', props, children)
export const del = (props?: DeepPartial<Del>, children?: HTMLContent.Transparent): Del => h('del', props, children)
export const details = (props?: DeepPartial<Details>, children?: (Summary | HTMLContent.FlowItems)[] | string): Details => h('details', props, children)
export const dfn = (props?: DeepPartial<Dfn>, children?: HTMLContent.Phrasing): Dfn => h('dfn', props, children)
export const dialog = (props?: DeepPartial<Dialog>, children?: HTMLContent.Flow): Dialog => h('dialog', props, children)
export const div = (props?: DeepPartial<Div>, children?: (HTMLContent.FlowItems | Dt | Dd | Script | Template)[] | string): Div => h('div', props, children)
export const dl = (props?: DeepPartial<Dl>, children?: (Dt | Dd | Script | Template | Div)[]): Dl => h('dl', props, children)
export const dt = (props?: DeepPartial<Dt>, children?: HTMLContent.Flow): Dt => h('dt', props, children)
export const em = (props?: DeepPartial<Em>, children?: HTMLContent.Phrasing): Em => h('em', props, children)
export const embed = (props?: DeepPartial<Embed>): Embed => h('embed', props)
export const fieldset = (props?: DeepPartial<Fieldset>, children?: (Legend | HTMLContent.FlowItems)[] | string): Fieldset => h('fieldset', props, children)
export const figcaption = (props?: DeepPartial<Figcaption>, children?: HTMLContent.Flow): Figcaption => h('figcaption', props, children)
export const figure = (props?: DeepPartial<Figure>, children?: (Figcaption | HTMLContent.FlowItems)[] | string): Figure => h('figure', props, children)
export const footer = (props?: DeepPartial<Footer>, children?: HTMLContent.Flow): Footer => h('footer', props, children)
export const form = (props?: DeepPartial<Form>, children?: HTMLContent.Flow): Form => h('form', props, children)
export const h1 = (props?: DeepPartial<H1>, children?: HTMLContent.Phrasing): H1 => h('h1', props, children)
export const h2 = (props?: DeepPartial<H2>, children?: HTMLContent.Phrasing): H2 => h('h2', props, children)
export const h3 = (props?: DeepPartial<H3>, children?: HTMLContent.Phrasing): H3 => h('h3', props, children)
export const h4 = (props?: DeepPartial<H4>, children?: HTMLContent.Phrasing): H4 => h('h4', props, children)
export const h5 = (props?: DeepPartial<H5>, children?: HTMLContent.Phrasing): H5 => h('h5', props, children)
export const h6 = (props?: DeepPartial<H6>, children?: HTMLContent.Phrasing): H6 => h('h6', props, children)
export const head = (props?: DeepPartial<Head>, children?: HTMLContent.Metadata): Head => h('head', props, children)
export const header = (props?: DeepPartial<Header>, children?: HTMLContent.Flow): Header => h('header', props, children)
export const hr = (props?: DeepPartial<Hr>): Hr => h('hr', props)
export const html = (props?: DeepPartial<Html>, children?: [Head, Body] | [Head] | [Body]): Html => h('html', props, children)
export const i = (props?: DeepPartial<I>, children?: HTMLContent.Phrasing): I => h('i', props, children)
export const iframe = (props?: DeepPartial<Iframe>, children?: HTMLChildren): Iframe => h('iframe', props, children)
export const img = (props?: DeepPartial<Img>): Img => h('img', props)
export const input = (props?: DeepPartial<Input>): Input => h('input', props)
export const ins = (props?: DeepPartial<Ins>, children?: HTMLContent.Transparent): Ins => h('ins', props, children)
export const kbd = (props?: DeepPartial<Kbd>, children?: HTMLContent.Phrasing): Kbd => h('kbd', props, children)
export const label = (props?: DeepPartial<Label>, children?: HTMLContent.Phrasing): Label => h('label', props, children)
export const legend = (props?: DeepPartial<Legend>, children?: HTMLContent.Phrasing): Legend => h('legend', props, children)
export const li = (props?: DeepPartial<Li>, children?: HTMLContent.Flow): Li => h('li', props, children)
export const link = (props?: DeepPartial<Link>): Link => h('link', props)
export const main = (props?: DeepPartial<Main>, children?: HTMLContent.Flow): Main => h('main', props, children)
export const map = (props?: DeepPartial<Map>, children?: HTMLContent.Transparent): Map => h('map', props, children)
export const mark = (props?: DeepPartial<Mark>, children?: HTMLContent.Phrasing): Mark => h('mark', props, children)
export const meta = (props?: DeepPartial<Meta>): Meta => h('meta', props)
export const meter = (props?: DeepPartial<Meter>, children?: HTMLContent.Phrasing): Meter => h('meter', props, children)
export const nav = (props?: DeepPartial<Nav>, children?: HTMLContent.Flow): Nav => h('nav', props, children)
export const noscript = (props?: DeepPartial<Noscript>, children?: HTMLChildren): Noscript => h('noscript', props, children)
export const object = (props?: DeepPartial<Object>, children?: HTMLContent.Transparent): Object => h('object', props, children)
export const ol = (props?: DeepPartial<Ol>, children?: Li[]): Ol => h('ol', props, children)
export const optgroup = (props?: DeepPartial<Optgroup>, children?: Option[]): Optgroup => h('optgroup', props, children)
export const option = (props?: DeepPartial<Option>, child?: string): Option => h('option', props, child)
export const output = (props?: DeepPartial<Output>, children?: HTMLContent.Phrasing): Output => h('output', props, children)
export const p = (props?: DeepPartial<P>, children?: HTMLContent.Phrasing): P => h('p', props, children)
export const param = (props?: DeepPartial<Param>): Param => h('param', props)
export const picture = (props?: DeepPartial<Picture>, children?: (Source | Img | HTMLContent.ScriptSupportingItems)[]): Picture => h('picture', props, children)
export const pre = (props?: DeepPartial<Pre>, children?: HTMLContent.Phrasing): Pre => h('pre', props, children)
export const progress = (props?: DeepPartial<Progress>, children?: HTMLContent.Phrasing): Progress => h('progress', props, children)
export const q = (props?: DeepPartial<Q>, children?: HTMLContent.Phrasing): Q => h('q', props, children)
export const rp = (props?: DeepPartial<Rp>, child?: string): Rp => h('rp', props, child)
export const rt = (props?: DeepPartial<Rt>, children?: HTMLContent.Phrasing): Rt => h('rt', props, children)
export const ruby = (props?: DeepPartial<Ruby>, children?: HTMLContent.Phrasing): Ruby => h('ruby', props, children)
export const s = (props?: DeepPartial<S>, children?: HTMLContent.Phrasing): S => h('s', props, children)
export const samp = (props?: DeepPartial<Samp>, children?: HTMLContent.Phrasing): Samp => h('samp', props, children)
export const script = (props?: DeepPartial<Script>, child?: string): Script => h('script', props, child)
export const section = (props?: DeepPartial<Section>, children?: HTMLContent.Flow): Section => h('section', props, children)
export const select = (props?: DeepPartial<Select>, children?: (Option | Optgroup)[]): Select => h('select', props, children)
export const small = (props?: DeepPartial<Small>, children?: HTMLContent.Phrasing): Small => h('small', props, children)
export const source = (props?: DeepPartial<Source>): Source => h('source', props)
export const span = (props?: DeepPartial<Span>, children?: HTMLContent.Phrasing): Span => h('span', props, children)
export const strong = (props?: DeepPartial<Strong>, children?: HTMLContent.Phrasing): Strong => h('strong', props, children)
export const style = (props?: DeepPartial<Style>, child?: string): Style => h('style', props, child)
export const sub = (props?: DeepPartial<Sub>, children?: HTMLContent.Phrasing): Sub => h('sub', props, children)
export const summary = (props?: DeepPartial<Summary>, children?: HTMLContent.Phrasing | [HTMLContent.HeadingItems]): Summary => h('summary', props, children)
export const sup = (props?: DeepPartial<Sup>, children?: HTMLContent.Phrasing): Sup => h('sup', props, children)
export const table = (props?: DeepPartial<Table>, children?: (Caption | Colgroup | Thead | Tbody | Tfoot)[] | (Caption | Colgroup | Thead | Tr | Tfoot)[]): Table => h('table', props, children)
export const tbody = (props?: DeepPartial<Tbody>, children?: Tr[]): Tbody => h('tbody', props, children)
export const td = (props?: DeepPartial<Td>, children?: HTMLContent.Flow): Td => h('td', props, children)
export const template = (props?: DeepPartial<Template>, children?: HTMLChildren): Template => h('template', props, children)
export const textarea = (props?: DeepPartial<Textarea>, child?: string): Textarea => h('textarea', props, child)
export const tfoot = (props?: DeepPartial<Tfoot>, children?: Tr[]): Tfoot => h('tfoot', props, children)
export const th = (props?: DeepPartial<Th>, children?: HTMLContent.Flow): Th => h('th', props, children)
export const thead = (props?: DeepPartial<Thead>, children?: Tr[]): Thead => h('thead', props, children)
export const time = (props?: DeepPartial<Time>, children?: HTMLContent.Phrasing): Time => h('time', props, children)
export const title = (props?: DeepPartial<Title>, child?: string): Title => h('title', props, child)
export const tr = (props?: DeepPartial<Tr>, children?: (Td | Th | HTMLContent.ScriptSupportingItems)[]): Tr => h('tr', props, children)
export const track = (props?: DeepPartial<Track>): Track => h('track', props)
export const u = (props?: DeepPartial<U>, children?: HTMLContent.Phrasing): U => h('u', props, children)
export const ul = (props?: DeepPartial<Ul>, children?: Li[]): Ul => h('ul', props, children)
// Reserved word suffixed with "_".
export const var_ = (props?: DeepPartial<Var>, children?: HTMLContent.Phrasing): Var => h('var', props, children)
export const video = (props?: DeepPartial<Video>, children?: HTMLContent.Transparent): Video => h('video', props, children)
export const wbr = (props?: DeepPartial<Wbr>): Wbr => h('wbr', props)
