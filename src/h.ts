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
export function h(elem: h.A, props?: Props<h.A>, children?: HtmlChildren['a']): h.A
export function h(elem: h.Abbr, props?: Props<h.Abbr>, children?: HtmlChildren['abbr']): h.Abbr
export function h(elem: h.Address, props?: Props<h.Address>, children?: HtmlChildren['address']): h.Address
export function h(elem: h.Applet, props?: Props<h.Applet>, children?: HtmlChildren['applet']): h.Applet
export function h(elem: h.Area, props?: Props<h.Area>, children?: HtmlChildren['area']): h.Area
export function h(elem: h.Article, props?: Props<h.Article>, children?: HtmlChildren['article']): h.Article
export function h(elem: h.Aside, props?: Props<h.Aside>, children?: HtmlChildren['aside']): h.Aside
export function h(elem: h.Audio, props?: Props<h.Audio>, children?: HtmlChildren['audio']): h.Audio
export function h(elem: h.B, props?: Props<h.B>, children?: HtmlChildren['b']): h.B
export function h(elem: h.Base, props?: Props<h.Base>, children?: HtmlChildren['base']): h.Base
export function h(elem: h.Basefont, props?: Props<h.Basefont>, children?: HtmlChildren['basefont']): h.Basefont
export function h(elem: h.Bdi, props?: Props<h.Bdi>, children?: HtmlChildren['bdi']): h.Bdi
export function h(elem: h.Bdo, props?: Props<h.Bdo>, children?: HtmlChildren['bdo']): h.Bdo
export function h(elem: h.Blockquote, props?: Props<h.Blockquote>, children?: HtmlChildren['blockquote']): h.Blockquote
export function h(elem: h.Body, props?: Props<h.Body>, children?: HtmlChildren['body']): h.Body
export function h(elem: h.Br, props?: Props<h.Br>, children?: HtmlChildren['br']): h.Br
export function h(elem: h.Button, props?: Props<h.Button>, children?: HtmlChildren['button']): h.Button
export function h(elem: h.Canvas, props?: Props<h.Canvas>, children?: HtmlChildren['canvas']): h.Canvas
export function h(elem: h.Caption, props?: Props<h.Caption>, children?: HtmlChildren['caption']): h.Caption
export function h(elem: h.Cite, props?: Props<h.Cite>, children?: HtmlChildren['cite']): h.Cite
export function h(elem: h.Code, props?: Props<h.Code>, children?: HtmlChildren['code']): h.Code
export function h(elem: h.Col, props?: Props<h.Col>, children?: HtmlChildren['col']): h.Col
export function h(elem: h.Colgroup, props?: Props<h.Colgroup>, children?: HtmlChildren['colgroup']): h.Colgroup
export function h(elem: h.Data, props?: Props<h.Data>, children?: HtmlChildren['data']): h.Data
export function h(elem: h.Datalist, props?: Props<h.Datalist>, children?: HtmlChildren['datalist']): h.Datalist
export function h(elem: h.Dd, props?: Props<h.Dd>, children?: HtmlChildren['dd']): h.Dd
export function h(elem: h.Del, props?: Props<h.Del>, children?: HtmlChildren['del']): h.Del
export function h(elem: h.Details, props?: Props<h.Details>, children?: HtmlChildren['details']): h.Details
export function h(elem: h.Dfn, props?: Props<h.Dfn>, children?: HtmlChildren['dfn']): h.Dfn
export function h(elem: h.Dialog, props?: Props<h.Dialog>, children?: HtmlChildren['dialog']): h.Dialog
export function h(elem: h.Dir, props?: Props<h.Dir>, children?: HtmlChildren['dir']): h.Dir
export function h(elem: h.Div, props?: Props<h.Div>, children?: HtmlChildren['div']): h.Div
export function h(elem: h.Dl, props?: Props<h.Dl>, children?: HtmlChildren['dl']): h.Dl
export function h(elem: h.Dt, props?: Props<h.Dt>, children?: HtmlChildren['dt']): h.Dt
export function h(elem: h.Em, props?: Props<h.Em>, children?: HtmlChildren['em']): h.Em
export function h(elem: h.Embed, props?: Props<h.Embed>, children?: HtmlChildren['embed']): h.Embed
export function h(elem: h.Fieldset, props?: Props<h.Fieldset>, children?: HtmlChildren['fieldset']): h.Fieldset
export function h(elem: h.Figcaption, props?: Props<h.Figcaption>, children?: HtmlChildren['figcaption']): h.Figcaption
export function h(elem: h.Figure, props?: Props<h.Figure>, children?: HtmlChildren['figure']): h.Figure
export function h(elem: h.Font, props?: Props<h.Font>, children?: HtmlChildren['font']): h.Font
export function h(elem: h.Footer, props?: Props<h.Footer>, children?: HtmlChildren['footer']): h.Footer
export function h(elem: h.Form, props?: Props<h.Form>, children?: HtmlChildren['form']): h.Form
export function h(elem: h.Frame, props?: Props<h.Frame>, children?: HtmlChildren['frame']): h.Frame
export function h(elem: h.Frameset, props?: Props<h.Frameset>, children?: HtmlChildren['frameset']): h.Frameset
export function h(elem: h.H1, props?: Props<h.H1>, children?: HtmlChildren['h1']): h.H1
export function h(elem: h.H2, props?: Props<h.H2>, children?: HtmlChildren['h2']): h.H2
export function h(elem: h.H3, props?: Props<h.H3>, children?: HtmlChildren['h3']): h.H3
export function h(elem: h.H4, props?: Props<h.H4>, children?: HtmlChildren['h4']): h.H4
export function h(elem: h.H5, props?: Props<h.H5>, children?: HtmlChildren['h5']): h.H5
export function h(elem: h.H6, props?: Props<h.H6>, children?: HtmlChildren['h6']): h.H6
export function h(elem: h.Head, props?: Props<h.Head>, children?: HtmlChildren['head']): h.Head
export function h(elem: h.Header, props?: Props<h.Header>, children?: HtmlChildren['header']): h.Header
export function h(elem: h.Hgroup, props?: Props<h.Hgroup>, children?: HtmlChildren['hgroup']): h.Hgroup
export function h(elem: h.Hr, props?: Props<h.Hr>, children?: HtmlChildren['hr']): h.Hr
export function h(elem: h.Html, props?: Props<h.Html>, children?: HtmlChildren['html']): h.Html
export function h(elem: h.I, props?: Props<h.I>, children?: HtmlChildren['i']): h.I
export function h(elem: h.Iframe, props?: Props<h.Iframe>, children?: HtmlChildren['iframe']): h.Iframe
export function h(elem: h.Img, props?: Props<h.Img>, children?: HtmlChildren['img']): h.Img
export function h(elem: h.Input, props?: Props<h.Input>, children?: HtmlChildren['input']): h.Input
export function h(elem: h.Ins, props?: Props<h.Ins>, children?: HtmlChildren['ins']): h.Ins
export function h(elem: h.Kbd, props?: Props<h.Kbd>, children?: HtmlChildren['kbd']): h.Kbd
export function h(elem: h.Label, props?: Props<h.Label>, children?: HtmlChildren['label']): h.Label
export function h(elem: h.Legend, props?: Props<h.Legend>, children?: HtmlChildren['legend']): h.Legend
export function h(elem: h.Li, props?: Props<h.Li>, children?: HtmlChildren['li']): h.Li
export function h(elem: h.Link, props?: Props<h.Link>, children?: HtmlChildren['link']): h.Link
export function h(elem: h.Main, props?: Props<h.Main>, children?: HtmlChildren['main']): h.Main
export function h(elem: h.Map, props?: Props<h.Map>, children?: HtmlChildren['map']): h.Map
export function h(elem: h.Mark, props?: Props<h.Mark>, children?: HtmlChildren['mark']): h.Mark
export function h(elem: h.Marquee, props?: Props<h.Marquee>, children?: HtmlChildren['marquee']): h.Marquee
export function h(elem: h.Menu, props?: Props<h.Menu>, children?: HtmlChildren['menu']): h.Menu
export function h(elem: h.Meta, props?: Props<h.Meta>, children?: HtmlChildren['meta']): h.Meta
export function h(elem: h.Meter, props?: Props<h.Meter>, children?: HtmlChildren['meter']): h.Meter
export function h(elem: h.Nav, props?: Props<h.Nav>, children?: HtmlChildren['nav']): h.Nav
export function h(elem: h.Noscript, props?: Props<h.Noscript>, children?: HtmlChildren['noscript']): h.Noscript
export function h(elem: h.Object, props?: Props<h.Object>, children?: HtmlChildren['object']): h.Object
export function h(elem: h.Ol, props?: Props<h.Ol>, children?: HtmlChildren['ol']): h.Ol
export function h(elem: h.Optgroup, props?: Props<h.Optgroup>, children?: HtmlChildren['optgroup']): h.Optgroup
export function h(elem: h.Option, props?: Props<h.Option>, children?: HtmlChildren['option']): h.Option
export function h(elem: h.Output, props?: Props<h.Output>, children?: HtmlChildren['output']): h.Output
export function h(elem: h.P, props?: Props<h.P>, children?: HtmlChildren['p']): h.P
export function h(elem: h.Param, props?: Props<h.Param>, children?: HtmlChildren['param']): h.Param
export function h(elem: h.Picture, props?: Props<h.Picture>, children?: HtmlChildren['picture']): h.Picture
export function h(elem: h.Pre, props?: Props<h.Pre>, children?: HtmlChildren['pre']): h.Pre
export function h(elem: h.Progress, props?: Props<h.Progress>, children?: HtmlChildren['progress']): h.Progress
export function h(elem: h.Q, props?: Props<h.Q>, children?: HtmlChildren['q']): h.Q
export function h(elem: h.Rb, props?: Props<h.Rb>, children?: HtmlChildren['rb']): h.Rb
export function h(elem: h.Rp, props?: Props<h.Rp>, children?: HtmlChildren['rp']): h.Rp
export function h(elem: h.Rt, props?: Props<h.Rt>, children?: HtmlChildren['rt']): h.Rt
export function h(elem: h.Rtc, props?: Props<h.Rtc>, children?: HtmlChildren['rtc']): h.Rtc
export function h(elem: h.Ruby, props?: Props<h.Ruby>, children?: HtmlChildren['ruby']): h.Ruby
export function h(elem: h.S, props?: Props<h.S>, children?: HtmlChildren['s']): h.S
export function h(elem: h.Samp, props?: Props<h.Samp>, children?: HtmlChildren['samp']): h.Samp
export function h(elem: h.Script, props?: Props<h.Script>, children?: HtmlChildren['script']): h.Script
export function h(elem: h.Section, props?: Props<h.Section>, children?: HtmlChildren['section']): h.Section
export function h(elem: h.Select, props?: Props<h.Select>, children?: HtmlChildren['select']): h.Select
export function h(elem: h.Slot, props?: Props<h.Slot>, children?: HtmlChildren['slot']): h.Slot
export function h(elem: h.Small, props?: Props<h.Small>, children?: HtmlChildren['small']): h.Small
export function h(elem: h.Source, props?: Props<h.Source>, children?: HtmlChildren['source']): h.Source
export function h(elem: h.Span, props?: Props<h.Span>, children?: HtmlChildren['span']): h.Span
export function h(elem: h.Strong, props?: Props<h.Strong>, children?: HtmlChildren['strong']): h.Strong
export function h(elem: h.Style, props?: Props<h.Style>, children?: HtmlChildren['style']): h.Style
export function h(elem: h.Sub, props?: Props<h.Sub>, children?: HtmlChildren['sub']): h.Sub
export function h(elem: h.Summary, props?: Props<h.Summary>, children?: HtmlChildren['summary']): h.Summary
export function h(elem: h.Sup, props?: Props<h.Sup>, children?: HtmlChildren['sup']): h.Sup
export function h(elem: h.Table, props?: Props<h.Table>, children?: HtmlChildren['table']): h.Table
export function h(elem: h.Tbody, props?: Props<h.Tbody>, children?: HtmlChildren['tbody']): h.Tbody
export function h(elem: h.Td, props?: Props<h.Td>, children?: HtmlChildren['td']): h.Td
export function h(elem: h.Template, props?: Props<h.Template>, children?: HtmlChildren['template']): h.Template
export function h(elem: h.Textarea, props?: Props<h.Textarea>, children?: HtmlChildren['textarea']): h.Textarea
export function h(elem: h.Tfoot, props?: Props<h.Tfoot>, children?: HtmlChildren['tfoot']): h.Tfoot
export function h(elem: h.Th, props?: Props<h.Th>, children?: HtmlChildren['th']): h.Th
export function h(elem: h.Thead, props?: Props<h.Thead>, children?: HtmlChildren['thead']): h.Thead
export function h(elem: h.Time, props?: Props<h.Time>, children?: HtmlChildren['time']): h.Time
export function h(elem: h.Title, props?: Props<h.Title>, children?: HtmlChildren['title']): h.Title
export function h(elem: h.Tr, props?: Props<h.Tr>, children?: HtmlChildren['tr']): h.Tr
export function h(elem: h.Track, props?: Props<h.Track>, children?: HtmlChildren['track']): h.Track
export function h(elem: h.U, props?: Props<h.U>, children?: HtmlChildren['u']): h.U
export function h(elem: h.Ul, props?: Props<h.Ul>, children?: HtmlChildren['ul']): h.Ul
export function h(elem: h.Var, props?: Props<h.Var>, children?: HtmlChildren['var']): h.Var
export function h(elem: h.Video, props?: Props<h.Video>, children?: HtmlChildren['video']): h.Video
export function h(elem: h.Wbr, props?: Props<h.Wbr>, children?: HtmlChildren['wbr']): h.Wbr
// TODO Collapse signatures above into something similar to the one below.
// export function h<T extends keyof HtmlTypes, E extends HtmlTypes[T]>(elem: E, props?: Props<E> & AriaAttributes, children?: HtmlChildren[T]): E
export function h<T extends keyof HtmlTypes, E extends HtmlTypes[T]>(tag: T, props?: Props<E> & AriaAttributes, children?: HtmlChildren[T]): E
export function h(tagOrElem: keyof HtmlTypes | HTMLElement, props?: Props<HTMLElement> & AriaAttributes, children?: void | (string | Element)[]): HTMLElement {
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
 * Nice-to-remember, concise aliases for all HTML element interfaces (or a
 * type-safer version of them).
 */
export namespace h {
    export interface A extends TypedElement<'A', HTMLAnchorElement, HtmlChildren['a'][0]> {}
    export interface Abbr extends TypedElement<'ABBR', HTMLElement, HtmlChildren['abbr'][0]> {}
    export interface Address extends TypedElement<'ADDRESS', HTMLElement, HtmlChildren['address'][0]> {}
    export interface Applet extends TypedElement<'APPLET', HTMLAppletElement, HtmlChildren['applet'][0]> {}
    export interface Area extends TypedElement<'AREA', HTMLAreaElement, HtmlChildren['area']> {}
    export interface Article extends TypedElement<'ARTICLE', HTMLElement, HtmlChildren['article'][0]> {}
    export interface Aside extends TypedElement<'ASIDE', HTMLElement, HtmlChildren['aside'][0]> {}
    export interface Audio extends TypedElement<'AUDIO', HTMLAudioElement, HtmlChildren['audio'][0]> {}
    export interface B extends TypedElement<'B', HTMLElement, HtmlChildren['b'][0]> {}
    export interface Base extends TypedElement<'BASE', HTMLBaseElement, HtmlChildren['base']> {}
    export interface Basefont extends TypedElement<'BASEFONT', HTMLBaseFontElement, HtmlChildren['basefont'][0]> {}
    export interface Bdi extends TypedElement<'BDI', HTMLElement, HtmlChildren['bdi'][0]> {}
    export interface Bdo extends TypedElement<'BDO', HTMLElement, HtmlChildren['bdo'][0]> {}
    export interface Blockquote extends TypedElement<'BLOCKQUOTE', HTMLQuoteElement, HtmlChildren['blockquote'][0]> {}
    export interface Body extends TypedElement<'BODY', HTMLBodyElement, HtmlChildren['body'][0]> {}
    export interface Br extends TypedElement<'BR', HTMLBRElement, HtmlChildren['br']> {}
    export interface Button extends TypedElement<'BUTTON', HTMLButtonElement, HtmlChildren['button'][0]> {}
    export interface Canvas extends TypedElement<'CANVAS', HTMLCanvasElement, HtmlChildren['canvas'][0]> {}
    export interface Caption extends TypedElement<'CAPTION', HTMLTableCaptionElement, HtmlChildren['caption'][0]> {}
    export interface Cite extends TypedElement<'CITE', HTMLElement, HtmlChildren['cite'][0]> {}
    export interface Code extends TypedElement<'CODE', HTMLElement, HtmlChildren['code'][0]> {}
    export interface Col extends TypedElement<'COL', HTMLTableColElement, HtmlChildren['col']> {}
    export interface Colgroup extends TypedElement<'COLGROUP', HTMLTableColElement, HtmlChildren['colgroup'][0]> {}
    export interface Data extends TypedElement<'DATA', HTMLDataElement, HtmlChildren['data'][0]> {}
    export interface Datalist extends TypedElement<'DATALIST', HTMLDataListElement, HtmlChildren['datalist'][0]> {}
    export interface Dd extends TypedElement<'DD', HTMLElement, HtmlChildren['dd'][0]> {}
    export interface Del extends TypedElement<'DEL', HTMLModElement, HtmlChildren['del'][0]> {}
    export interface Details extends TypedElement<'DETAILS', HTMLDetailsElement, HtmlChildren['details'][0]> {}
    export interface Dfn extends TypedElement<'DFN', HTMLElement, HtmlChildren['dfn'][0]> {}
    export interface Dialog extends TypedElement<'DIALOG', HTMLDialogElement, HtmlChildren['dialog'][0]> {}
    export interface Dir extends TypedElement<'DIR', HTMLDirectoryElement, HtmlChildren['dir'][0]> {}
    export interface Div extends TypedElement<'DIV', HTMLDivElement, HtmlChildren['div'][0]> {}
    export interface Dl extends TypedElement<'DL', HTMLDListElement, HtmlChildren['dl'][0]> {}
    export interface Dt extends TypedElement<'DT', HTMLElement, HtmlChildren['dt'][0]> {}
    export interface Em extends TypedElement<'EM', HTMLElement, HtmlChildren['em'][0]> {}
    export interface Embed extends TypedElement<'EMBED', HTMLEmbedElement, HtmlChildren['embed']> {}
    export interface Fieldset extends TypedElement<'FIELDSET', HTMLFieldSetElement, HtmlChildren['fieldset'][0]> {}
    export interface Figcaption extends TypedElement<'FIGCAPTION', HTMLElement, HtmlChildren['figcaption'][0]> {}
    export interface Figure extends TypedElement<'FIGURE', HTMLElement, HtmlChildren['figure'][0]> {}
    export interface Font extends TypedElement<'FONT', HTMLFontElement, HtmlChildren['font'][0]> {}
    export interface Footer extends TypedElement<'FOOTER', HTMLElement, HtmlChildren['footer'][0]> {}
    export interface Form extends TypedElement<'FORM', HTMLFormElement, HtmlChildren['form'][0]> {}
    export interface Frame extends TypedElement<'FRAME', HTMLFrameElement, HtmlChildren['frame'][0]> {}
    export interface Frameset extends TypedElement<'FRAMESET', HTMLFrameSetElement, HtmlChildren['frameset'][0]> {}
    export interface H1 extends TypedElement<'H1', HTMLHeadingElement, HtmlChildren['h1'][0]> {}
    export interface H2 extends TypedElement<'H2', HTMLHeadingElement, HtmlChildren['h2'][0]> {}
    export interface H3 extends TypedElement<'H3', HTMLHeadingElement, HtmlChildren['h3'][0]> {}
    export interface H4 extends TypedElement<'H4', HTMLHeadingElement, HtmlChildren['h4'][0]> {}
    export interface H5 extends TypedElement<'H5', HTMLHeadingElement, HtmlChildren['h5'][0]> {}
    export interface H6 extends TypedElement<'H6', HTMLHeadingElement, HtmlChildren['h6'][0]> {}
    export interface Head extends TypedElement<'HEAD', HTMLHeadElement, HtmlChildren['head'][0]> {}
    export interface Header extends TypedElement<'HEADER', HTMLElement, HtmlChildren['header'][0]> {}
    export interface Hgroup extends TypedElement<'HGROUP', HTMLElement, HtmlChildren['hgroup'][0]> {}
    export interface Hr extends TypedElement<'HR', HTMLHRElement, HtmlChildren['hr']> {}
    export interface Html extends TypedElement<'HTML', HTMLHtmlElement, HtmlChildren['html'][0]> {}
    export interface I extends TypedElement<'I', HTMLElement, HtmlChildren['i'][0]> {}
    export interface Iframe extends TypedElement<'IFRAME', HTMLIFrameElement, HtmlChildren['iframe'][0]> {}
    export interface Img extends TypedElement<'IMG', HTMLImageElement, HtmlChildren['img']> {}
    export interface Input extends TypedElement<'INPUT', HTMLInputElement, HtmlChildren['input']> {}
    export interface Ins extends TypedElement<'INS', HTMLModElement, HtmlChildren['ins'][0]> {}
    export interface Kbd extends TypedElement<'KBD', HTMLElement, HtmlChildren['kbd'][0]> {}
    export interface Label extends TypedElement<'LABEL', HTMLLabelElement, HtmlChildren['label'][0]> {}
    export interface Legend extends TypedElement<'LEGEND', HTMLLegendElement, HtmlChildren['legend'][0]> {}
    export interface Li extends TypedElement<'LI', HTMLLIElement, HtmlChildren['li'][0]> {}
    export interface Link extends TypedElement<'LINK', HTMLLinkElement, HtmlChildren['link']> {}
    export interface Main extends TypedElement<'MAIN', HTMLElement, HtmlChildren['main'][0]> {}
    export interface Map extends TypedElement<'MAP', HTMLMapElement, HtmlChildren['map'][0]> {}
    export interface Mark extends TypedElement<'MARK', HTMLElement, HtmlChildren['mark'][0]> {}
    export interface Marquee extends TypedElement<'MARQUEE', HTMLMarqueeElement, HtmlChildren['marquee'][0]> {}
    export interface Menu extends TypedElement<'MENU', HTMLMenuElement, HtmlChildren['menu'][0]> {}
    export interface Meta extends TypedElement<'META', HTMLMetaElement, HtmlChildren['meta']> {}
    export interface Meter extends TypedElement<'METER', HTMLMeterElement, HtmlChildren['meter'][0]> {}
    export interface Nav extends TypedElement<'NAV', HTMLElement, HtmlChildren['nav'][0]> {}
    export interface Noscript extends TypedElement<'NOSCRIPT', HTMLElement, HtmlChildren['noscript'][0]> {}
    export interface Object extends TypedElement<'OBJECT', HTMLObjectElement, HtmlChildren['object'][0]> {}
    export interface Ol extends TypedElement<'OL', HTMLOListElement, HtmlChildren['ol'][0]> {}
    export interface Optgroup extends TypedElement<'OPTGROUP', HTMLOptGroupElement, HtmlChildren['optgroup'][0]> {}
    export interface Option extends TypedElement<'OPTION', HTMLOptionElement, HtmlChildren['option'][0]> {}
    export interface Output extends TypedElement<'OUTPUT', HTMLOutputElement, HtmlChildren['output'][0]> {}
    export interface P extends TypedElement<'P', HTMLParagraphElement, HtmlChildren['p'][0]> {}
    export interface Param extends TypedElement<'PARAM', HTMLParamElement, HtmlChildren['param']> {}
    export interface Picture extends TypedElement<'PICTURE', HTMLPictureElement, HtmlChildren['picture'][0]> {}
    export interface Pre extends TypedElement<'PRE', HTMLPreElement, HtmlChildren['pre'][0]> {}
    export interface Progress extends TypedElement<'PROGRESS', HTMLProgressElement, HtmlChildren['progress'][0]> {}
    export interface Q extends TypedElement<'Q', HTMLQuoteElement, HtmlChildren['q'][0]> {}
    export interface Rb extends TypedElement<'RB', HTMLElement, HtmlChildren['rb'][0]> {}
    export interface Rp extends TypedElement<'RP', HTMLElement, HtmlChildren['rp'][0]> {}
    export interface Rt extends TypedElement<'RT', HTMLElement, HtmlChildren['rt'][0]> {}
    export interface Rtc extends TypedElement<'RTC', HTMLElement, HtmlChildren['rtc'][0]> {}
    export interface Ruby extends TypedElement<'RUBY', HTMLElement, HtmlChildren['ruby'][0]> {}
    export interface S extends TypedElement<'S', HTMLElement, HtmlChildren['s'][0]> {}
    export interface Samp extends TypedElement<'SAMP', HTMLElement, HtmlChildren['samp'][0]> {}
    export interface Script extends TypedElement<'SCRIPT', HTMLScriptElement, HtmlChildren['script'][0]> {}
    export interface Section extends TypedElement<'SECTION', HTMLElement, HtmlChildren['section'][0]> {}
    export interface Select extends TypedElement<'SELECT', HTMLSelectElement, HtmlChildren['select'][0]> {}
    export interface Slot extends TypedElement<'SLOT', HTMLSlotElement, HtmlChildren['slot'][0]> {}
    export interface Small extends TypedElement<'SMALL', HTMLElement, HtmlChildren['small'][0]> {}
    export interface Source extends TypedElement<'SOURCE', HTMLSourceElement, HtmlChildren['source']> {}
    export interface Span extends TypedElement<'SPAN', HTMLSpanElement, HtmlChildren['span'][0]> {}
    export interface Strong extends TypedElement<'STRONG', HTMLElement, HtmlChildren['strong'][0]> {}
    export interface Style extends TypedElement<'STYLE', HTMLStyleElement, HtmlChildren['style'][0]> {}
    export interface Sub extends TypedElement<'SUB', HTMLElement, HtmlChildren['sub'][0]> {}
    export interface Summary extends TypedElement<'SUMMARY', HTMLElement, HtmlChildren['summary'][0]> {}
    export interface Sup extends TypedElement<'SUP', HTMLElement, HtmlChildren['sup'][0]> {}
    export interface Table extends TypedElement<'TABLE', HTMLTableElement, HtmlChildren['table'][0]> {}
    export interface Tbody extends TypedElement<'TBODY', HTMLTableSectionElement, HtmlChildren['tbody'][0]> {}
    export interface Td extends TypedElement<'TD', HTMLTableDataCellElement, HtmlChildren['td'][0]> {}
    export interface Template extends TypedElement<'TEMPLATE', HTMLTemplateElement, HtmlChildren['template'][0]> {}
    export interface Textarea extends TypedElement<'TEXTAREA', HTMLTextAreaElement, HtmlChildren['textarea'][0]> {}
    export interface Tfoot extends TypedElement<'TFOOT', HTMLTableSectionElement, HtmlChildren['tfoot'][0]> {}
    export interface Th extends TypedElement<'TH', HTMLTableHeaderCellElement, HtmlChildren['th'][0]> {}
    export interface Thead extends TypedElement<'THEAD', HTMLTableSectionElement, HtmlChildren['thead'][0]> {}
    export interface Time extends TypedElement<'TIME', HTMLTimeElement, HtmlChildren['time'][0]> {}
    export interface Title extends TypedElement<'TITLE', HTMLTitleElement, HtmlChildren['title'][0]> {}
    export interface Tr extends TypedElement<'TR', HTMLTableRowElement, HtmlChildren['tr'][0]> {}
    export interface Track extends TypedElement<'TRACK', HTMLTrackElement, HtmlChildren['track']> {}
    export interface U extends TypedElement<'U', HTMLElement, HtmlChildren['u'][0]> {}
    export interface Ul extends TypedElement<'UL', HTMLUListElement, HtmlChildren['ul'][0]> {}
    export interface Var extends TypedElement<'VAR', HTMLElement, HtmlChildren['var'][0]> {}
    export interface Video extends TypedElement<'VIDEO', HTMLVideoElement, HtmlChildren['video'][0]> {}
    export interface Wbr extends TypedElement<'WBR', HTMLElement, HtmlChildren['wbr']> {}
}
