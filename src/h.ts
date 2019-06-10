import {addChildren} from './addChildren'
import {TypedElement} from './TypedElement'
import {HtmlChildren} from './HtmlChildren'
import {AriaAttributes} from './AriaAttributes'
import {assignProps} from './assignProps'
import {Props} from './Props'
import {HtmlTypes} from './HtmlTypes'

/**
 * Function to facilitate the concise creation of any HTML element.
 *
 * NOTE The following function silently depends on the `document` variable
 * being globally available. Therefore, unit tests of components that use it
 * must be run inside a browser, or must expose `document` globally, e.g.
 * through PhantomJS or jsdom.
 */
export function h<T extends keyof HtmlTypes, E extends HtmlTypes[T]>(elem: E, props?: Props<E> & AriaAttributes, children?: HtmlChildren[T]): E
export function h<T extends keyof HtmlTypes, E extends HtmlTypes[T]>(tag: T, props?: Props<E> & AriaAttributes, children?: HtmlChildren[T]): E
export function h(tagOrElem: keyof HtmlTypes | HTMLElement, props?: Props<HTMLElement> & AriaAttributes, children?: (string | Element)[]): HTMLElement {
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
    export interface A extends TypedElement<'a', HTMLAnchorElement, HtmlChildren['a']> {}
    export interface Abbr extends TypedElement<'abbr', HTMLElement, HtmlChildren['abbr']> {}
    export interface Address extends TypedElement<'address', HTMLElement, HtmlChildren['address']> {}
    export interface Applet extends TypedElement<'applet', HTMLAppletElement, HtmlChildren['applet']> {}
    export interface Area extends TypedElement<'area', HTMLAreaElement, HtmlChildren['area']> {}
    export interface Article extends TypedElement<'article', HTMLElement, HtmlChildren['article']> {}
    export interface Aside extends TypedElement<'aside', HTMLElement, HtmlChildren['aside']> {}
    export interface Audio extends TypedElement<'audio', HTMLAudioElement, HtmlChildren['audio']> {}
    export interface B extends TypedElement<'b', HTMLElement, HtmlChildren['b']> {}
    export interface Base extends TypedElement<'base', HTMLBaseElement, HtmlChildren['base']> {}
    export interface Basefont extends TypedElement<'basefont', HTMLBaseFontElement, HtmlChildren['basefont']> {}
    export interface Bdi extends TypedElement<'bdi', HTMLElement, HtmlChildren['bdi']> {}
    export interface Bdo extends TypedElement<'bdo', HTMLElement, HtmlChildren['bdo']> {}
    export interface Blockquote extends TypedElement<'blockquote', HTMLQuoteElement, HtmlChildren['blockquote']> {}
    export interface Body extends TypedElement<'body', HTMLBodyElement, HtmlChildren['body']> {}
    export interface Br extends TypedElement<'br', HTMLBRElement, HtmlChildren['br']> {}
    export interface Button extends TypedElement<'button', HTMLButtonElement, HtmlChildren['button']> {}
    export interface Canvas extends TypedElement<'canvas', HTMLCanvasElement, HtmlChildren['canvas']> {}
    export interface Caption extends TypedElement<'caption', HTMLTableCaptionElement, HtmlChildren['caption']> {}
    export interface Cite extends TypedElement<'cite', HTMLElement, HtmlChildren['cite']> {}
    export interface Code extends TypedElement<'code', HTMLElement, HtmlChildren['code']> {}
    export interface Col extends TypedElement<'col', HTMLTableColElement, HtmlChildren['col']> {}
    export interface Colgroup extends TypedElement<'colgroup', HTMLTableColElement, HtmlChildren['colgroup']> {}
    export interface Data extends TypedElement<'data', HTMLDataElement, HtmlChildren['data']> {}
    export interface Datalist extends TypedElement<'datalist', HTMLDataListElement, HtmlChildren['datalist']> {}
    export interface Dd extends TypedElement<'dd', HTMLElement, HtmlChildren['dd']> {}
    export interface Del extends TypedElement<'del', HTMLModElement, HtmlChildren['del']> {}
    export interface Details extends TypedElement<'details', HTMLDetailsElement, HtmlChildren['details']> {}
    export interface Dfn extends TypedElement<'dfn', HTMLElement, HtmlChildren['dfn']> {}
    export interface Dialog extends TypedElement<'dialog', HTMLDialogElement, HtmlChildren['dialog']> {}
    export interface Dir extends TypedElement<'dir', HTMLDirectoryElement, HtmlChildren['dir']> {}
    export interface Div extends TypedElement<'div', HTMLDivElement, HtmlChildren['div']> {}
    export interface Dl extends TypedElement<'dl', HTMLDListElement, HtmlChildren['dl']> {}
    export interface Dt extends TypedElement<'dt', HTMLElement, HtmlChildren['dt']> {}
    export interface Em extends TypedElement<'em', HTMLElement, HtmlChildren['em']> {}
    export interface Embed extends TypedElement<'embed', HTMLEmbedElement, HtmlChildren['embed']> {}
    export interface Fieldset extends TypedElement<'fieldset', HTMLFieldSetElement, HtmlChildren['fieldset']> {}
    export interface Figcaption extends TypedElement<'figcaption', HTMLElement, HtmlChildren['figcaption']> {}
    export interface Figure extends TypedElement<'figure', HTMLElement, HtmlChildren['figure']> {}
    export interface Font extends TypedElement<'font', HTMLFontElement, HtmlChildren['font']> {}
    export interface Footer extends TypedElement<'footer', HTMLElement, HtmlChildren['footer']> {}
    export interface Form extends TypedElement<'form', HTMLFormElement, HtmlChildren['form']> {}
    export interface Frame extends TypedElement<'frame', HTMLFrameElement, HtmlChildren['frame']> {}
    export interface Frameset extends TypedElement<'frameset', HTMLFrameSetElement, HtmlChildren['frameset']> {}
    export interface H1 extends TypedElement<'h1', HTMLHeadingElement, HtmlChildren['h1']> {}
    export interface H2 extends TypedElement<'h2', HTMLHeadingElement, HtmlChildren['h2']> {}
    export interface H3 extends TypedElement<'h3', HTMLHeadingElement, HtmlChildren['h3']> {}
    export interface H4 extends TypedElement<'h4', HTMLHeadingElement, HtmlChildren['h4']> {}
    export interface H5 extends TypedElement<'h5', HTMLHeadingElement, HtmlChildren['h5']> {}
    export interface H6 extends TypedElement<'h6', HTMLHeadingElement, HtmlChildren['h6']> {}
    export interface Head extends TypedElement<'head', HTMLHeadElement, HtmlChildren['head']> {}
    export interface Header extends TypedElement<'header', HTMLElement, HtmlChildren['header']> {}
    export interface Hgroup extends TypedElement<'hgroup', HTMLElement, HtmlChildren['hgroup']> {}
    export interface Hr extends TypedElement<'hr', HTMLHRElement, HtmlChildren['hr']> {}
    export interface Html extends TypedElement<'html', HTMLHtmlElement, HtmlChildren['html']> {}
    export interface I extends TypedElement<'i', HTMLElement, HtmlChildren['i']> {}
    export interface Iframe extends TypedElement<'iframe', HTMLIFrameElement, HtmlChildren['iframe']> {}
    export interface Img extends TypedElement<'img', HTMLImageElement, HtmlChildren['img']> {}
    export interface Input extends TypedElement<'input', HTMLInputElement, HtmlChildren['input']> {}
    export interface Ins extends TypedElement<'ins', HTMLModElement, HtmlChildren['ins']> {}
    export interface Kbd extends TypedElement<'kbd', HTMLElement, HtmlChildren['kbd']> {}
    export interface Label extends TypedElement<'label', HTMLLabelElement, HtmlChildren['label']> {}
    export interface Legend extends TypedElement<'legend', HTMLLegendElement, HtmlChildren['legend']> {}
    export interface Li extends TypedElement<'li', HTMLLIElement, HtmlChildren['li']> {}
    export interface Link extends TypedElement<'link', HTMLLinkElement, HtmlChildren['link']> {}
    export interface Main extends TypedElement<'main', HTMLElement, HtmlChildren['main']> {}
    export interface Map extends TypedElement<'map', HTMLMapElement, HtmlChildren['map']> {}
    export interface Mark extends TypedElement<'mark', HTMLElement, HtmlChildren['mark']> {}
    export interface Marquee extends TypedElement<'marquee', HTMLMarqueeElement, HtmlChildren['marquee']> {}
    export interface Menu extends TypedElement<'menu', HTMLMenuElement, HtmlChildren['menu']> {}
    export interface Meta extends TypedElement<'meta', HTMLMetaElement, HtmlChildren['meta']> {}
    export interface Meter extends TypedElement<'meter', HTMLMeterElement, HtmlChildren['meter']> {}
    export interface Nav extends TypedElement<'nav', HTMLElement, HtmlChildren['nav']> {}
    export interface Noscript extends TypedElement<'noscript', HTMLElement, HtmlChildren['noscript']> {}
    export interface Object extends TypedElement<'object', HTMLObjectElement, HtmlChildren['object']> {}
    export interface Ol extends TypedElement<'ol', HTMLOListElement, HtmlChildren['ol']> {}
    export interface Optgroup extends TypedElement<'optgroup', HTMLOptGroupElement, HtmlChildren['optgroup']> {}
    export interface Option extends TypedElement<'option', HTMLOptionElement, HtmlChildren['option']> {}
    export interface Output extends TypedElement<'output', HTMLOutputElement, HtmlChildren['output']> {}
    export interface P extends TypedElement<'p', HTMLParagraphElement, HtmlChildren['p']> {}
    export interface Param extends TypedElement<'param', HTMLParamElement, HtmlChildren['param']> {}
    export interface Picture extends TypedElement<'picture', HTMLPictureElement, HtmlChildren['picture']> {}
    export interface Pre extends TypedElement<'pre', HTMLPreElement, HtmlChildren['pre']> {}
    export interface Progress extends TypedElement<'progress', HTMLProgressElement, HtmlChildren['progress']> {}
    export interface Q extends TypedElement<'q', HTMLQuoteElement, HtmlChildren['q']> {}
    export interface Rb extends TypedElement<'rb', HTMLElement, HtmlChildren['rb']> {}
    export interface Rp extends TypedElement<'rp', HTMLElement, HtmlChildren['rp']> {}
    export interface Rt extends TypedElement<'rt', HTMLElement, HtmlChildren['rt']> {}
    export interface Rtc extends TypedElement<'rtc', HTMLElement, HtmlChildren['rtc']> {}
    export interface Ruby extends TypedElement<'ruby', HTMLElement, HtmlChildren['ruby']> {}
    export interface S extends TypedElement<'s', HTMLElement, HtmlChildren['s']> {}
    export interface Samp extends TypedElement<'samp', HTMLElement, HtmlChildren['samp']> {}
    export interface Script extends TypedElement<'script', HTMLScriptElement, HtmlChildren['script']> {}
    export interface Section extends TypedElement<'section', HTMLElement, HtmlChildren['section']> {}
    export interface Select extends TypedElement<'select', HTMLSelectElement, HtmlChildren['select']> {}
    export interface Slot extends TypedElement<'slot', HTMLSlotElement, HtmlChildren['slot']> {}
    export interface Small extends TypedElement<'small', HTMLElement, HtmlChildren['small']> {}
    export interface Source extends TypedElement<'source', HTMLSourceElement, HtmlChildren['source']> {}
    export interface Span extends TypedElement<'span', HTMLSpanElement, HtmlChildren['span']> {}
    export interface Strong extends TypedElement<'strong', HTMLElement, HtmlChildren['strong']> {}
    export interface Style extends TypedElement<'style', HTMLStyleElement, HtmlChildren['style']> {}
    export interface Sub extends TypedElement<'sub', HTMLElement, HtmlChildren['sub']> {}
    export interface Summary extends TypedElement<'summary', HTMLElement, HtmlChildren['summary']> {}
    export interface Sup extends TypedElement<'sup', HTMLElement, HtmlChildren['sup']> {}
    export interface Table extends TypedElement<'table', HTMLTableElement, HtmlChildren['table']> {}
    export interface Tbody extends TypedElement<'tbody', HTMLTableSectionElement, HtmlChildren['tbody']> {}
    export interface Td extends TypedElement<'td', HTMLTableDataCellElement, HtmlChildren['td']> {}
    export interface Template extends TypedElement<'template', HTMLTemplateElement, HtmlChildren['template']> {}
    export interface Textarea extends TypedElement<'textarea', HTMLTextAreaElement, HtmlChildren['textarea']> {}
    export interface Tfoot extends TypedElement<'tfoot', HTMLTableSectionElement, HtmlChildren['tfoot']> {}
    export interface Th extends TypedElement<'th', HTMLTableHeaderCellElement, HtmlChildren['th']> {}
    export interface Thead extends TypedElement<'thead', HTMLTableSectionElement, HtmlChildren['thead']> {}
    export interface Time extends TypedElement<'time', HTMLTimeElement, HtmlChildren['time']> {}
    export interface Title extends TypedElement<'title', HTMLTitleElement, HtmlChildren['title']> {}
    export interface Tr extends TypedElement<'tr', HTMLTableRowElement, HtmlChildren['tr']> {}
    export interface Track extends TypedElement<'track', HTMLTrackElement, HtmlChildren['track']> {}
    export interface U extends TypedElement<'u', HTMLElement, HtmlChildren['u']> {}
    export interface Ul extends TypedElement<'ul', HTMLUListElement, HtmlChildren['ul']> {}
    export interface Var extends TypedElement<'var', HTMLElement, HtmlChildren['var']> {}
    export interface Video extends TypedElement<'video', HTMLVideoElement, HtmlChildren['video']> {}
    export interface Wbr extends TypedElement<'wbr', HTMLElement, HtmlChildren['wbr']> {}
}
