// Set of helper functions to facilitate the work with HTML elements, specially their creation.

// The HTML elements considered below are based on the TypeScript (version 2.5.2) interface ElementTagNameMap and its
// ascendents, as well as on the list of void, raw text and other special elements available at
// https://www.w3.org/TR/html51/syntax.html#writing-html-documents-elements.

/**
 * List of all HTML tag names.
 */
export type HtmlTag
    = 'a'
    | 'abbr'
    | 'acronym'
    | 'address'
    | 'applet'
    | 'area'
    | 'article'
    | 'aside'
    | 'audio'
    | 'b'
    | 'base'
    | 'basefont'
    | 'bdo'
    | 'big'
    | 'blockquote'
    | 'body'
    | 'br'
    | 'button'
    | 'canvas'
    | 'caption'
    | 'center'
    | 'cite'
    | 'code'
    | 'col'
    | 'colgroup'
    | 'data'
    | 'datalist'
    | 'dd'
    | 'del'
    | 'dfn'
    | 'dir'
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
    | 'frame'
    | 'frameset'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'head'
    | 'header'
    | 'hgroup'
    | 'hr'
    | 'html'
    | 'i'
    | 'iframe'
    | 'img'
    | 'input'
    | 'ins'
    | 'isindex'
    | 'kbd'
    | 'keygen'
    | 'label'
    | 'legend'
    | 'li'
    | 'link'
    | 'listing'
    | 'map'
    | 'mark'
    | 'marquee'
    | 'menu'
    | 'meta'
    | 'meter'
    | 'nav'
    | 'nextid'
    | 'nobr'
    | 'noframes'
    | 'noscript'
    | 'object'
    | 'ol'
    | 'optgroup'
    | 'option'
    | 'output'
    | 'p'
    | 'param'
    | 'picture'
    | 'plaintext'
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
    | 'strike'
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
    | 'tt'
    | 'u'
    | 'ul'
    | 'var'
    | 'video'
    | 'wbr'
    | 'x-ms-webview'
    | 'xmp'
    | NewHtmlTag

/**
 * Aliases for HTML tag types, whose native counterparts are not always easy to guess or find.
 * 
 * Notice that some elements do not have a specific interface to define them, and they resort to a more generic one,
 * e.g. Ul (unordered list) is well-defined by HTMLUListElement, but B (bold) simply delegates to HTMLElement.
 */
export type A = HTMLAnchorElement
export type Abbr = HTMLElement
export type Acronym = HTMLElement
export type Address = HTMLElement
export type Applet = HTMLAppletElement
export type Area = HTMLAreaElement
export type Article = HTMLElement
export type Aside = HTMLElement
export type Audio = HTMLAudioElement
export type B = HTMLElement
export type Base = HTMLBaseElement
export type Basefont = HTMLBaseFontElement
export type Bdo = HTMLElement
export type Big = HTMLElement
export type Blockquote = HTMLQuoteElement
export type Body = HTMLBodyElement
export type Br = HTMLBRElement
export type Button = HTMLButtonElement
export type Canvas = HTMLCanvasElement
export type Caption = HTMLTableCaptionElement
export type Center = HTMLElement
export type Cite = HTMLElement
export type Code = HTMLElement
export type Col = HTMLTableColElement
export type Colgroup = HTMLTableColElement
export type Data = HTMLDataElement
export type Datalist = HTMLDataListElement
export type Dd = HTMLElement
export type Del = HTMLModElement
export type Dfn = HTMLElement
export type Dir = HTMLDirectoryElement
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
export type Frame = HTMLFrameElement
export type Frameset = HTMLFrameSetElement
export type H1 = HTMLHeadingElement
export type H2 = HTMLHeadingElement
export type H3 = HTMLHeadingElement
export type H4 = HTMLHeadingElement
export type H5 = HTMLHeadingElement
export type H6 = HTMLHeadingElement
export type Head = HTMLHeadElement
export type Header = HTMLElement
export type Hgroup = HTMLElement
export type Hr = HTMLHRElement
export type Html = HTMLHtmlElement
export type I = HTMLElement
export type Iframe = HTMLIFrameElement
export type Img = HTMLImageElement
export type Input = HTMLInputElement
export type Ins = HTMLModElement
export type Isindex = HTMLUnknownElement
export type Kbd = HTMLElement
export type Keygen = HTMLElement
export type Label = HTMLLabelElement
export type Legend = HTMLLegendElement
export type Li = HTMLLIElement
export type Link = HTMLLinkElement
export type Listing = HTMLPreElement
export type Map = HTMLMapElement
export type Mark = HTMLElement
export type Marquee = HTMLMarqueeElement
export type Menu = HTMLMenuElement
export type Meta = HTMLMetaElement
export type Meter = HTMLMeterElement
export type Nav = HTMLElement
export type Nextid = HTMLUnknownElement
export type Nobr = HTMLElement
export type Noframes = HTMLElement
export type Noscript = HTMLElement
export type Object = HTMLObjectElement
export type Ol = HTMLOListElement
export type Optgroup = HTMLOptGroupElement
export type Option = HTMLOptionElement
export type Output = HTMLOutputElement
export type P = HTMLParagraphElement
export type Param = HTMLParamElement
export type Picture = HTMLPictureElement
export type Plaintext = HTMLElement
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
export type Strike = HTMLElement
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
export type Tt = HTMLElement
export type U = HTMLElement
export type Ul = HTMLUListElement
export type Var = HTMLElement
export type Video = HTMLVideoElement
export type Wbr = HTMLElement
export type Xmp = HTMLPreElement
export type XMsWebview = MSHTMLWebViewElement

/**
 * Allowed types for the children of normal HTML elements.
 */
export type HTMLElementChildren = Node[] | string

/**
 * Helper function to concisely create instances of any HTML element, including custom ones.
 */
export default function h(name: HtmlTag | string, props?: Partial<HTMLElement>, children?: HTMLElementChildren): HTMLElement {
    const elem = document.createElement(name)

    Object.assign(elem, props)

    if (children !== undefined && children !== null) {
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
export const a = (props?: Partial<A>, children?: HTMLElementChildren): A => h('a', props, children) as A
export const abbr = (props?: Partial<Abbr>, children?: HTMLElementChildren): Abbr => h('abbr', props, children) as Abbr
export const acronym = (props?: Partial<Acronym>, children?: HTMLElementChildren): Acronym => h('acronym', props, children) as Acronym
export const address = (props?: Partial<Address>, children?: HTMLElementChildren): Address => h('address', props, children) as Address
export const applet = (props?: Partial<Applet>, children?: HTMLElementChildren): Applet => h('applet', props, children) as Applet
export const area = (props?: Partial<Area>): Area => h('area', props) as Area
export const article = (props?: Partial<Article>, children?: HTMLElementChildren): Article => h('article', props, children) as Article
export const aside = (props?: Partial<Aside>, children?: HTMLElementChildren): Aside => h('aside', props, children) as Aside
export const audio = (props?: Partial<Audio>, children?: HTMLElementChildren): Audio => h('audio', props, children) as Audio
export const b = (props?: Partial<B>, children?: HTMLElementChildren): B => h('b', props, children) as B
export const base = (props?: Partial<Base>): Base => h('base', props) as Base
export const basefont = (props?: Partial<Basefont>, children?: HTMLElementChildren): Basefont => h('basefont', props, children) as Basefont
export const bdo = (props?: Partial<Bdo>, children?: HTMLElementChildren): Bdo => h('bdo', props, children) as Bdo
export const big = (props?: Partial<Big>, children?: HTMLElementChildren): Big => h('big', props, children) as Big
export const blockquote = (props?: Partial<Blockquote>, children?: HTMLElementChildren): Blockquote => h('blockquote', props, children) as Blockquote
export const body = (props?: Partial<Body>, children?: HTMLElementChildren): Body => h('body', props, children) as Body
export const br = (props?: Partial<Br>): Br => h('br', props) as Br
export const button = (props?: Partial<Button>, children?: HTMLElementChildren): Button => h('button', props, children) as Button
export const canvas = (props?: Partial<Canvas>, children?: HTMLElementChildren): Canvas => h('canvas', props, children) as Canvas
export const caption = (props?: Partial<Caption>, children?: HTMLElementChildren): Caption => h('caption', props, children) as Caption
export const center = (props?: Partial<Center>, children?: HTMLElementChildren): Center => h('center', props, children) as Center
export const cite = (props?: Partial<Cite>, children?: HTMLElementChildren): Cite => h('cite', props, children) as Cite
export const code = (props?: Partial<Code>, children?: HTMLElementChildren): Code => h('code', props, children) as Code
export const col = (props?: Partial<Col>): Col => h('col', props) as Col
export const colgroup = (props?: Partial<Colgroup>, children?: HTMLElementChildren): Colgroup => h('colgroup', props, children) as Colgroup
export const data = (props?: Partial<Data>, children?: HTMLElementChildren): Data => h('data', props, children) as Data
export const datalist = (props?: Partial<Datalist>, children?: HTMLElementChildren): Datalist => h('datalist', props, children) as Datalist
export const dd = (props?: Partial<Dd>, children?: HTMLElementChildren): Dd => h('dd', props, children) as Dd
export const del = (props?: Partial<Del>, children?: HTMLElementChildren): Del => h('del', props, children) as Del
export const dfn = (props?: Partial<Dfn>, children?: HTMLElementChildren): Dfn => h('dfn', props, children) as Dfn
export const dir = (props?: Partial<Dir>, children?: HTMLElementChildren): Dir => h('dir', props, children) as Dir
export const div = (props?: Partial<Div>, children?: HTMLElementChildren): Div => h('div', props, children) as Div
export const dl = (props?: Partial<Dl>, children?: HTMLElementChildren): Dl => h('dl', props, children) as Dl
export const dt = (props?: Partial<Dt>, children?: HTMLElementChildren): Dt => h('dt', props, children) as Dt
export const em = (props?: Partial<Em>, children?: HTMLElementChildren): Em => h('em', props, children) as Em
export const embed = (props?: Partial<Embed>): Embed => h('embed', props) as Embed
export const fieldset = (props?: Partial<Fieldset>, children?: HTMLElementChildren): Fieldset => h('fieldset', props, children) as Fieldset
export const figcaption = (props?: Partial<Figcaption>, children?: HTMLElementChildren): Figcaption => h('figcaption', props, children) as Figcaption
export const figure = (props?: Partial<Figure>, children?: HTMLElementChildren): Figure => h('figure', props, children) as Figure
export const font = (props?: Partial<Font>, children?: HTMLElementChildren): Font => h('font', props, children) as Font
export const footer = (props?: Partial<Footer>, children?: HTMLElementChildren): Footer => h('footer', props, children) as Footer
export const form = (props?: Partial<Form>, children?: HTMLElementChildren): Form => h('form', props, children) as Form
export const frame = (props?: Partial<Frame>, children?: HTMLElementChildren): Frame => h('frame', props, children) as Frame
export const frameset = (props?: Partial<Frameset>, children?: HTMLElementChildren): Frameset => h('frameset', props, children) as Frameset
export const h1 = (props?: Partial<H1>, children?: HTMLElementChildren): H1 => h('h1', props, children) as H1
export const h2 = (props?: Partial<H2>, children?: HTMLElementChildren): H2 => h('h2', props, children) as H2
export const h3 = (props?: Partial<H3>, children?: HTMLElementChildren): H3 => h('h3', props, children) as H3
export const h4 = (props?: Partial<H4>, children?: HTMLElementChildren): H4 => h('h4', props, children) as H4
export const h5 = (props?: Partial<H5>, children?: HTMLElementChildren): H5 => h('h5', props, children) as H5
export const h6 = (props?: Partial<H6>, children?: HTMLElementChildren): H6 => h('h6', props, children) as H6
export const head = (props?: Partial<Head>, children?: HTMLElementChildren): Head => h('head', props, children) as Head
export const header = (props?: Partial<Header>, children?: HTMLElementChildren): Header => h('header', props, children) as Header
export const hgroup = (props?: Partial<Hgroup>, children?: HTMLElementChildren): Hgroup => h('hgroup', props, children) as Hgroup
export const hr = (props?: Partial<Hr>): Hr => h('hr', props) as Hr
export const html = (props?: Partial<Html>, children?: HTMLElementChildren): Html => h('html', props, children) as Html
export const i = (props?: Partial<I>, children?: HTMLElementChildren): I => h('i', props, children) as I
export const iframe = (props?: Partial<Iframe>, children?: HTMLElementChildren): Iframe => h('iframe', props, children) as Iframe
export const img = (props?: Partial<Img>): Img => h('img', props) as Img
export const input = (props?: Partial<Input>): Input => h('input', props) as Input
export const ins = (props?: Partial<Ins>, children?: HTMLElementChildren): Ins => h('ins', props, children) as Ins
export const isindex = (props?: Partial<Isindex>, children?: HTMLElementChildren): Isindex => h('isindex', props, children) as Isindex
export const kbd = (props?: Partial<Kbd>, children?: HTMLElementChildren): Kbd => h('kbd', props, children) as Kbd
export const keygen = (props?: Partial<Keygen>): Keygen => h('keygen', props) as Keygen
export const label = (props?: Partial<Label>, children?: HTMLElementChildren): Label => h('label', props, children) as Label
export const legend = (props?: Partial<Legend>, children?: HTMLElementChildren): Legend => h('legend', props, children) as Legend
export const li = (props?: Partial<Li>, children?: HTMLElementChildren): Li => h('li', props, children) as Li
export const link = (props?: Partial<Link>): Link => h('link', props) as Link
export const listing = (props?: Partial<Listing>, children?: HTMLElementChildren): Listing => h('listing', props, children) as Listing
export const map = (props?: Partial<Map>, children?: HTMLElementChildren): Map => h('map', props, children) as Map
export const mark = (props?: Partial<Mark>, children?: HTMLElementChildren): Mark => h('mark', props, children) as Mark
export const marquee = (props?: Partial<Marquee>, children?: HTMLElementChildren): Marquee => h('marquee', props, children) as Marquee
export const menu = (props?: Partial<Menu>, children?: HTMLElementChildren): Menu => h('menu', props, children) as Menu
export const meta = (props?: Partial<Meta>): Meta => h('meta', props) as Meta
export const meter = (props?: Partial<Meter>, children?: HTMLElementChildren): Meter => h('meter', props, children) as Meter
export const nav = (props?: Partial<Nav>, children?: HTMLElementChildren): Nav => h('nav', props, children) as Nav
export const nextid = (props?: Partial<Nextid>, children?: HTMLElementChildren): Nextid => h('nextid', props, children) as Nextid
export const nobr = (props?: Partial<Nobr>, children?: HTMLElementChildren): Nobr => h('nobr', props, children) as Nobr
export const noframes = (props?: Partial<Noframes>, children?: HTMLElementChildren): Noframes => h('noframes', props, children) as Noframes
export const noscript = (props?: Partial<Noscript>, children?: HTMLElementChildren): Noscript => h('noscript', props, children) as Noscript
export const object = (props?: Partial<Object>, children?: HTMLElementChildren): Object => h('object', props, children) as Object
export const ol = (props?: Partial<Ol>, children?: HTMLElementChildren): Ol => h('ol', props, children) as Ol
export const optgroup = (props?: Partial<Optgroup>, children?: HTMLElementChildren): Optgroup => h('optgroup', props, children) as Optgroup
export const option = (props?: Partial<Option>, children?: HTMLElementChildren): Option => h('option', props, children) as Option
export const output = (props?: Partial<Output>, children?: HTMLElementChildren): Output => h('output', props, children) as Output
export const p = (props?: Partial<P>, children?: HTMLElementChildren): P => h('p', props, children) as P
export const param = (props?: Partial<Param>): Param => h('param', props) as Param
export const picture = (props?: Partial<Picture>, children?: HTMLElementChildren): Picture => h('picture', props, children) as Picture
export const plaintext = (props?: Partial<Plaintext>, children?: HTMLElementChildren): Plaintext => h('plaintext', props, children) as Plaintext
export const pre = (props?: Partial<Pre>, children?: HTMLElementChildren): Pre => h('pre', props, children) as Pre
export const progress = (props?: Partial<Progress>, children?: HTMLElementChildren): Progress => h('progress', props, children) as Progress
export const q = (props?: Partial<Q>, children?: HTMLElementChildren): Q => h('q', props, children) as Q
export const rt = (props?: Partial<Rt>, children?: HTMLElementChildren): Rt => h('rt', props, children) as Rt
export const ruby = (props?: Partial<Ruby>, children?: HTMLElementChildren): Ruby => h('ruby', props, children) as Ruby
export const s = (props?: Partial<S>, children?: HTMLElementChildren): S => h('s', props, children) as S
export const samp = (props?: Partial<Samp>, children?: HTMLElementChildren): Samp => h('samp', props, children) as Samp
export const script = (props?: Partial<Script>, child?: string): Script => h('script', props, child) as Script
export const section = (props?: Partial<Section>, children?: HTMLElementChildren): Section => h('section', props, children) as Section
export const select = (props?: Partial<Select>, children?: HTMLElementChildren): Select => h('select', props, children) as Select
export const small = (props?: Partial<Small>, children?: HTMLElementChildren): Small => h('small', props, children) as Small
export const source = (props?: Partial<Source>): Source => h('source', props) as Source
export const span = (props?: Partial<Span>, children?: HTMLElementChildren): Span => h('span', props, children) as Span
export const strike = (props?: Partial<Strike>, children?: HTMLElementChildren): Strike => h('strike', props, children) as Strike
export const strong = (props?: Partial<Strong>, children?: HTMLElementChildren): Strong => h('strong', props, children) as Strong
export const style = (props?: Partial<Style>, child?: string): Style => h('style', props, child) as Style
export const sub = (props?: Partial<Sub>, children?: HTMLElementChildren): Sub => h('sub', props, children) as Sub
export const sup = (props?: Partial<Sup>, children?: HTMLElementChildren): Sup => h('sup', props, children) as Sup
export const table = (props?: Partial<Table>, children?: HTMLElementChildren): Table => h('table', props, children) as Table
export const tbody = (props?: Partial<Tbody>, children?: HTMLElementChildren): Tbody => h('tbody', props, children) as Tbody
export const td = (props?: Partial<Td>, children?: HTMLElementChildren): Td => h('td', props, children) as Td
export const template = (props?: Partial<Template>, children?: HTMLElementChildren): Template => h('template', props, children) as Template
export const textarea = (props?: Partial<Textarea>, child?: string): Textarea => h('textarea', props, child) as Textarea
export const tfoot = (props?: Partial<Tfoot>, children?: HTMLElementChildren): Tfoot => h('tfoot', props, children) as Tfoot
export const th = (props?: Partial<Th>, children?: HTMLElementChildren): Th => h('th', props, children) as Th
export const thead = (props?: Partial<Thead>, children?: HTMLElementChildren): Thead => h('thead', props, children) as Thead
export const time = (props?: Partial<Time>, children?: HTMLElementChildren): Time => h('time', props, children) as Time
export const title = (props?: Partial<Title>, child?: string): Title => h('title', props, child) as Title
export const tr = (props?: Partial<Tr>, children?: HTMLElementChildren): Tr => h('tr', props, children) as Tr
export const track = (props?: Partial<Track>): Track => h('track', props) as Track
export const tt = (props?: Partial<Tt>, children?: HTMLElementChildren): Tt => h('tt', props, children) as Tt
export const u = (props?: Partial<U>, children?: HTMLElementChildren): U => h('u', props, children) as U
export const ul = (props?: Partial<Ul>, children?: HTMLElementChildren): Ul => h('ul', props, children) as Ul
// Reserved word suffixed with "_".
export const var_ = (props?: Partial<Var>, children?: HTMLElementChildren): Var => h('var', props, children) as Var
export const video = (props?: Partial<Video>, children?: HTMLElementChildren): Video => h('video', props, children) as Video
export const wbr = (props?: Partial<Wbr>): Wbr => h('wbr', props) as Wbr
export const xmp = (props?: Partial<Xmp>, children?: HTMLElementChildren): Xmp => h('xmp', props, children) as Xmp
// Invalid name character "-" replaced with lower camel case.
export const xMsWebview = (props?: Partial<XMsWebview>, children?: HTMLElementChildren): XMsWebview => h('x-ms-webview', props, children) as XMsWebview


// Tags added manually as they are not present in TypeScript 2.5.2 but listed in W3Schools, see
// https://github.com/Microsoft/TypeScript/issues/17828 and https://www.w3schools.com/html/html5_new_elements.asp.
// TODO: re-evaluate and rearrange when available in TypeScript.

type NewHtmlTag
    = 'bdi'
    | 'details'
    | 'dialog'
    | 'main'
    | 'menuitem'
    | 'rp'
    | 'summary'

export const bdi = (props?: Partial<Bdi>, children?: HTMLElementChildren): Bdi => h('bdi', props, children) as Bdi
export const details = (props?: Partial<Details>, children?: HTMLElementChildren): Details => h('details', props, children) as Details
export const dialog = (props?: Partial<Dialog>, children?: HTMLElementChildren): Dialog => h('dialog', props, children) as Dialog
export const main = (props?: Partial<Main>, children?: HTMLElementChildren): Main => h('main', props, children) as Main
export const menuitem = (props?: Partial<Menuitem>): Menuitem => h('menuitem', props) as Menuitem
export const rp = (props?: Partial<Rp>, children?: HTMLElementChildren): Rp => h('rp', props, children) as Rp
export const summary = (props?: Partial<Summary>, children?: HTMLElementChildren): Summary => h('summary', props, children) as Summary

export type Bdi = HTMLElement
export type Details = HTMLElement
export type Dialog = HTMLElement
export type Main = HTMLElement
export type Menuitem = HTMLElement
export type Rp = HTMLElement
export type Summary = HTMLElement
