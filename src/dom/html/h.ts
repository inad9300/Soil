import {addChildren} from '../addChildren'
import {assignProperties} from '../assignProperties'
import {BuiltTimeDom} from '../BuiltTimeDom'
import {BuiltTimeHtmlTypesMap} from './BuiltTimeHtmlTypesMap'
import {DeepPartial} from '../../extra/DeepPartial'
import {HtmlChildrenMap} from './HtmlChildrenMap'
import {HtmlTypesMap} from './HtmlTypesMap'

export namespace h {

    /**
     * Helper function to concisely create instances of any HTML element,
     * specially custom ones (thus the name), since for native elements there
     * are specialized versions of this function.
     */
    export function x<T extends keyof HtmlTypesMap>(tag: T, props?: DeepPartial<BuiltTimeHtmlTypesMap[T]>, children?: HtmlChildrenMap[T]): HtmlTypesMap[T]
    export function x(tag: string, props?: DeepPartial<BuiltTimeDom.HTMLElement>, children?: (HTMLElement | SVGSVGElement | string)[]): HTMLElement
    export function x(tag: string, props?: DeepPartial<BuiltTimeDom.HTMLElement>, children?: (HTMLElement | SVGSVGElement | string)[]) {
        const elem = document.createElement(tag)
        if (props !== undefined) {
            assignProperties(elem, props)
        }
        if (children !== undefined) {
            addChildren(elem, children)
        }
        return elem
    }
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
	export const a = (props?: BuiltTimeDom.HTMLAnchorElement, children?: HtmlChildrenMap['a']): HtmlTypesMap['a'] => x('a', props, children)
	export const abbr = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['abbr']): HtmlTypesMap['abbr'] => x('abbr', props, children)
	export const address = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['address']): HtmlTypesMap['address'] => x('address', props, children)
	export const area = (props?: BuiltTimeDom.HTMLAreaElement): HtmlTypesMap['area'] => x('area', props)
	export const article = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['article']): HtmlTypesMap['article'] => x('article', props, children)
	export const aside = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['aside']): HtmlTypesMap['aside'] => x('aside', props, children)
	export const audio = (props?: BuiltTimeDom.HTMLAudioElement, children?: HtmlChildrenMap['audio']): HtmlTypesMap['audio'] => x('audio', props, children)
	export const b = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['b']): HtmlTypesMap['b'] => x('b', props, children)
	export const base = (props?: BuiltTimeDom.HTMLBaseElement): HtmlTypesMap['base'] => x('base', props)
	export const bdi = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['bdi']): HtmlTypesMap['bdi'] => x('bdi', props, children)
	export const bdo = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['bdo']): HtmlTypesMap['bdo'] => x('bdo', props, children)
	export const blockquote = (props?: BuiltTimeDom.HTMLQuoteElement, children?: HtmlChildrenMap['blockquote']): HtmlTypesMap['blockquote'] => x('blockquote', props, children)
	export const body = (props?: BuiltTimeDom.HTMLBodyElement, children?: HtmlChildrenMap['body']): HtmlTypesMap['body'] => x('body', props, children)
	export const br = (props?: BuiltTimeDom.HTMLBRElement): HtmlTypesMap['br'] => x('br', props)
	export const button = (props?: BuiltTimeDom.HTMLButtonElement, children?: HtmlChildrenMap['button']): HtmlTypesMap['button'] => x('button', props, children)
	export const canvas = (props?: BuiltTimeDom.HTMLCanvasElement, children?: HtmlChildrenMap['canvas']): HtmlTypesMap['canvas'] => x('canvas', props, children)
	export const caption = (props?: BuiltTimeDom.HTMLTableCaptionElement, children?: HtmlChildrenMap['caption']): HtmlTypesMap['caption'] => x('caption', props, children)
	export const cite = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['cite']): HtmlTypesMap['cite'] => x('cite', props, children)
	export const code = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['code']): HtmlTypesMap['code'] => x('code', props, children)
	export const col = (props?: BuiltTimeDom.HTMLTableColElement): HtmlTypesMap['col'] => x('col', props)
	export const colgroup = (props?: BuiltTimeDom.HTMLTableColElement, children?: HtmlChildrenMap['colgroup']): HtmlTypesMap['colgroup'] => x('colgroup', props, children)
	export const data = (props?: BuiltTimeDom.HTMLDataElement, children?: HtmlChildrenMap['data']): HtmlTypesMap['data'] => x('data', props, children)
	export const datalist = (props?: BuiltTimeDom.HTMLDataListElement, children?: HtmlChildrenMap['datalist']): HtmlTypesMap['datalist'] => x('datalist', props, children)
	export const dd = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['dd']): HtmlTypesMap['dd'] => x('dd', props, children)
	export const del = (props?: BuiltTimeDom.HTMLModElement, children?: HtmlChildrenMap['del']): HtmlTypesMap['del'] => x('del', props, children)
	export const details = (props?: BuiltTimeDom.HTMLDetailsElement, children?: HtmlChildrenMap['details']): HtmlTypesMap['details'] => x('details', props, children)
	export const dfn = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['dfn']): HtmlTypesMap['dfn'] => x('dfn', props, children)
	export const dialog = (props?: BuiltTimeDom.HTMLDialogElement, children?: HtmlChildrenMap['dialog']): HtmlTypesMap['dialog'] => x('dialog', props, children)
	export const div = (props?: BuiltTimeDom.HTMLDivElement, children?: HtmlChildrenMap['div']): HtmlTypesMap['div'] => x('div', props, children)
	export const dl = (props?: BuiltTimeDom.HTMLDListElement, children?: HtmlChildrenMap['dl']): HtmlTypesMap['dl'] => x('dl', props, children)
	export const dt = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['dt']): HtmlTypesMap['dt'] => x('dt', props, children)
	export const em = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['em']): HtmlTypesMap['em'] => x('em', props, children)
	export const embed = (props?: BuiltTimeDom.HTMLEmbedElement): HtmlTypesMap['embed'] => x('embed', props)
	export const fieldset = (props?: BuiltTimeDom.HTMLFieldSetElement, children?: HtmlChildrenMap['fieldset']): HtmlTypesMap['fieldset'] => x('fieldset', props, children)
	export const figcaption = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['figcaption']): HtmlTypesMap['figcaption'] => x('figcaption', props, children)
	export const figure = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['figure']): HtmlTypesMap['figure'] => x('figure', props, children)
	export const footer = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['footer']): HtmlTypesMap['footer'] => x('footer', props, children)
	export const form = (props?: BuiltTimeDom.HTMLFormElement, children?: HtmlChildrenMap['form']): HtmlTypesMap['form'] => x('form', props, children)
	export const h1 = (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h1']): HtmlTypesMap['h1'] => x('h1', props, children)
	export const h2 = (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h2']): HtmlTypesMap['h2'] => x('h2', props, children)
	export const h3 = (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h3']): HtmlTypesMap['h3'] => x('h3', props, children)
	export const h4 = (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h4']): HtmlTypesMap['h4'] => x('h4', props, children)
	export const h5 = (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h5']): HtmlTypesMap['h5'] => x('h5', props, children)
	export const h6 = (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h6']): HtmlTypesMap['h6'] => x('h6', props, children)
	export const head = (props?: BuiltTimeDom.HTMLHeadElement, children?: HtmlChildrenMap['head']): HtmlTypesMap['head'] => x('head', props, children)
	export const header = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['header']): HtmlTypesMap['header'] => x('header', props, children)
	export const hr = (props?: BuiltTimeDom.HTMLHRElement): HtmlTypesMap['hr'] => x('hr', props)
	export const html = (props?: BuiltTimeDom.HTMLHtmlElement, children?: HtmlChildrenMap['html']): HtmlTypesMap['html'] => x('html', props, children)
	export const i = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['i']): HtmlTypesMap['i'] => x('i', props, children)
	export const iframe = (props?: BuiltTimeDom.HTMLIFrameElement, children?: HtmlChildrenMap['iframe']): HtmlTypesMap['iframe'] => x('iframe', props, children)
	export const img = (props?: BuiltTimeDom.HTMLImageElement): HtmlTypesMap['img'] => x('img', props)
	export const input = (props?: BuiltTimeDom.HTMLInputElement): HtmlTypesMap['input'] => x('input', props)
	export const ins = (props?: BuiltTimeDom.HTMLModElement, children?: HtmlChildrenMap['ins']): HtmlTypesMap['ins'] => x('ins', props, children)
	export const kbd = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['kbd']): HtmlTypesMap['kbd'] => x('kbd', props, children)
	export const label = (props?: BuiltTimeDom.HTMLLabelElement, children?: HtmlChildrenMap['label']): HtmlTypesMap['label'] => x('label', props, children)
	export const legend = (props?: BuiltTimeDom.HTMLLegendElement, children?: HtmlChildrenMap['legend']): HtmlTypesMap['legend'] => x('legend', props, children)
	export const li = (props?: BuiltTimeDom.HTMLLIElement, children?: HtmlChildrenMap['li']): HtmlTypesMap['li'] => x('li', props, children)
	export const link = (props?: BuiltTimeDom.HTMLLinkElement): HtmlTypesMap['link'] => x('link', props)
	export const main = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['main']): HtmlTypesMap['main'] => x('main', props, children)
	export const map = (props?: BuiltTimeDom.HTMLMapElement, children?: HtmlChildrenMap['map']): HtmlTypesMap['map'] => x('map', props, children)
	export const mark = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['mark']): HtmlTypesMap['mark'] => x('mark', props, children)
	export const meta = (props?: BuiltTimeDom.HTMLMetaElement): HtmlTypesMap['meta'] => x('meta', props)
	export const meter = (props?: BuiltTimeDom.HTMLMeterElement, children?: HtmlChildrenMap['meter']): HtmlTypesMap['meter'] => x('meter', props, children)
	export const nav = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['nav']): HtmlTypesMap['nav'] => x('nav', props, children)
	export const noscript = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['noscript']): HtmlTypesMap['noscript'] => x('noscript', props, children)
	export const object = (props?: BuiltTimeDom.HTMLObjectElement, children?: HtmlChildrenMap['object']): HtmlTypesMap['object'] => x('object', props, children)
	export const ol = (props?: BuiltTimeDom.HTMLOListElement, children?: HtmlChildrenMap['ol']): HtmlTypesMap['ol'] => x('ol', props, children)
	export const optgroup = (props?: BuiltTimeDom.HTMLOptGroupElement, children?: HtmlChildrenMap['optgroup']): HtmlTypesMap['optgroup'] => x('optgroup', props, children)
	export const option = (props?: BuiltTimeDom.HTMLOptionElement, children?: HtmlChildrenMap['option']): HtmlTypesMap['option'] => x('option', props, children)
	export const output = (props?: BuiltTimeDom.HTMLOutputElement, children?: HtmlChildrenMap['output']): HtmlTypesMap['output'] => x('output', props, children)
	export const p = (props?: BuiltTimeDom.HTMLParagraphElement, children?: HtmlChildrenMap['p']): HtmlTypesMap['p'] => x('p', props, children)
	export const param = (props?: BuiltTimeDom.HTMLParamElement): HtmlTypesMap['param'] => x('param', props)
	export const picture = (props?: BuiltTimeDom.HTMLPictureElement, children?: HtmlChildrenMap['picture']): HtmlTypesMap['picture'] => x('picture', props, children)
	export const pre = (props?: BuiltTimeDom.HTMLPreElement, children?: HtmlChildrenMap['pre']): HtmlTypesMap['pre'] => x('pre', props, children)
	export const progress = (props?: BuiltTimeDom.HTMLProgressElement, children?: HtmlChildrenMap['progress']): HtmlTypesMap['progress'] => x('progress', props, children)
	export const q = (props?: BuiltTimeDom.HTMLQuoteElement, children?: HtmlChildrenMap['q']): HtmlTypesMap['q'] => x('q', props, children)
	export const rb = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['rb']): HtmlTypesMap['rb'] => x('rb', props, children)
	export const rp = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['rp']): HtmlTypesMap['rp'] => x('rp', props, children)
	export const rt = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['rt']): HtmlTypesMap['rt'] => x('rt', props, children)
	export const rtc = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['rtc']): HtmlTypesMap['rtc'] => x('rtc', props, children)
	export const ruby = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['ruby']): HtmlTypesMap['ruby'] => x('ruby', props, children)
	export const s = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['s']): HtmlTypesMap['s'] => x('s', props, children)
	export const samp = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['samp']): HtmlTypesMap['samp'] => x('samp', props, children)
	export const script = (props?: BuiltTimeDom.HTMLScriptElement, children?: HtmlChildrenMap['script']): HtmlTypesMap['script'] => x('script', props, children)
	export const section = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['section']): HtmlTypesMap['section'] => x('section', props, children)
	export const select = (props?: BuiltTimeDom.HTMLSelectElement, children?: HtmlChildrenMap['select']): HtmlTypesMap['select'] => x('select', props, children)
	export const small = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['small']): HtmlTypesMap['small'] => x('small', props, children)
	export const source = (props?: BuiltTimeDom.HTMLSourceElement): HtmlTypesMap['source'] => x('source', props)
	export const span = (props?: BuiltTimeDom.HTMLSpanElement, children?: HtmlChildrenMap['span']): HtmlTypesMap['span'] => x('span', props, children)
	export const strong = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['strong']): HtmlTypesMap['strong'] => x('strong', props, children)
	export const style = (props?: BuiltTimeDom.HTMLStyleElement, children?: HtmlChildrenMap['style']): HtmlTypesMap['style'] => x('style', props, children)
	export const sub = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['sub']): HtmlTypesMap['sub'] => x('sub', props, children)
	export const summary = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['summary']): HtmlTypesMap['summary'] => x('summary', props, children)
	export const sup = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['sup']): HtmlTypesMap['sup'] => x('sup', props, children)
	export const table = (props?: BuiltTimeDom.HTMLTableElement, children?: HtmlChildrenMap['table']): HtmlTypesMap['table'] => x('table', props, children)
	export const tbody = (props?: BuiltTimeDom.HTMLTableSectionElement, children?: HtmlChildrenMap['tbody']): HtmlTypesMap['tbody'] => x('tbody', props, children)
	export const td = (props?: BuiltTimeDom.HTMLTableDataCellElement, children?: HtmlChildrenMap['td']): HtmlTypesMap['td'] => x('td', props, children)
	export const template = (props?: BuiltTimeDom.HTMLTemplateElement, children?: HtmlChildrenMap['template']): HtmlTypesMap['template'] => x('template', props, children)
	export const textarea = (props?: BuiltTimeDom.HTMLTextAreaElement, children?: HtmlChildrenMap['textarea']): HtmlTypesMap['textarea'] => x('textarea', props, children)
	export const tfoot = (props?: BuiltTimeDom.HTMLTableSectionElement, children?: HtmlChildrenMap['tfoot']): HtmlTypesMap['tfoot'] => x('tfoot', props, children)
	export const th = (props?: BuiltTimeDom.HTMLTableHeaderCellElement, children?: HtmlChildrenMap['th']): HtmlTypesMap['th'] => x('th', props, children)
	export const thead = (props?: BuiltTimeDom.HTMLTableSectionElement, children?: HtmlChildrenMap['thead']): HtmlTypesMap['thead'] => x('thead', props, children)
	export const time = (props?: BuiltTimeDom.HTMLTimeElement, children?: HtmlChildrenMap['time']): HtmlTypesMap['time'] => x('time', props, children)
	export const title = (props?: BuiltTimeDom.HTMLTitleElement, children?: HtmlChildrenMap['title']): HtmlTypesMap['title'] => x('title', props, children)
	export const tr = (props?: BuiltTimeDom.HTMLTableRowElement, children?: HtmlChildrenMap['tr']): HtmlTypesMap['tr'] => x('tr', props, children)
	export const track = (props?: BuiltTimeDom.HTMLTrackElement): HtmlTypesMap['track'] => x('track', props)
	export const u = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['u']): HtmlTypesMap['u'] => x('u', props, children)
	export const ul = (props?: BuiltTimeDom.HTMLUListElement, children?: HtmlChildrenMap['ul']): HtmlTypesMap['ul'] => x('ul', props, children)
	export const var_ = (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['var']): HtmlTypesMap['var'] => x('var', props, children)
	export const video = (props?: BuiltTimeDom.HTMLVideoElement, children?: HtmlChildrenMap['video']): HtmlTypesMap['video'] => x('video', props, children)
	export const wbr = (props?: BuiltTimeDom.HTMLElement): HtmlTypesMap['wbr'] => x('wbr', props)
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
