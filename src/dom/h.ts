// Set of helper functions to facilitate the work with HTML elements, specially their creation.

// NOTE The following functions silently depend on the `document` variable being globally available. Therefore, unit
// tests of components that use them must be run inside a browser, or must expose `document` globally, e.g. through
// PhantomJS or jsdom.

// The HTML elements considered below are based on the TypeScript (version 2.5.2) interface `ElementTagNameMap` and its
// ascendents, on the list of void, raw text and other special elements available at
// https://www.w3.org/TR/html51/syntax.html#writing-html-documents-elements, and on the list of obsolete and deprecated
// HTML elements provided by https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Obsolete_and_deprecated_elements.
// (Non-standard elements, such as `<x-ms-webview>`, are also excluded.)

import {assignProperties} from './assignProperties'
import {DeepPartial} from '../extra/DeepPartial'

// Types added manually as they are not present in TypeScript 2.6.2 but listed in W3Schools. See
// https://github.com/Microsoft/TypeScript/issues/17828 and https://www.w3schools.com/html/html5_new_elements.asp.
// TODO Re-evaluate and rearrange when available in TypeScript.
export type HTMLDetailsElement = HTMLElement & {open: boolean}
export type HTMLDialogElement = HTMLElement & {open: boolean}
export type HTMLMenuItemElement = HTMLElement & {
    checked: boolean,
    command: string,
    default: boolean,
    disabled: boolean,
    icon: string,
    label: string,
    radiogroup: string,
    type: 'command' | 'checkbox' | 'radio'
}

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
    | 'font'
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
    | 'menu'
    | 'menuitem'
    | 'meta'
    | 'meter'
    | 'nav'
    | 'nextid'
    | 'nobr'
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
 * Aliases for HTML tag types, whose native counterparts are not always easy to guess or find.
 *
 * Notice that some elements do not have a specific interface to define them, and they resort to a more generic one,
 * e.g. Ul (unordered list) is well-defined by HTMLUListElement, but B (bold) simply delegates to HTMLElement.
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
export type Font = HTMLFontElement
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
export type Menu = HTMLMenuElement
export type Menuitem = HTMLMenuItemElement
export type Meta = HTMLMetaElement
export type Meter = HTMLMeterElement
export type Nav = HTMLElement
export type Nextid = HTMLUnknownElement
export type Nobr = HTMLElement
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
    font: Font
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
    menu: Menu
    menuitem: Menuitem
    meta: Meta
    meter: Meter
    nav: Nav
    nextid: Nextid
    nobr: Nobr
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
 * Allowed types for the children of those HTML elements accepting them and without special constraints.
 */
export type HTMLChildren = Element[] | string

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
            children.forEach(child => elem.appendChild(child))
        }
    }

    return elem
}

/**
 * Helpers to allow creating any concrete HTML element in a more concise manner. Sometimes, the types of these are
 * stricter as well, e.g. `br()` does not accept children elements as a parameter.
 */
export const a = (props?: DeepPartial<A>, children?: HTMLChildren): A => h('a', props, children)
export const abbr = (props?: DeepPartial<Abbr>, children?: HTMLChildren): Abbr => h('abbr', props, children)
export const address = (props?: DeepPartial<Address>, children?: HTMLChildren): Address => h('address', props, children)
export const area = (props?: DeepPartial<Area>): Area => h('area', props)
export const article = (props?: DeepPartial<Article>, children?: HTMLChildren): Article => h('article', props, children)
export const aside = (props?: DeepPartial<Aside>, children?: HTMLChildren): Aside => h('aside', props, children)
export const audio = (props?: DeepPartial<Audio>, children?: HTMLChildren): Audio => h('audio', props, children)
export const b = (props?: DeepPartial<B>, children?: HTMLChildren): B => h('b', props, children)
export const base = (props?: DeepPartial<Base>): Base => h('base', props)
export const bdi = (props?: DeepPartial<Bdi>, children?: HTMLChildren): Bdi => h('bdi', props, children)
export const bdo = (props?: DeepPartial<Bdo>, children?: HTMLChildren): Bdo => h('bdo', props, children)
export const blockquote = (props?: DeepPartial<Blockquote>, children?: HTMLChildren): Blockquote => h('blockquote', props, children)
export const body = (props?: DeepPartial<Body>, children?: HTMLChildren): Body => h('body', props, children)
export const br = (props?: DeepPartial<Br>): Br => h('br', props)
export const button = (props?: DeepPartial<Button>, children?: HTMLChildren): Button => h('button', props, children)
export const canvas = (props?: DeepPartial<Canvas>, children?: HTMLChildren): Canvas => h('canvas', props, children)
export const caption = (props?: DeepPartial<Caption>, children?: HTMLChildren): Caption => h('caption', props, children)
export const cite = (props?: DeepPartial<Cite>, children?: HTMLChildren): Cite => h('cite', props, children)
export const code = (props?: DeepPartial<Code>, children?: HTMLChildren): Code => h('code', props, children)
export const col = (props?: DeepPartial<Col>): Col => h('col', props)
export const colgroup = (props?: DeepPartial<Colgroup>, children?: HTMLChildren): Colgroup => h('colgroup', props, children)
export const data = (props?: DeepPartial<Data>, children?: HTMLChildren): Data => h('data', props, children)
export const datalist = (props?: DeepPartial<Datalist>, children?: HTMLChildren): Datalist => h('datalist', props, children)
export const dd = (props?: DeepPartial<Dd>, children?: HTMLChildren): Dd => h('dd', props, children)
export const del = (props?: DeepPartial<Del>, children?: HTMLChildren): Del => h('del', props, children)
export const details = (props?: DeepPartial<Details>, children?: HTMLChildren): Details => h('details', props, children)
export const dfn = (props?: DeepPartial<Dfn>, children?: HTMLChildren): Dfn => h('dfn', props, children)
export const dialog = (props?: DeepPartial<Dialog>, children?: HTMLChildren): Dialog => h('dialog', props, children)
export const div = (props?: DeepPartial<Div>, children?: HTMLChildren): Div => h('div', props, children)
export const dl = (props?: DeepPartial<Dl>, children?: HTMLChildren): Dl => h('dl', props, children)
export const dt = (props?: DeepPartial<Dt>, children?: HTMLChildren): Dt => h('dt', props, children)
export const em = (props?: DeepPartial<Em>, children?: HTMLChildren): Em => h('em', props, children)
export const embed = (props?: DeepPartial<Embed>): Embed => h('embed', props)
export const fieldset = (props?: DeepPartial<Fieldset>, children?: HTMLChildren): Fieldset => h('fieldset', props, children)
export const figcaption = (props?: DeepPartial<Figcaption>, children?: HTMLChildren): Figcaption => h('figcaption', props, children)
export const figure = (props?: DeepPartial<Figure>, children?: HTMLChildren): Figure => h('figure', props, children)
export const font = (props?: DeepPartial<Font>, children?: HTMLChildren): Font => h('font', props, children)
export const footer = (props?: DeepPartial<Footer>, children?: HTMLChildren): Footer => h('footer', props, children)
export const form = (props?: DeepPartial<Form>, children?: HTMLChildren): Form => h('form', props, children)
export const h1 = (props?: DeepPartial<H1>, children?: HTMLChildren): H1 => h('h1', props, children)
export const h2 = (props?: DeepPartial<H2>, children?: HTMLChildren): H2 => h('h2', props, children)
export const h3 = (props?: DeepPartial<H3>, children?: HTMLChildren): H3 => h('h3', props, children)
export const h4 = (props?: DeepPartial<H4>, children?: HTMLChildren): H4 => h('h4', props, children)
export const h5 = (props?: DeepPartial<H5>, children?: HTMLChildren): H5 => h('h5', props, children)
export const h6 = (props?: DeepPartial<H6>, children?: HTMLChildren): H6 => h('h6', props, children)
export const head = (props?: DeepPartial<Head>, children?: HTMLChildren): Head => h('head', props, children)
export const header = (props?: DeepPartial<Header>, children?: HTMLChildren): Header => h('header', props, children)
export const hr = (props?: DeepPartial<Hr>): Hr => h('hr', props)
export const html = (props?: DeepPartial<Html>, children?: HTMLChildren): Html => h('html', props, children)
export const i = (props?: DeepPartial<I>, children?: HTMLChildren): I => h('i', props, children)
export const iframe = (props?: DeepPartial<Iframe>, children?: HTMLChildren): Iframe => h('iframe', props, children)
export const img = (props?: DeepPartial<Img>): Img => h('img', props)
export const input = (props?: DeepPartial<Input>): Input => h('input', props)
export const ins = (props?: DeepPartial<Ins>, children?: HTMLChildren): Ins => h('ins', props, children)
export const kbd = (props?: DeepPartial<Kbd>, children?: HTMLChildren): Kbd => h('kbd', props, children)
export const label = (props?: DeepPartial<Label>, children?: HTMLChildren): Label => h('label', props, children)
export const legend = (props?: DeepPartial<Legend>, children?: HTMLChildren): Legend => h('legend', props, children)
export const li = (props?: DeepPartial<Li>, children?: HTMLChildren): Li => h('li', props, children)
export const link = (props?: DeepPartial<Link>): Link => h('link', props)
export const main = (props?: DeepPartial<Main>, children?: HTMLChildren): Main => h('main', props, children)
export const map = (props?: DeepPartial<Map>, children?: HTMLChildren): Map => h('map', props, children)
export const mark = (props?: DeepPartial<Mark>, children?: HTMLChildren): Mark => h('mark', props, children)
export const menu = (props?: DeepPartial<Menu>, children?: HTMLChildren): Menu => h('menu', props, children)
export const menuitem = (props?: DeepPartial<Menuitem>): Menuitem => h('menuitem', props)
export const meta = (props?: DeepPartial<Meta>): Meta => h('meta', props)
export const meter = (props?: DeepPartial<Meter>, children?: HTMLChildren): Meter => h('meter', props, children)
export const nav = (props?: DeepPartial<Nav>, children?: HTMLChildren): Nav => h('nav', props, children)
export const nextid = (props?: DeepPartial<Nextid>, children?: HTMLChildren): Nextid => h('nextid', props, children)
export const nobr = (props?: DeepPartial<Nobr>, children?: HTMLChildren): Nobr => h('nobr', props, children)
export const noscript = (props?: DeepPartial<Noscript>, children?: HTMLChildren): Noscript => h('noscript', props, children)
export const object = (props?: DeepPartial<Object>, children?: HTMLChildren): Object => h('object', props, children)
export const ol = (props?: DeepPartial<Ol>, children?: HTMLChildren): Ol => h('ol', props, children)
export const optgroup = (props?: DeepPartial<Optgroup>, children?: HTMLChildren): Optgroup => h('optgroup', props, children)
export const option = (props?: DeepPartial<Option>, children?: HTMLChildren): Option => h('option', props, children)
export const output = (props?: DeepPartial<Output>, children?: HTMLChildren): Output => h('output', props, children)
export const p = (props?: DeepPartial<P>, children?: HTMLChildren): P => h('p', props, children)
export const param = (props?: DeepPartial<Param>): Param => h('param', props)
export const picture = (props?: DeepPartial<Picture>, children?: HTMLChildren): Picture => h('picture', props, children)
export const pre = (props?: DeepPartial<Pre>, children?: HTMLChildren): Pre => h('pre', props, children)
export const progress = (props?: DeepPartial<Progress>, children?: HTMLChildren): Progress => h('progress', props, children)
export const q = (props?: DeepPartial<Q>, children?: HTMLChildren): Q => h('q', props, children)
export const rp = (props?: DeepPartial<Rp>, children?: HTMLChildren): Rp => h('rp', props, children)
export const rt = (props?: DeepPartial<Rt>, children?: HTMLChildren): Rt => h('rt', props, children)
export const ruby = (props?: DeepPartial<Ruby>, children?: HTMLChildren): Ruby => h('ruby', props, children)
export const s = (props?: DeepPartial<S>, children?: HTMLChildren): S => h('s', props, children)
export const samp = (props?: DeepPartial<Samp>, children?: HTMLChildren): Samp => h('samp', props, children)
export const script = (props?: DeepPartial<Script>, child?: string): Script => h('script', props, child)
export const section = (props?: DeepPartial<Section>, children?: HTMLChildren): Section => h('section', props, children)
export const select = (props?: DeepPartial<Select>, children?: Option[] | Optgroup[] | string): Select => h('select', props, children)
export const small = (props?: DeepPartial<Small>, children?: HTMLChildren): Small => h('small', props, children)
export const source = (props?: DeepPartial<Source>): Source => h('source', props)
export const span = (props?: DeepPartial<Span>, children?: HTMLChildren): Span => h('span', props, children)
export const strong = (props?: DeepPartial<Strong>, children?: HTMLChildren): Strong => h('strong', props, children)
export const style = (props?: DeepPartial<Style>, child?: string): Style => h('style', props, child)
export const sub = (props?: DeepPartial<Sub>, children?: HTMLChildren): Sub => h('sub', props, children)
export const summary = (props?: DeepPartial<Summary>, children?: HTMLChildren): Summary => h('summary', props, children)
export const sup = (props?: DeepPartial<Sup>, children?: HTMLChildren): Sup => h('sup', props, children)
export const table = (props?: DeepPartial<Table>, children?: HTMLChildren): Table => h('table', props, children)
export const tbody = (props?: DeepPartial<Tbody>, children?: HTMLChildren): Tbody => h('tbody', props, children)
export const td = (props?: DeepPartial<Td>, children?: HTMLChildren): Td => h('td', props, children)
export const template = (props?: DeepPartial<Template>, children?: HTMLChildren): Template => h('template', props, children)
export const textarea = (props?: DeepPartial<Textarea>, child?: string): Textarea => h('textarea', props, child)
export const tfoot = (props?: DeepPartial<Tfoot>, children?: HTMLChildren): Tfoot => h('tfoot', props, children)
export const th = (props?: DeepPartial<Th>, children?: HTMLChildren): Th => h('th', props, children)
export const thead = (props?: DeepPartial<Thead>, children?: HTMLChildren): Thead => h('thead', props, children)
export const time = (props?: DeepPartial<Time>, children?: HTMLChildren): Time => h('time', props, children)
export const title = (props?: DeepPartial<Title>, child?: string): Title => h('title', props, child)
export const tr = (props?: DeepPartial<Tr>, children?: HTMLChildren): Tr => h('tr', props, children)
export const track = (props?: DeepPartial<Track>): Track => h('track', props)
export const u = (props?: DeepPartial<U>, children?: HTMLChildren): U => h('u', props, children)
export const ul = (props?: DeepPartial<Ul>, children?: HTMLChildren): Ul => h('ul', props, children)
// Reserved word suffixed with "_".
export const var_ = (props?: DeepPartial<Var>, children?: HTMLChildren): Var => h('var', props, children)
export const video = (props?: DeepPartial<Video>, children?: HTMLChildren): Video => h('video', props, children)
export const wbr = (props?: DeepPartial<Wbr>): Wbr => h('wbr', props)