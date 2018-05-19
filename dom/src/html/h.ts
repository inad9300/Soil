import {addChildren} from '../addChildren'
import {assignProperties} from '../assignProperties'
import {BuiltTimeDom} from '../BuiltTimeDom'
import {BuiltTimeHtmlTypesMap} from './BuiltTimeHtmlTypesMap'
import {HtmlTypesMap} from './HtmlTypesMap'
import {HtmlChildrenMap} from './HtmlChildrenMap'

/**
 * Factory function for HTML elements.
 */
function hh<T extends keyof HtmlTypesMap>(tag: T, props?: BuiltTimeHtmlTypesMap[T], children?: HtmlChildrenMap[T]): HtmlTypesMap[T]
function hh(tag: string, props?: BuiltTimeDom.HTMLElement, children?: (HTMLElement | SVGSVGElement | string)[]): HTMLElement
function hh(tag: string, props?: BuiltTimeDom.HTMLElement, children?: (HTMLElement | SVGSVGElement | string)[]) {
    const elem = document.createElement(tag)
    if (props !== undefined) {
        assignProperties(elem, props)
    }
    if (children !== undefined) {
        addChildren(elem, children)
    }
    return elem
}

export namespace h {

    /**
     * Helper function to concisely create instances of custom HTML elements,
     * whose tags are automatically prefixed with "x-".
     */
    export const x = (tag: string, props?: BuiltTimeDom.HTMLElement, children?: (HTMLElement | SVGSVGElement | string)[]): HTMLElement => hh(`x-${tag}`, props, children)
}

/// Script-generated.

/**
 * Helpers to facilitate the concise creation of any HTML element.
 *
 * NOTE The following functions silently depend on the `document` variable
 * being globally available. Therefore, unit tests of components that use them
 * must be run inside a browser, or must expose `document` globally, e.g.
 * through PhantomJS or jsdom.
 */
export namespace h {
    export const a = (props?: BuiltTimeDom.HTMLAnchorElement, children?: HtmlChildrenMap['a']): HtmlTypesMap['a'] => hh('a', props, children)
    export const abbr = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['abbr']): HtmlTypesMap['abbr'] => hh('abbr', props, children)
    export const address = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['address']): HtmlTypesMap['address'] => hh('address', props, children)
    export const area = (props?: BuiltTimeDom.HTMLAreaElement): HtmlTypesMap['area'] => hh('area', props)
    export const article = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['article']): HtmlTypesMap['article'] => hh('article', props, children)
    export const aside = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['aside']): HtmlTypesMap['aside'] => hh('aside', props, children)
    export const audio = (props?: BuiltTimeDom.HTMLAudioElement, children?: HtmlChildrenMap['audio']): HtmlTypesMap['audio'] => hh('audio', props, children)
    export const b = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['b']): HtmlTypesMap['b'] => hh('b', props, children)
    export const base = (props?: BuiltTimeDom.HTMLBaseElement): HtmlTypesMap['base'] => hh('base', props)
    export const bdi = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['bdi']): HtmlTypesMap['bdi'] => hh('bdi', props, children)
    export const bdo = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['bdo']): HtmlTypesMap['bdo'] => hh('bdo', props, children)
    export const blockquote = (props?: BuiltTimeDom.HTMLQuoteElement, children?: HtmlChildrenMap['blockquote']): HtmlTypesMap['blockquote'] => hh('blockquote', props, children)
    export const body = (props?: BuiltTimeDom.HTMLBodyElement, children?: HtmlChildrenMap['body']): HtmlTypesMap['body'] => hh('body', props, children)
    export const br = (props?: BuiltTimeDom.HTMLBRElement): HtmlTypesMap['br'] => hh('br', props)
    export const button = (props?: BuiltTimeDom.HTMLButtonElement, children?: HtmlChildrenMap['button']): HtmlTypesMap['button'] => hh('button', props, children)
    export const canvas = (props?: BuiltTimeDom.HTMLCanvasElement, children?: HtmlChildrenMap['canvas']): HtmlTypesMap['canvas'] => hh('canvas', props, children)
    export const caption = (props?: BuiltTimeDom.HTMLTableCaptionElement, children?: HtmlChildrenMap['caption']): HtmlTypesMap['caption'] => hh('caption', props, children)
    export const cite = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['cite']): HtmlTypesMap['cite'] => hh('cite', props, children)
    export const code = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['code']): HtmlTypesMap['code'] => hh('code', props, children)
    export const col = (props?: BuiltTimeDom.HTMLTableColElement): HtmlTypesMap['col'] => hh('col', props)
    export const colgroup = (props?: BuiltTimeDom.HTMLTableColElement, children?: HtmlChildrenMap['colgroup']): HtmlTypesMap['colgroup'] => hh('colgroup', props, children)
    export const data = (props?: BuiltTimeDom.HTMLDataElement, children?: HtmlChildrenMap['data']): HtmlTypesMap['data'] => hh('data', props, children)
    export const datalist = (props?: BuiltTimeDom.HTMLDataListElement, children?: HtmlChildrenMap['datalist']): HtmlTypesMap['datalist'] => hh('datalist', props, children)
    export const dd = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['dd']): HtmlTypesMap['dd'] => hh('dd', props, children)
    export const del = (props?: BuiltTimeDom.HTMLModElement, children?: HtmlChildrenMap['del']): HtmlTypesMap['del'] => hh('del', props, children)
    export const details = (props?: BuiltTimeDom.HTMLDetailsElement, children?: HtmlChildrenMap['details']): HtmlTypesMap['details'] => hh('details', props, children)
    export const dfn = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['dfn']): HtmlTypesMap['dfn'] => hh('dfn', props, children)
    export const dialog = (props?: BuiltTimeDom.HTMLDialogElement, children?: HtmlChildrenMap['dialog']): HtmlTypesMap['dialog'] => hh('dialog', props, children)
    export const div = (props?: BuiltTimeDom.HTMLDivElement, children?: HtmlChildrenMap['div']): HtmlTypesMap['div'] => hh('div', props, children)
    export const dl = (props?: BuiltTimeDom.HTMLDListElement, children?: HtmlChildrenMap['dl']): HtmlTypesMap['dl'] => hh('dl', props, children)
    export const dt = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['dt']): HtmlTypesMap['dt'] => hh('dt', props, children)
    export const em = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['em']): HtmlTypesMap['em'] => hh('em', props, children)
    export const embed = (props?: BuiltTimeDom.HTMLEmbedElement): HtmlTypesMap['embed'] => hh('embed', props)
    export const fieldset = (props?: BuiltTimeDom.HTMLFieldSetElement, children?: HtmlChildrenMap['fieldset']): HtmlTypesMap['fieldset'] => hh('fieldset', props, children)
    export const figcaption = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['figcaption']): HtmlTypesMap['figcaption'] => hh('figcaption', props, children)
    export const figure = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['figure']): HtmlTypesMap['figure'] => hh('figure', props, children)
    export const footer = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['footer']): HtmlTypesMap['footer'] => hh('footer', props, children)
    export const form = (props?: BuiltTimeDom.HTMLFormElement, children?: HtmlChildrenMap['form']): HtmlTypesMap['form'] => hh('form', props, children)
    export const h1 = (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h1']): HtmlTypesMap['h1'] => hh('h1', props, children)
    export const h2 = (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h2']): HtmlTypesMap['h2'] => hh('h2', props, children)
    export const h3 = (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h3']): HtmlTypesMap['h3'] => hh('h3', props, children)
    export const h4 = (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h4']): HtmlTypesMap['h4'] => hh('h4', props, children)
    export const h5 = (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h5']): HtmlTypesMap['h5'] => hh('h5', props, children)
    export const h6 = (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h6']): HtmlTypesMap['h6'] => hh('h6', props, children)
    export const head = (props?: BuiltTimeDom.HTMLHeadElement, children?: HtmlChildrenMap['head']): HtmlTypesMap['head'] => hh('head', props, children)
    export const header = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['header']): HtmlTypesMap['header'] => hh('header', props, children)
    export const hr = (props?: BuiltTimeDom.HTMLHRElement): HtmlTypesMap['hr'] => hh('hr', props)
    export const html = (props?: BuiltTimeDom.HTMLHtmlElement, children?: HtmlChildrenMap['html']): HtmlTypesMap['html'] => hh('html', props, children)
    export const i = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['i']): HtmlTypesMap['i'] => hh('i', props, children)
    export const iframe = (props?: BuiltTimeDom.HTMLIFrameElement, children?: HtmlChildrenMap['iframe']): HtmlTypesMap['iframe'] => hh('iframe', props, children)
    export const img = (props?: BuiltTimeDom.HTMLImageElement): HtmlTypesMap['img'] => hh('img', props)
    export const input = (props?: BuiltTimeDom.HTMLInputElement): HtmlTypesMap['input'] => hh('input', props)
    export const ins = (props?: BuiltTimeDom.HTMLModElement, children?: HtmlChildrenMap['ins']): HtmlTypesMap['ins'] => hh('ins', props, children)
    export const kbd = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['kbd']): HtmlTypesMap['kbd'] => hh('kbd', props, children)
    export const label = (props?: BuiltTimeDom.HTMLLabelElement, children?: HtmlChildrenMap['label']): HtmlTypesMap['label'] => hh('label', props, children)
    export const legend = (props?: BuiltTimeDom.HTMLLegendElement, children?: HtmlChildrenMap['legend']): HtmlTypesMap['legend'] => hh('legend', props, children)
    export const li = (props?: BuiltTimeDom.HTMLLIElement, children?: HtmlChildrenMap['li']): HtmlTypesMap['li'] => hh('li', props, children)
    export const link = (props?: BuiltTimeDom.HTMLLinkElement): HtmlTypesMap['link'] => hh('link', props)
    export const main = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['main']): HtmlTypesMap['main'] => hh('main', props, children)
    export const map = (props?: BuiltTimeDom.HTMLMapElement, children?: HtmlChildrenMap['map']): HtmlTypesMap['map'] => hh('map', props, children)
    export const mark = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['mark']): HtmlTypesMap['mark'] => hh('mark', props, children)
    export const meta = (props?: BuiltTimeDom.HTMLMetaElement): HtmlTypesMap['meta'] => hh('meta', props)
    export const meter = (props?: BuiltTimeDom.HTMLMeterElement, children?: HtmlChildrenMap['meter']): HtmlTypesMap['meter'] => hh('meter', props, children)
    export const nav = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['nav']): HtmlTypesMap['nav'] => hh('nav', props, children)
    export const noscript = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['noscript']): HtmlTypesMap['noscript'] => hh('noscript', props, children)
    export const object = (props?: BuiltTimeDom.HTMLObjectElement, children?: HtmlChildrenMap['object']): HtmlTypesMap['object'] => hh('object', props, children)
    export const ol = (props?: BuiltTimeDom.HTMLOListElement, children?: HtmlChildrenMap['ol']): HtmlTypesMap['ol'] => hh('ol', props, children)
    export const optgroup = (props?: BuiltTimeDom.HTMLOptGroupElement, children?: HtmlChildrenMap['optgroup']): HtmlTypesMap['optgroup'] => hh('optgroup', props, children)
    export const option = (props?: BuiltTimeDom.HTMLOptionElement, children?: HtmlChildrenMap['option']): HtmlTypesMap['option'] => hh('option', props, children)
    export const output = (props?: BuiltTimeDom.HTMLOutputElement, children?: HtmlChildrenMap['output']): HtmlTypesMap['output'] => hh('output', props, children)
    export const p = (props?: BuiltTimeDom.HTMLParagraphElement, children?: HtmlChildrenMap['p']): HtmlTypesMap['p'] => hh('p', props, children)
    export const param = (props?: BuiltTimeDom.HTMLParamElement): HtmlTypesMap['param'] => hh('param', props)
    export const picture = (props?: BuiltTimeDom.HTMLPictureElement, children?: HtmlChildrenMap['picture']): HtmlTypesMap['picture'] => hh('picture', props, children)
    export const pre = (props?: BuiltTimeDom.HTMLPreElement, children?: HtmlChildrenMap['pre']): HtmlTypesMap['pre'] => hh('pre', props, children)
    export const progress = (props?: BuiltTimeDom.HTMLProgressElement, children?: HtmlChildrenMap['progress']): HtmlTypesMap['progress'] => hh('progress', props, children)
    export const q = (props?: BuiltTimeDom.HTMLQuoteElement, children?: HtmlChildrenMap['q']): HtmlTypesMap['q'] => hh('q', props, children)
    export const rb = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['rb']): HtmlTypesMap['rb'] => hh('rb', props, children)
    export const rp = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['rp']): HtmlTypesMap['rp'] => hh('rp', props, children)
    export const rt = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['rt']): HtmlTypesMap['rt'] => hh('rt', props, children)
    export const rtc = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['rtc']): HtmlTypesMap['rtc'] => hh('rtc', props, children)
    export const ruby = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['ruby']): HtmlTypesMap['ruby'] => hh('ruby', props, children)
    export const s = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['s']): HtmlTypesMap['s'] => hh('s', props, children)
    export const samp = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['samp']): HtmlTypesMap['samp'] => hh('samp', props, children)
    export const script = (props?: BuiltTimeDom.HTMLScriptElement, children?: HtmlChildrenMap['script']): HtmlTypesMap['script'] => hh('script', props, children)
    export const section = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['section']): HtmlTypesMap['section'] => hh('section', props, children)
    export const select = (props?: BuiltTimeDom.HTMLSelectElement, children?: HtmlChildrenMap['select']): HtmlTypesMap['select'] => hh('select', props, children)
    export const small = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['small']): HtmlTypesMap['small'] => hh('small', props, children)
    export const source = (props?: BuiltTimeDom.HTMLSourceElement): HtmlTypesMap['source'] => hh('source', props)
    export const span = (props?: BuiltTimeDom.HTMLSpanElement, children?: HtmlChildrenMap['span']): HtmlTypesMap['span'] => hh('span', props, children)
    export const strong = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['strong']): HtmlTypesMap['strong'] => hh('strong', props, children)
    export const style = (props?: BuiltTimeDom.HTMLStyleElement, children?: HtmlChildrenMap['style']): HtmlTypesMap['style'] => hh('style', props, children)
    export const sub = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['sub']): HtmlTypesMap['sub'] => hh('sub', props, children)
    export const summary = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['summary']): HtmlTypesMap['summary'] => hh('summary', props, children)
    export const sup = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['sup']): HtmlTypesMap['sup'] => hh('sup', props, children)
    export const table = (props?: BuiltTimeDom.HTMLTableElement, children?: HtmlChildrenMap['table']): HtmlTypesMap['table'] => hh('table', props, children)
    export const tbody = (props?: BuiltTimeDom.HTMLTableSectionElement, children?: HtmlChildrenMap['tbody']): HtmlTypesMap['tbody'] => hh('tbody', props, children)
    export const td = (props?: BuiltTimeDom.HTMLTableDataCellElement, children?: HtmlChildrenMap['td']): HtmlTypesMap['td'] => hh('td', props, children)
    export const template = (props?: BuiltTimeDom.HTMLTemplateElement, children?: HtmlChildrenMap['template']): HtmlTypesMap['template'] => hh('template', props, children)
    export const textarea = (props?: BuiltTimeDom.HTMLTextAreaElement, children?: HtmlChildrenMap['textarea']): HtmlTypesMap['textarea'] => hh('textarea', props, children)
    export const tfoot = (props?: BuiltTimeDom.HTMLTableSectionElement, children?: HtmlChildrenMap['tfoot']): HtmlTypesMap['tfoot'] => hh('tfoot', props, children)
    export const th = (props?: BuiltTimeDom.HTMLTableHeaderCellElement, children?: HtmlChildrenMap['th']): HtmlTypesMap['th'] => hh('th', props, children)
    export const thead = (props?: BuiltTimeDom.HTMLTableSectionElement, children?: HtmlChildrenMap['thead']): HtmlTypesMap['thead'] => hh('thead', props, children)
    export const time = (props?: BuiltTimeDom.HTMLTimeElement, children?: HtmlChildrenMap['time']): HtmlTypesMap['time'] => hh('time', props, children)
    export const title = (props?: BuiltTimeDom.HTMLTitleElement, children?: HtmlChildrenMap['title']): HtmlTypesMap['title'] => hh('title', props, children)
    export const tr = (props?: BuiltTimeDom.HTMLTableRowElement, children?: HtmlChildrenMap['tr']): HtmlTypesMap['tr'] => hh('tr', props, children)
    export const track = (props?: BuiltTimeDom.HTMLTrackElement): HtmlTypesMap['track'] => hh('track', props)
    export const u = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['u']): HtmlTypesMap['u'] => hh('u', props, children)
    export const ul = (props?: BuiltTimeDom.HTMLUListElement, children?: HtmlChildrenMap['ul']): HtmlTypesMap['ul'] => hh('ul', props, children)
    export const var_ = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['var']): HtmlTypesMap['var'] => hh('var', props, children)
    export const video = (props?: BuiltTimeDom.HTMLVideoElement, children?: HtmlChildrenMap['video']): HtmlTypesMap['video'] => hh('video', props, children)
    export const wbr = (props?: BuiltTimeDom.HTMLElement): HtmlTypesMap['wbr'] => hh('wbr', props)
}

/// Script-generated.

/**
 * Nice-to-remember aliases for all HTML element interfaces.
 */
export namespace h {
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
    export type Rb = HTMLElement
    export type Rp = HTMLElement
    export type Rt = HTMLElement
    export type Rtc = HTMLElement
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
}
