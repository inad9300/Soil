import {addChildren} from '../addChildren'
import {assignProps} from '../assignProps'
import {HTMLElementChildrenMap} from './HTMLElementChildrenMap'
import {Props} from '../Props'

/**
 * Factory function for HTML elements.
 */
function html<T extends keyof HTMLElementTagNameMap>(tag: T) {
    return (props?: Props<HTMLElementTagNameMap[T]>, children?: HTMLElementChildrenMap[T]): HTMLElementTagNameMap[T] => {
        const elem = document.createElement(tag)
        if (props !== undefined) {
            assignProps(elem, props)
        }
        if (children !== undefined) {
            addChildren(elem, children)
        }
        return elem
    }
}

type H = {
    [T in keyof HTMLElementTagNameMap]:
        (props?: Props<HTMLElementTagNameMap[T]>, children?: HTMLElementChildrenMap[T]) => HTMLElementTagNameMap[T]
}

/**
 * Helpers to facilitate the concise creation of any HTML element.
 *
 * NOTE The following functions silently depend on the `document` variable
 * being globally available. Therefore, unit tests of components that use them
 * must be run inside a browser, or must expose `document` globally, e.g.
 * through PhantomJS or jsdom.
 */
export const h: H = {
    a: html('a'),
    abbr: html('abbr'),
    address: html('address'),
    area: html('area'),
    article: html('article'),
    aside: html('aside'),
    audio: html('audio'),
    b: html('b'),
    base: html('base'),
    bdi: html('bdi'),
    bdo: html('bdo'),
    blockquote: html('blockquote'),
    body: html('body'),
    br: html('br'),
    button: html('button'),
    canvas: html('canvas'),
    caption: html('caption'),
    cite: html('cite'),
    code: html('code'),
    col: html('col'),
    colgroup: html('colgroup'),
    data: html('data'),
    datalist: html('datalist'),
    dd: html('dd'),
    del: html('del'),
    details: html('details'),
    dfn: html('dfn'),
    dialog: html('dialog'),
    div: html('div'),
    dl: html('dl'),
    dt: html('dt'),
    em: html('em'),
    embed: html('embed'),
    fieldset: html('fieldset'),
    figcaption: html('figcaption'),
    figure: html('figure'),
    footer: html('footer'),
    form: html('form'),
    h1: html('h1'),
    h2: html('h2'),
    h3: html('h3'),
    h4: html('h4'),
    h5: html('h5'),
    h6: html('h6'),
    head: html('head'),
    header: html('header'),
    hr: html('hr'),
    html: html('html'),
    i: html('i'),
    iframe: html('iframe'),
    img: html('img'),
    input: html('input'),
    ins: html('ins'),
    kbd: html('kbd'),
    label: html('label'),
    legend: html('legend'),
    li: html('li'),
    link: html('link'),
    main: html('main'),
    map: html('map'),
    mark: html('mark'),
    meta: html('meta'),
    meter: html('meter'),
    nav: html('nav'),
    noscript: html('noscript'),
    object: html('object'),
    ol: html('ol'),
    optgroup: html('optgroup'),
    option: html('option'),
    output: html('output'),
    p: html('p'),
    param: html('param'),
    picture: html('picture'),
    pre: html('pre'),
    progress: html('progress'),
    q: html('q'),
    rb: html('rb'),
    rp: html('rp'),
    rt: html('rt'),
    rtc: html('rtc'),
    ruby: html('ruby'),
    s: html('s'),
    samp: html('samp'),
    script: html('script'),
    section: html('section'),
    select: html('select'),
    small: html('small'),
    source: html('source'),
    span: html('span'),
    strong: html('strong'),
    style: html('style'),
    sub: html('sub'),
    summary: html('summary'),
    sup: html('sup'),
    table: html('table'),
    tbody: html('tbody'),
    td: html('td'),
    template: html('template'),
    textarea: html('textarea'),
    tfoot: html('tfoot'),
    th: html('th'),
    thead: html('thead'),
    time: html('time'),
    title: html('title'),
    tr: html('tr'),
    track: html('track'),
    u: html('u'),
    ul: html('ul'),
    var: html('var'),
    video: html('video'),
    wbr: html('wbr'),
}

/**
 * Nice-to-remember aliases for all HTML element interfaces.
 */
export namespace h {
    export type A = HTMLElementTagNameMap['a']
    export type Abbr = HTMLElementTagNameMap['abbr']
    export type Address = HTMLElementTagNameMap['address']
    export type Area = HTMLElementTagNameMap['area']
    export type Article = HTMLElementTagNameMap['article']
    export type Aside = HTMLElementTagNameMap['aside']
    export type Audio = HTMLElementTagNameMap['audio']
    export type B = HTMLElementTagNameMap['b']
    export type Base = HTMLElementTagNameMap['base']
    export type Bdi = HTMLElementTagNameMap['bdi']
    export type Bdo = HTMLElementTagNameMap['bdo']
    export type Blockquote = HTMLElementTagNameMap['blockquote']
    export type Body = HTMLElementTagNameMap['body']
    export type Br = HTMLElementTagNameMap['br']
    export type Button = HTMLElementTagNameMap['button']
    export type Canvas = HTMLElementTagNameMap['canvas']
    export type Caption = HTMLElementTagNameMap['caption']
    export type Cite = HTMLElementTagNameMap['cite']
    export type Code = HTMLElementTagNameMap['code']
    export type Col = HTMLElementTagNameMap['col']
    export type Colgroup = HTMLElementTagNameMap['colgroup']
    export type Data = HTMLElementTagNameMap['data']
    export type Datalist = HTMLElementTagNameMap['datalist']
    export type Dd = HTMLElementTagNameMap['dd']
    export type Del = HTMLElementTagNameMap['del']
    export type Details = HTMLElementTagNameMap['details']
    export type Dfn = HTMLElementTagNameMap['dfn']
    export type Dialog = HTMLElementTagNameMap['dialog']
    export type Div = HTMLElementTagNameMap['div']
    export type Dl = HTMLElementTagNameMap['dl']
    export type Dt = HTMLElementTagNameMap['dt']
    export type Em = HTMLElementTagNameMap['em']
    export type Embed = HTMLElementTagNameMap['embed']
    export type Fieldset = HTMLElementTagNameMap['fieldset']
    export type Figcaption = HTMLElementTagNameMap['figcaption']
    export type Figure = HTMLElementTagNameMap['figure']
    export type Footer = HTMLElementTagNameMap['footer']
    export type Form = HTMLElementTagNameMap['form']
    export type H1 = HTMLElementTagNameMap['h1']
    export type H2 = HTMLElementTagNameMap['h2']
    export type H3 = HTMLElementTagNameMap['h3']
    export type H4 = HTMLElementTagNameMap['h4']
    export type H5 = HTMLElementTagNameMap['h5']
    export type H6 = HTMLElementTagNameMap['h6']
    export type Head = HTMLElementTagNameMap['head']
    export type Header = HTMLElementTagNameMap['header']
    export type Hr = HTMLElementTagNameMap['hr']
    export type Html = HTMLElementTagNameMap['html']
    export type I = HTMLElementTagNameMap['i']
    export type Iframe = HTMLElementTagNameMap['iframe']
    export type Img = HTMLElementTagNameMap['img']
    export type Input = HTMLElementTagNameMap['input']
    export type Ins = HTMLElementTagNameMap['ins']
    export type Kbd = HTMLElementTagNameMap['kbd']
    export type Label = HTMLElementTagNameMap['label']
    export type Legend = HTMLElementTagNameMap['legend']
    export type Li = HTMLElementTagNameMap['li']
    export type Link = HTMLElementTagNameMap['link']
    export type Main = HTMLElementTagNameMap['main']
    export type Map = HTMLElementTagNameMap['map']
    export type Mark = HTMLElementTagNameMap['mark']
    export type Meta = HTMLElementTagNameMap['meta']
    export type Meter = HTMLElementTagNameMap['meter']
    export type Nav = HTMLElementTagNameMap['nav']
    export type Noscript = HTMLElementTagNameMap['noscript']
    export type Object = HTMLElementTagNameMap['object']
    export type Ol = HTMLElementTagNameMap['ol']
    export type Optgroup = HTMLElementTagNameMap['optgroup']
    export type Option = HTMLElementTagNameMap['option']
    export type Output = HTMLElementTagNameMap['output']
    export type P = HTMLElementTagNameMap['p']
    export type Param = HTMLElementTagNameMap['param']
    export type Picture = HTMLElementTagNameMap['picture']
    export type Pre = HTMLElementTagNameMap['pre']
    export type Progress = HTMLElementTagNameMap['progress']
    export type Q = HTMLElementTagNameMap['q']
    export type Rb = HTMLElementTagNameMap['rb']
    export type Rp = HTMLElementTagNameMap['rp']
    export type Rt = HTMLElementTagNameMap['rt']
    export type Rtc = HTMLElementTagNameMap['rtc']
    export type Ruby = HTMLElementTagNameMap['ruby']
    export type S = HTMLElementTagNameMap['s']
    export type Samp = HTMLElementTagNameMap['samp']
    export type Script = HTMLElementTagNameMap['script']
    export type Section = HTMLElementTagNameMap['section']
    export type Select = HTMLElementTagNameMap['select']
    export type Small = HTMLElementTagNameMap['small']
    export type Source = HTMLElementTagNameMap['source']
    export type Span = HTMLElementTagNameMap['span']
    export type Strong = HTMLElementTagNameMap['strong']
    export type Style = HTMLElementTagNameMap['style']
    export type Sub = HTMLElementTagNameMap['sub']
    export type Summary = HTMLElementTagNameMap['summary']
    export type Sup = HTMLElementTagNameMap['sup']
    export type Table = HTMLElementTagNameMap['table']
    export type Tbody = HTMLElementTagNameMap['tbody']
    export type Td = HTMLElementTagNameMap['td']
    export type Template = HTMLElementTagNameMap['template']
    export type Textarea = HTMLElementTagNameMap['textarea']
    export type Tfoot = HTMLElementTagNameMap['tfoot']
    export type Th = HTMLElementTagNameMap['th']
    export type Thead = HTMLElementTagNameMap['thead']
    export type Time = HTMLElementTagNameMap['time']
    export type Title = HTMLElementTagNameMap['title']
    export type Tr = HTMLElementTagNameMap['tr']
    export type Track = HTMLElementTagNameMap['track']
    export type U = HTMLElementTagNameMap['u']
    export type Ul = HTMLElementTagNameMap['ul']
    export type Var = HTMLElementTagNameMap['var']
    export type Video = HTMLElementTagNameMap['video']
    export type Wbr = HTMLElementTagNameMap['wbr']
}
