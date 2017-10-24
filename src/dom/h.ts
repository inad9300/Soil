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

/**
 * List of all HTML tag names.
 */
export type HtmlTag
    = 'a'
    | 'abbr'
    | 'address'
    | 'area'
    | 'article'
    | 'aside'
    | 'audio'
    | 'b'
    | 'base'
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
    | 'dfn'
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
    | 'map'
    | 'mark'
    | 'menu'
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
    | NewHtmlTag

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
export type Dfn = HTMLElement
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
export type Map = HTMLMapElement
export type Mark = HTMLElement
export type Menu = HTMLMenuElement
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
 * Allowed types for the children of those HTML elements accepting them and without special constraints.
 */
export type HTMLElementChildren = Element[] | string

/**
 * Allowed types for the properties of HTML elements.
 */
export type HTMLElementProperties = DeepPartial<HTMLElement> & {[prop: string]: any}

/**
 * Helper function to concisely create instances of any HTML element, including custom ones.
 */
export function h(name: HtmlTag | string, props?: HTMLElementProperties, children?: HTMLElementChildren): HTMLElement {
    const elem = document.createElement(name)

    if (props !== undefined) {
        assignProperties<HTMLElement, HTMLElementProperties>(elem, props)
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
 * Helpers to allow creating any concrete HTML element. Prefer over the generic `h()` function, as the types of these
 * are stricter, e.g. `br()` will not let you pass any children and will return `HTMLBRElement`, as opposed to the more
 * generic `HTMLElement`.
 */
export const a = (props?: DeepPartial<A>, children?: HTMLElementChildren): A => h('a', props, children) as A
export const abbr = (props?: DeepPartial<Abbr>, children?: HTMLElementChildren): Abbr => h('abbr', props, children) as Abbr
export const address = (props?: DeepPartial<Address>, children?: HTMLElementChildren): Address => h('address', props, children) as Address
export const area = (props?: DeepPartial<Area>): Area => h('area', props) as Area
export const article = (props?: DeepPartial<Article>, children?: HTMLElementChildren): Article => h('article', props, children) as Article
export const aside = (props?: DeepPartial<Aside>, children?: HTMLElementChildren): Aside => h('aside', props, children) as Aside
export const audio = (props?: DeepPartial<Audio>, children?: HTMLElementChildren): Audio => h('audio', props, children) as Audio
export const b = (props?: DeepPartial<B>, children?: HTMLElementChildren): B => h('b', props, children) as B
export const base = (props?: DeepPartial<Base>): Base => h('base', props) as Base
export const bdo = (props?: DeepPartial<Bdo>, children?: HTMLElementChildren): Bdo => h('bdo', props, children) as Bdo
export const blockquote = (props?: DeepPartial<Blockquote>, children?: HTMLElementChildren): Blockquote => h('blockquote', props, children) as Blockquote
export const body = (props?: DeepPartial<Body>, children?: HTMLElementChildren): Body => h('body', props, children) as Body
export const br = (props?: DeepPartial<Br>): Br => h('br', props) as Br
export const button = (props?: DeepPartial<Button>, children?: HTMLElementChildren): Button => h('button', props, children) as Button
export const canvas = (props?: DeepPartial<Canvas>, children?: HTMLElementChildren): Canvas => h('canvas', props, children) as Canvas
export const caption = (props?: DeepPartial<Caption>, children?: HTMLElementChildren): Caption => h('caption', props, children) as Caption
export const cite = (props?: DeepPartial<Cite>, children?: HTMLElementChildren): Cite => h('cite', props, children) as Cite
export const code = (props?: DeepPartial<Code>, children?: HTMLElementChildren): Code => h('code', props, children) as Code
export const col = (props?: DeepPartial<Col>): Col => h('col', props) as Col
export const colgroup = (props?: DeepPartial<Colgroup>, children?: HTMLElementChildren): Colgroup => h('colgroup', props, children) as Colgroup
export const data = (props?: DeepPartial<Data>, children?: HTMLElementChildren): Data => h('data', props, children) as Data
export const datalist = (props?: DeepPartial<Datalist>, children?: HTMLElementChildren): Datalist => h('datalist', props, children) as Datalist
export const dd = (props?: DeepPartial<Dd>, children?: HTMLElementChildren): Dd => h('dd', props, children) as Dd
export const del = (props?: DeepPartial<Del>, children?: HTMLElementChildren): Del => h('del', props, children) as Del
export const dfn = (props?: DeepPartial<Dfn>, children?: HTMLElementChildren): Dfn => h('dfn', props, children) as Dfn
export const div = (props?: DeepPartial<Div>, children?: HTMLElementChildren): Div => h('div', props, children) as Div
export const dl = (props?: DeepPartial<Dl>, children?: HTMLElementChildren): Dl => h('dl', props, children) as Dl
export const dt = (props?: DeepPartial<Dt>, children?: HTMLElementChildren): Dt => h('dt', props, children) as Dt
export const em = (props?: DeepPartial<Em>, children?: HTMLElementChildren): Em => h('em', props, children) as Em
export const embed = (props?: DeepPartial<Embed>): Embed => h('embed', props) as Embed
export const fieldset = (props?: DeepPartial<Fieldset>, children?: HTMLElementChildren): Fieldset => h('fieldset', props, children) as Fieldset
export const figcaption = (props?: DeepPartial<Figcaption>, children?: HTMLElementChildren): Figcaption => h('figcaption', props, children) as Figcaption
export const figure = (props?: DeepPartial<Figure>, children?: HTMLElementChildren): Figure => h('figure', props, children) as Figure
export const font = (props?: DeepPartial<Font>, children?: HTMLElementChildren): Font => h('font', props, children) as Font
export const footer = (props?: DeepPartial<Footer>, children?: HTMLElementChildren): Footer => h('footer', props, children) as Footer
export const form = (props?: DeepPartial<Form>, children?: HTMLElementChildren): Form => h('form', props, children) as Form
export const h1 = (props?: DeepPartial<H1>, children?: HTMLElementChildren): H1 => h('h1', props, children) as H1
export const h2 = (props?: DeepPartial<H2>, children?: HTMLElementChildren): H2 => h('h2', props, children) as H2
export const h3 = (props?: DeepPartial<H3>, children?: HTMLElementChildren): H3 => h('h3', props, children) as H3
export const h4 = (props?: DeepPartial<H4>, children?: HTMLElementChildren): H4 => h('h4', props, children) as H4
export const h5 = (props?: DeepPartial<H5>, children?: HTMLElementChildren): H5 => h('h5', props, children) as H5
export const h6 = (props?: DeepPartial<H6>, children?: HTMLElementChildren): H6 => h('h6', props, children) as H6
export const head = (props?: DeepPartial<Head>, children?: HTMLElementChildren): Head => h('head', props, children) as Head
export const header = (props?: DeepPartial<Header>, children?: HTMLElementChildren): Header => h('header', props, children) as Header
export const hr = (props?: DeepPartial<Hr>): Hr => h('hr', props) as Hr
export const html = (props?: DeepPartial<Html>, children?: HTMLElementChildren): Html => h('html', props, children) as Html
export const i = (props?: DeepPartial<I>, children?: HTMLElementChildren): I => h('i', props, children) as I
export const iframe = (props?: DeepPartial<Iframe>, children?: HTMLElementChildren): Iframe => h('iframe', props, children) as Iframe
export const img = (props?: DeepPartial<Img>): Img => h('img', props) as Img
export const input = (props?: DeepPartial<Input>): Input => h('input', props) as Input
export const ins = (props?: DeepPartial<Ins>, children?: HTMLElementChildren): Ins => h('ins', props, children) as Ins
export const kbd = (props?: DeepPartial<Kbd>, children?: HTMLElementChildren): Kbd => h('kbd', props, children) as Kbd
export const label = (props?: DeepPartial<Label>, children?: HTMLElementChildren): Label => h('label', props, children) as Label
export const legend = (props?: DeepPartial<Legend>, children?: HTMLElementChildren): Legend => h('legend', props, children) as Legend
export const li = (props?: DeepPartial<Li>, children?: HTMLElementChildren): Li => h('li', props, children) as Li
export const link = (props?: DeepPartial<Link>): Link => h('link', props) as Link
export const map = (props?: DeepPartial<Map>, children?: HTMLElementChildren): Map => h('map', props, children) as Map
export const mark = (props?: DeepPartial<Mark>, children?: HTMLElementChildren): Mark => h('mark', props, children) as Mark
export const menu = (props?: DeepPartial<Menu>, children?: HTMLElementChildren): Menu => h('menu', props, children) as Menu
export const meta = (props?: DeepPartial<Meta>): Meta => h('meta', props) as Meta
export const meter = (props?: DeepPartial<Meter>, children?: HTMLElementChildren): Meter => h('meter', props, children) as Meter
export const nav = (props?: DeepPartial<Nav>, children?: HTMLElementChildren): Nav => h('nav', props, children) as Nav
export const nextid = (props?: DeepPartial<Nextid>, children?: HTMLElementChildren): Nextid => h('nextid', props, children) as Nextid
export const nobr = (props?: DeepPartial<Nobr>, children?: HTMLElementChildren): Nobr => h('nobr', props, children) as Nobr
export const noscript = (props?: DeepPartial<Noscript>, children?: HTMLElementChildren): Noscript => h('noscript', props, children) as Noscript
export const object = (props?: DeepPartial<Object>, children?: HTMLElementChildren): Object => h('object', props, children) as Object
export const ol = (props?: DeepPartial<Ol>, children?: HTMLElementChildren): Ol => h('ol', props, children) as Ol
export const optgroup = (props?: DeepPartial<Optgroup>, children?: HTMLElementChildren): Optgroup => h('optgroup', props, children) as Optgroup
export const option = (props?: DeepPartial<Option>, children?: HTMLElementChildren): Option => h('option', props, children) as Option
export const output = (props?: DeepPartial<Output>, children?: HTMLElementChildren): Output => h('output', props, children) as Output
export const p = (props?: DeepPartial<P>, children?: HTMLElementChildren): P => h('p', props, children) as P
export const param = (props?: DeepPartial<Param>): Param => h('param', props) as Param
export const picture = (props?: DeepPartial<Picture>, children?: HTMLElementChildren): Picture => h('picture', props, children) as Picture
export const pre = (props?: DeepPartial<Pre>, children?: HTMLElementChildren): Pre => h('pre', props, children) as Pre
export const progress = (props?: DeepPartial<Progress>, children?: HTMLElementChildren): Progress => h('progress', props, children) as Progress
export const q = (props?: DeepPartial<Q>, children?: HTMLElementChildren): Q => h('q', props, children) as Q
export const rt = (props?: DeepPartial<Rt>, children?: HTMLElementChildren): Rt => h('rt', props, children) as Rt
export const ruby = (props?: DeepPartial<Ruby>, children?: HTMLElementChildren): Ruby => h('ruby', props, children) as Ruby
export const s = (props?: DeepPartial<S>, children?: HTMLElementChildren): S => h('s', props, children) as S
export const samp = (props?: DeepPartial<Samp>, children?: HTMLElementChildren): Samp => h('samp', props, children) as Samp
export const script = (props?: DeepPartial<Script>, child?: string): Script => h('script', props, child) as Script
export const section = (props?: DeepPartial<Section>, children?: HTMLElementChildren): Section => h('section', props, children) as Section
export const select = (props?: DeepPartial<Select>, children?: Option[] | Optgroup[] | string): Select => h('select', props, children) as Select
export const small = (props?: DeepPartial<Small>, children?: HTMLElementChildren): Small => h('small', props, children) as Small
export const source = (props?: DeepPartial<Source>): Source => h('source', props) as Source
export const span = (props?: DeepPartial<Span>, children?: HTMLElementChildren): Span => h('span', props, children) as Span
export const strong = (props?: DeepPartial<Strong>, children?: HTMLElementChildren): Strong => h('strong', props, children) as Strong
export const style = (props?: DeepPartial<Style>, child?: string): Style => h('style', props, child) as Style
export const sub = (props?: DeepPartial<Sub>, children?: HTMLElementChildren): Sub => h('sub', props, children) as Sub
export const sup = (props?: DeepPartial<Sup>, children?: HTMLElementChildren): Sup => h('sup', props, children) as Sup
export const table = (props?: DeepPartial<Table>, children?: HTMLElementChildren): Table => h('table', props, children) as Table
export const tbody = (props?: DeepPartial<Tbody>, children?: HTMLElementChildren): Tbody => h('tbody', props, children) as Tbody
export const td = (props?: DeepPartial<Td>, children?: HTMLElementChildren): Td => h('td', props, children) as Td
export const template = (props?: DeepPartial<Template>, children?: HTMLElementChildren): Template => h('template', props, children) as Template
export const textarea = (props?: DeepPartial<Textarea>, child?: string): Textarea => h('textarea', props, child) as Textarea
export const tfoot = (props?: DeepPartial<Tfoot>, children?: HTMLElementChildren): Tfoot => h('tfoot', props, children) as Tfoot
export const th = (props?: DeepPartial<Th>, children?: HTMLElementChildren): Th => h('th', props, children) as Th
export const thead = (props?: DeepPartial<Thead>, children?: HTMLElementChildren): Thead => h('thead', props, children) as Thead
export const time = (props?: DeepPartial<Time>, children?: HTMLElementChildren): Time => h('time', props, children) as Time
export const title = (props?: DeepPartial<Title>, child?: string): Title => h('title', props, child) as Title
export const tr = (props?: DeepPartial<Tr>, children?: HTMLElementChildren): Tr => h('tr', props, children) as Tr
export const track = (props?: DeepPartial<Track>): Track => h('track', props) as Track
export const u = (props?: DeepPartial<U>, children?: HTMLElementChildren): U => h('u', props, children) as U
export const ul = (props?: DeepPartial<Ul>, children?: HTMLElementChildren): Ul => h('ul', props, children) as Ul
// Reserved word suffixed with "_".
export const var_ = (props?: DeepPartial<Var>, children?: HTMLElementChildren): Var => h('var', props, children) as Var
export const video = (props?: DeepPartial<Video>, children?: HTMLElementChildren): Video => h('video', props, children) as Video
export const wbr = (props?: DeepPartial<Wbr>): Wbr => h('wbr', props) as Wbr


// Tags added manually as they are not present in TypeScript 2.5.2 but listed in W3Schools, see
// https://github.com/Microsoft/TypeScript/issues/17828 and https://www.w3schools.com/html/html5_new_elements.asp.
// TODO Re-evaluate and rearrange when available in TypeScript.

type NewHtmlTag
    = 'bdi'
    | 'details'
    | 'dialog'
    | 'main'
    | 'menuitem'
    | 'rp'
    | 'summary'

export const bdi = (props?: DeepPartial<Bdi>, children?: HTMLElementChildren): Bdi => h('bdi', props, children) as Bdi
export const details = (props?: DeepPartial<Details>, children?: HTMLElementChildren): Details => h('details', props, children) as Details
export const dialog = (props?: DeepPartial<Dialog>, children?: HTMLElementChildren): Dialog => h('dialog', props, children) as Dialog
export const main = (props?: DeepPartial<Main>, children?: HTMLElementChildren): Main => h('main', props, children) as Main
export const menuitem = (props?: DeepPartial<Menuitem>): Menuitem => h('menuitem', props) as Menuitem
export const rp = (props?: DeepPartial<Rp>, children?: HTMLElementChildren): Rp => h('rp', props, children) as Rp
export const summary = (props?: DeepPartial<Summary>, children?: HTMLElementChildren): Summary => h('summary', props, children) as Summary

export type Bdi = HTMLElement
export type Details = HTMLElement
export type Dialog = HTMLElement
export type Main = HTMLElement
export type Menuitem = HTMLElement
export type Rp = HTMLElement
export type Summary = HTMLElement