import {addChildren} from '../addChildren'
import {assignProperties} from '../assignProperties'
import {BuiltTimeDom} from '../BuiltTimeDom'
import {BuiltTimeHtmlTypesMap} from './BuiltTimeHtmlTypesMap'
import {HtmlTypesMap} from './HtmlTypesMap'
import {HtmlChildrenMap} from './HtmlChildrenMap'
// import {Props} from '../Props'

/**
 * Factory function for HTML elements.
 */
function _h<T extends keyof HtmlTypesMap>(tag: T, props?: BuiltTimeHtmlTypesMap[T], children?: HtmlChildrenMap[T]): HtmlTypesMap[T] {
    const elem = document.createElement(tag)
    if (props !== undefined) {
        assignProperties(elem, props)
    }
    if (children !== undefined) {
        addChildren(elem, children as (Element | string)[])
    }
    return elem
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
export const h = {
    a: (props?: BuiltTimeDom.HTMLAnchorElement, children?: HtmlChildrenMap['a']): HtmlTypesMap['a'] => _h('a', props, children),
    abbr: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['abbr']): HtmlTypesMap['abbr'] => _h('abbr', props, children),
    address: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['address']): HtmlTypesMap['address'] => _h('address', props, children),
    area: (props?: BuiltTimeDom.HTMLAreaElement): HtmlTypesMap['area'] => _h('area', props),
    article: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['article']): HtmlTypesMap['article'] => _h('article', props, children),
    aside: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['aside']): HtmlTypesMap['aside'] => _h('aside', props, children),
    audio: (props?: BuiltTimeDom.HTMLAudioElement, children?: HtmlChildrenMap['audio']): HtmlTypesMap['audio'] => _h('audio', props, children),
    b: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['b']): HtmlTypesMap['b'] => _h('b', props, children),
    base: (props?: BuiltTimeDom.HTMLBaseElement): HtmlTypesMap['base'] => _h('base', props),
    bdi: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['bdi']): HtmlTypesMap['bdi'] => _h('bdi', props, children),
    bdo: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['bdo']): HtmlTypesMap['bdo'] => _h('bdo', props, children),
    blockquote: (props?: BuiltTimeDom.HTMLQuoteElement, children?: HtmlChildrenMap['blockquote']): HtmlTypesMap['blockquote'] => _h('blockquote', props, children),
    body: (props?: BuiltTimeDom.HTMLBodyElement, children?: HtmlChildrenMap['body']): HtmlTypesMap['body'] => _h('body', props, children),
    br: (props?: BuiltTimeDom.HTMLBRElement): HtmlTypesMap['br'] => _h('br', props),
    button: (props?: BuiltTimeDom.HTMLButtonElement, children?: HtmlChildrenMap['button']): HtmlTypesMap['button'] => _h('button', props, children),
    canvas: (props?: BuiltTimeDom.HTMLCanvasElement, children?: HtmlChildrenMap['canvas']): HtmlTypesMap['canvas'] => _h('canvas', props, children),
    caption: (props?: BuiltTimeDom.HTMLTableCaptionElement, children?: HtmlChildrenMap['caption']): HtmlTypesMap['caption'] => _h('caption', props, children),
    cite: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['cite']): HtmlTypesMap['cite'] => _h('cite', props, children),
    code: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['code']): HtmlTypesMap['code'] => _h('code', props, children),
    col: (props?: BuiltTimeDom.HTMLTableColElement): HtmlTypesMap['col'] => _h('col', props),
    colgroup: (props?: BuiltTimeDom.HTMLTableColElement, children?: HtmlChildrenMap['colgroup']): HtmlTypesMap['colgroup'] => _h('colgroup', props, children),
    data: (props?: BuiltTimeDom.HTMLDataElement, children?: HtmlChildrenMap['data']): HtmlTypesMap['data'] => _h('data', props, children),
    datalist: (props?: BuiltTimeDom.HTMLDataListElement, children?: HtmlChildrenMap['datalist']): HtmlTypesMap['datalist'] => _h('datalist', props, children),
    dd: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['dd']): HtmlTypesMap['dd'] => _h('dd', props, children),
    del: (props?: BuiltTimeDom.HTMLModElement, children?: HtmlChildrenMap['del']): HtmlTypesMap['del'] => _h('del', props, children),
    details: (props?: BuiltTimeDom.HTMLDetailsElement, children?: HtmlChildrenMap['details']): HtmlTypesMap['details'] => _h('details', props, children),
    dfn: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['dfn']): HtmlTypesMap['dfn'] => _h('dfn', props, children),
    dialog: (props?: BuiltTimeDom.HTMLDialogElement, children?: HtmlChildrenMap['dialog']): HtmlTypesMap['dialog'] => _h('dialog', props, children),
    div: (props?: BuiltTimeDom.HTMLDivElement, children?: HtmlChildrenMap['div']): HtmlTypesMap['div'] => _h('div', props, children),
    // div: (props?: Props<HTMLDivElement>, children?: HtmlChildrenMap['div']): HtmlTypesMap['div'] => _h('div', props as any, children),
    dl: (props?: BuiltTimeDom.HTMLDListElement, children?: HtmlChildrenMap['dl']): HtmlTypesMap['dl'] => _h('dl', props, children),
    dt: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['dt']): HtmlTypesMap['dt'] => _h('dt', props, children),
    em: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['em']): HtmlTypesMap['em'] => _h('em', props, children),
    embed: (props?: BuiltTimeDom.HTMLEmbedElement): HtmlTypesMap['embed'] => _h('embed', props),
    fieldset: (props?: BuiltTimeDom.HTMLFieldSetElement, children?: HtmlChildrenMap['fieldset']): HtmlTypesMap['fieldset'] => _h('fieldset', props, children),
    figcaption: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['figcaption']): HtmlTypesMap['figcaption'] => _h('figcaption', props, children),
    figure: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['figure']): HtmlTypesMap['figure'] => _h('figure', props, children),
    footer: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['footer']): HtmlTypesMap['footer'] => _h('footer', props, children),
    form: (props?: BuiltTimeDom.HTMLFormElement, children?: HtmlChildrenMap['form']): HtmlTypesMap['form'] => _h('form', props, children),
    h1: (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h1']): HtmlTypesMap['h1'] => _h('h1', props, children),
    h2: (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h2']): HtmlTypesMap['h2'] => _h('h2', props, children),
    h3: (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h3']): HtmlTypesMap['h3'] => _h('h3', props, children),
    h4: (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h4']): HtmlTypesMap['h4'] => _h('h4', props, children),
    h5: (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h5']): HtmlTypesMap['h5'] => _h('h5', props, children),
    h6: (props?: BuiltTimeDom.HTMLHeadingElement, children?: HtmlChildrenMap['h6']): HtmlTypesMap['h6'] => _h('h6', props, children),
    head: (props?: BuiltTimeDom.HTMLHeadElement, children?: HtmlChildrenMap['head']): HtmlTypesMap['head'] => _h('head', props, children),
    header: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['header']): HtmlTypesMap['header'] => _h('header', props, children),
    hr: (props?: BuiltTimeDom.HTMLHRElement): HtmlTypesMap['hr'] => _h('hr', props),
    html: (props?: BuiltTimeDom.HTMLHtmlElement, children?: HtmlChildrenMap['html']): HtmlTypesMap['html'] => _h('html', props, children),
    i: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['i']): HtmlTypesMap['i'] => _h('i', props, children),
    iframe: (props?: BuiltTimeDom.HTMLIFrameElement, children?: HtmlChildrenMap['iframe']): HtmlTypesMap['iframe'] => _h('iframe', props, children),
    img: (props?: BuiltTimeDom.HTMLImageElement): HtmlTypesMap['img'] => _h('img', props),
    input: (props?: BuiltTimeDom.HTMLInputElement): HtmlTypesMap['input'] => _h('input', props),
    ins: (props?: BuiltTimeDom.HTMLModElement, children?: HtmlChildrenMap['ins']): HtmlTypesMap['ins'] => _h('ins', props, children),
    kbd: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['kbd']): HtmlTypesMap['kbd'] => _h('kbd', props, children),
    label: (props?: BuiltTimeDom.HTMLLabelElement, children?: HtmlChildrenMap['label']): HtmlTypesMap['label'] => _h('label', props, children),
    legend: (props?: BuiltTimeDom.HTMLLegendElement, children?: HtmlChildrenMap['legend']): HtmlTypesMap['legend'] => _h('legend', props, children),
    li: (props?: BuiltTimeDom.HTMLLIElement, children?: HtmlChildrenMap['li']): HtmlTypesMap['li'] => _h('li', props, children),
    link: (props?: BuiltTimeDom.HTMLLinkElement): HtmlTypesMap['link'] => _h('link', props),
    main: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['main']): HtmlTypesMap['main'] => _h('main', props, children),
    map: (props?: BuiltTimeDom.HTMLMapElement, children?: HtmlChildrenMap['map']): HtmlTypesMap['map'] => _h('map', props, children),
    mark: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['mark']): HtmlTypesMap['mark'] => _h('mark', props, children),
    meta: (props?: BuiltTimeDom.HTMLMetaElement): HtmlTypesMap['meta'] => _h('meta', props),
    meter: (props?: BuiltTimeDom.HTMLMeterElement, children?: HtmlChildrenMap['meter']): HtmlTypesMap['meter'] => _h('meter', props, children),
    nav: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['nav']): HtmlTypesMap['nav'] => _h('nav', props, children),
    noscript: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['noscript']): HtmlTypesMap['noscript'] => _h('noscript', props, children),
    object: (props?: BuiltTimeDom.HTMLObjectElement, children?: HtmlChildrenMap['object']): HtmlTypesMap['object'] => _h('object', props, children),
    ol: (props?: BuiltTimeDom.HTMLOListElement, children?: HtmlChildrenMap['ol']): HtmlTypesMap['ol'] => _h('ol', props, children),
    optgroup: (props?: BuiltTimeDom.HTMLOptGroupElement, children?: HtmlChildrenMap['optgroup']): HtmlTypesMap['optgroup'] => _h('optgroup', props, children),
    option: (props?: BuiltTimeDom.HTMLOptionElement, children?: HtmlChildrenMap['option']): HtmlTypesMap['option'] => _h('option', props, children),
    output: (props?: BuiltTimeDom.HTMLOutputElement, children?: HtmlChildrenMap['output']): HtmlTypesMap['output'] => _h('output', props, children),
    p: (props?: BuiltTimeDom.HTMLParagraphElement, children?: HtmlChildrenMap['p']): HtmlTypesMap['p'] => _h('p', props, children),
    param: (props?: BuiltTimeDom.HTMLParamElement): HtmlTypesMap['param'] => _h('param', props),
    picture: (props?: BuiltTimeDom.HTMLPictureElement, children?: HtmlChildrenMap['picture']): HtmlTypesMap['picture'] => _h('picture', props, children),
    pre: (props?: BuiltTimeDom.HTMLPreElement, children?: HtmlChildrenMap['pre']): HtmlTypesMap['pre'] => _h('pre', props, children),
    progress: (props?: BuiltTimeDom.HTMLProgressElement, children?: HtmlChildrenMap['progress']): HtmlTypesMap['progress'] => _h('progress', props, children),
    q: (props?: BuiltTimeDom.HTMLQuoteElement, children?: HtmlChildrenMap['q']): HtmlTypesMap['q'] => _h('q', props, children),
    rb: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['rb']): HtmlTypesMap['rb'] => _h('rb', props, children),
    rp: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['rp']): HtmlTypesMap['rp'] => _h('rp', props, children),
    rt: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['rt']): HtmlTypesMap['rt'] => _h('rt', props, children),
    rtc: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['rtc']): HtmlTypesMap['rtc'] => _h('rtc', props, children),
    ruby: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['ruby']): HtmlTypesMap['ruby'] => _h('ruby', props, children),
    s: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['s']): HtmlTypesMap['s'] => _h('s', props, children),
    samp: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['samp']): HtmlTypesMap['samp'] => _h('samp', props, children),
    script: (props?: BuiltTimeDom.HTMLScriptElement, children?: HtmlChildrenMap['script']): HtmlTypesMap['script'] => _h('script', props, children),
    section: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['section']): HtmlTypesMap['section'] => _h('section', props, children),
    select: (props?: BuiltTimeDom.HTMLSelectElement, children?: HtmlChildrenMap['select']): HtmlTypesMap['select'] => _h('select', props, children),
    small: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['small']): HtmlTypesMap['small'] => _h('small', props, children),
    source: (props?: BuiltTimeDom.HTMLSourceElement): HtmlTypesMap['source'] => _h('source', props),
    span: (props?: BuiltTimeDom.HTMLSpanElement, children?: HtmlChildrenMap['span']): HtmlTypesMap['span'] => _h('span', props, children),
    strong: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['strong']): HtmlTypesMap['strong'] => _h('strong', props, children),
    style: (props?: BuiltTimeDom.HTMLStyleElement, children?: HtmlChildrenMap['style']): HtmlTypesMap['style'] => _h('style', props, children),
    sub: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['sub']): HtmlTypesMap['sub'] => _h('sub', props, children),
    summary: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['summary']): HtmlTypesMap['summary'] => _h('summary', props, children),
    sup: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['sup']): HtmlTypesMap['sup'] => _h('sup', props, children),
    table: (props?: BuiltTimeDom.HTMLTableElement, children?: HtmlChildrenMap['table']): HtmlTypesMap['table'] => _h('table', props, children),
    tbody: (props?: BuiltTimeDom.HTMLTableSectionElement, children?: HtmlChildrenMap['tbody']): HtmlTypesMap['tbody'] => _h('tbody', props, children),
    td: (props?: BuiltTimeDom.HTMLTableDataCellElement, children?: HtmlChildrenMap['td']): HtmlTypesMap['td'] => _h('td', props, children),
    template: (props?: BuiltTimeDom.HTMLTemplateElement, children?: HtmlChildrenMap['template']): HtmlTypesMap['template'] => _h('template', props, children),
    textarea: (props?: BuiltTimeDom.HTMLTextAreaElement, children?: HtmlChildrenMap['textarea']): HtmlTypesMap['textarea'] => _h('textarea', props, children),
    tfoot: (props?: BuiltTimeDom.HTMLTableSectionElement, children?: HtmlChildrenMap['tfoot']): HtmlTypesMap['tfoot'] => _h('tfoot', props, children),
    th: (props?: BuiltTimeDom.HTMLTableHeaderCellElement, children?: HtmlChildrenMap['th']): HtmlTypesMap['th'] => _h('th', props, children),
    thead: (props?: BuiltTimeDom.HTMLTableSectionElement, children?: HtmlChildrenMap['thead']): HtmlTypesMap['thead'] => _h('thead', props, children),
    time: (props?: BuiltTimeDom.HTMLTimeElement, children?: HtmlChildrenMap['time']): HtmlTypesMap['time'] => _h('time', props, children),
    title: (props?: BuiltTimeDom.HTMLTitleElement, children?: HtmlChildrenMap['title']): HtmlTypesMap['title'] => _h('title', props, children),
    tr: (props?: BuiltTimeDom.HTMLTableRowElement, children?: HtmlChildrenMap['tr']): HtmlTypesMap['tr'] => _h('tr', props, children),
    track: (props?: BuiltTimeDom.HTMLTrackElement): HtmlTypesMap['track'] => _h('track', props),
    u: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['u']): HtmlTypesMap['u'] => _h('u', props, children),
    ul: (props?: BuiltTimeDom.HTMLUListElement, children?: HtmlChildrenMap['ul']): HtmlTypesMap['ul'] => _h('ul', props, children),
    var: (props?: BuiltTimeDom.HTMLElement, children?: HtmlChildrenMap['var']): HtmlTypesMap['var'] => _h('var', props, children),
    video: (props?: BuiltTimeDom.HTMLVideoElement, children?: HtmlChildrenMap['video']): HtmlTypesMap['video'] => _h('video', props, children),
    wbr: (props?: BuiltTimeDom.HTMLElement): HtmlTypesMap['wbr'] => _h('wbr', props),
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
