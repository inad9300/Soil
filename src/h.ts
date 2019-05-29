import {addChildren} from './addChildren'
import {HTMLElementChildrenMap} from './HTMLElementChildrenMap'
import {AriaAttributes} from './AriaAttributes'
import {assignProps} from './assignProps'
import {Props} from './Props'

/**
 * Function to facilitate the concise creation of any HTML element.
 *
 * NOTE The following function silently depends on the `document` variable
 * being globally available. Therefore, unit tests of components that use it
 * must be run inside a browser, or must expose `document` globally, e.g.
 * through PhantomJS or jsdom.
 *
 * TODO Missing in `HTMLElementTagNameMap`: `<rb>`, `<rtc>`.
 * FIXME Second signature fails at inferring `T`, thus not picking up `children`'s type.
 */
export function h<T extends keyof HTMLElementTagNameMap, E extends HTMLElementTagNameMap[T]>(tag: T, props?: Props<E> & AriaAttributes, children?: HTMLElementChildrenMap[T]): E
export function h<T extends keyof HTMLElementTagNameMap, E extends HTMLElementTagNameMap[T]>(elem: E, props?: Props<E> & AriaAttributes, children?: HTMLElementChildrenMap[T]): E
export function h(tagOrElem: keyof HTMLElementTagNameMap | HTMLElement, props?: Props<HTMLElement> & AriaAttributes, children?: (string | Element)[]): HTMLElement {
    const elem = typeof tagOrElem === 'string' ? document.createElement(tagOrElem) : tagOrElem
    if (props !== undefined) {
        assignProps(elem, props)
    }
    if (children !== undefined) {
        addChildren(elem, children)
    }
    return elem
}

/**
 * Nice-to-remember, concise aliases for all HTML element interfaces.
 */
export namespace h {
    export type A = HTMLElementTagNameMap['a']
    export type Abbr = HTMLElementTagNameMap['abbr']
    export type Address = HTMLElementTagNameMap['address']
    export type Applet = HTMLElementTagNameMap['applet']
    export type Area = HTMLElementTagNameMap['area']
    export type Article = HTMLElementTagNameMap['article']
    export type Aside = HTMLElementTagNameMap['aside']
    export type Audio = HTMLElementTagNameMap['audio']
    export type B = HTMLElementTagNameMap['b']
    export type Base = HTMLElementTagNameMap['base']
    export type Basefont = HTMLElementTagNameMap['basefont']
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
    export type Dir = HTMLElementTagNameMap['dir']
    export type Div = HTMLElementTagNameMap['div']
    export type Dl = HTMLElementTagNameMap['dl']
    export type Dt = HTMLElementTagNameMap['dt']
    export type Em = HTMLElementTagNameMap['em']
    export type Embed = HTMLElementTagNameMap['embed']
    export type Fieldset = HTMLElementTagNameMap['fieldset']
    export type Figcaption = HTMLElementTagNameMap['figcaption']
    export type Figure = HTMLElementTagNameMap['figure']
    export type Font = HTMLElementTagNameMap['font']
    export type Footer = HTMLElementTagNameMap['footer']
    export type Form = HTMLElementTagNameMap['form']
    export type Frame = HTMLElementTagNameMap['frame']
    export type Frameset = HTMLElementTagNameMap['frameset']
    export type H1 = HTMLElementTagNameMap['h1']
    export type H2 = HTMLElementTagNameMap['h2']
    export type H3 = HTMLElementTagNameMap['h3']
    export type H4 = HTMLElementTagNameMap['h4']
    export type H5 = HTMLElementTagNameMap['h5']
    export type H6 = HTMLElementTagNameMap['h6']
    export type Head = HTMLElementTagNameMap['head']
    export type Header = HTMLElementTagNameMap['header']
    export type Hgroup = HTMLElementTagNameMap['hgroup']
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
    export type Marquee = HTMLElementTagNameMap['marquee']
    export type Menu = HTMLElementTagNameMap['menu']
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
    export type Rp = HTMLElementTagNameMap['rp']
    export type Rt = HTMLElementTagNameMap['rt']
    export type Ruby = HTMLElementTagNameMap['ruby']
    export type S = HTMLElementTagNameMap['s']
    export type Samp = HTMLElementTagNameMap['samp']
    export type Script = HTMLElementTagNameMap['script']
    export type Section = HTMLElementTagNameMap['section']
    export type Select = HTMLElementTagNameMap['select']
    export type Slot = HTMLElementTagNameMap['slot']
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
