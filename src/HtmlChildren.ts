/// Script-generated.

import {HtmlContent} from './HtmlContent'
import {HtmlTypes} from './HtmlTypes'

/**
 * Map from HTML tag names to the types accepted as children by their
 * corresponding HTML elements.
 */
export interface HtmlChildren {
    a: HtmlContent.TransparentContent[]
    abbr: HtmlContent.PhrasingContent[]
    address: HtmlContent.FlowContent[]
    area: void
    article: HtmlContent.FlowContent[]
    aside: HtmlContent.FlowContent[]
    audio: (HtmlTypes['source'] | HtmlContent.TransparentContent)[]
    b: HtmlContent.PhrasingContent[]
    base: void
    bdi: HtmlContent.PhrasingContent[]
    bdo: HtmlContent.PhrasingContent[]
    blockquote: HtmlContent.FlowContent[]
    body: HtmlContent.FlowContent[]
    br: void
    button: HtmlContent.PhrasingContent[]
    canvas: HtmlContent.TransparentContent[]
    caption: HtmlContent.FlowContent[]
    cite: HtmlContent.PhrasingContent[]
    code: HtmlContent.PhrasingContent[]
    col: void
    colgroup: (HtmlTypes['col'] | HtmlTypes['template'])[]
    data: HtmlContent.PhrasingContent[]
    datalist: (HtmlContent.PhrasingContent | HtmlTypes['option'])[]
    dd: HtmlContent.FlowContent[]
    del: HtmlContent.TransparentContent[]
    details: (HtmlTypes['summary'] | HtmlContent.FlowContent)[]
    dfn: HtmlContent.PhrasingContent[]
    dialog: HtmlContent.FlowContent[]
    div: HtmlContent.FlowContent[]
    dl: (HtmlTypes['dt'] | HtmlTypes['dd'] | HtmlContent.ScriptSupportingElements)[]
    dt: HtmlContent.FlowContent[]
    em: HtmlContent.PhrasingContent[]
    embed: void
    fieldset: (HtmlTypes['legend'] | HtmlContent.FlowContent)[]
    figcaption: HtmlContent.FlowContent[]
    figure: (HtmlTypes['figcaption'] | HtmlContent.FlowContent)[]
    footer: HtmlContent.FlowContent[]
    form: HtmlContent.FlowContent[]
    h1: HtmlContent.PhrasingContent[]
    h2: HtmlContent.PhrasingContent[]
    h3: HtmlContent.PhrasingContent[]
    h4: HtmlContent.PhrasingContent[]
    h5: HtmlContent.PhrasingContent[]
    h6: HtmlContent.PhrasingContent[]
    head: HtmlContent.MetadataContent[]
    header: HtmlContent.FlowContent[]
    hr: void
    html: (HtmlTypes['head'] | HtmlTypes['body'])[]
    i: HtmlContent.PhrasingContent[]
    iframe: (string | HTMLElement)[]
    img: void
    input: void
    ins: HtmlContent.TransparentContent[]
    kbd: HtmlContent.PhrasingContent[]
    label: HtmlContent.PhrasingContent[]
    legend: HtmlContent.PhrasingContent[]
    li: HtmlContent.FlowContent[]
    link: void
    main: HtmlContent.FlowContent[]
    map: (HtmlContent.TransparentContent | HtmlTypes['area'])[]
    mark: HtmlContent.PhrasingContent[]
    meta: void
    meter: HtmlContent.PhrasingContent[]
    nav: HtmlContent.FlowContent[]
    noscript: (string | HTMLElement | SVGSVGElement)[]
    object: (HtmlTypes['param'] | HtmlContent.TransparentContent)[]
    ol: (HtmlTypes['li'] | HtmlContent.ScriptSupportingElements)[]
    optgroup: (HtmlTypes['option'] | HtmlContent.ScriptSupportingElements)[]
    option: string[]
    output: HtmlContent.PhrasingContent[]
    p: HtmlContent.PhrasingContent[]
    param: void
    picture: (HtmlTypes['source'] | HtmlTypes['img'] | HtmlContent.ScriptSupportingElements)[]
    pre: HtmlContent.PhrasingContent[]
    progress: HtmlContent.PhrasingContent[]
    q: HtmlContent.PhrasingContent[]
    rb: HtmlContent.PhrasingContent[]
    rp: HtmlContent.PhrasingContent[]
    rt: HtmlContent.PhrasingContent[]
    rtc: HtmlContent.PhrasingContent[]
    ruby: (HtmlContent.PhrasingContent | HtmlTypes['rp'] | HtmlTypes['rt'] | HtmlTypes['rb'] | HtmlTypes['rtc'])[]
    s: HtmlContent.PhrasingContent[]
    samp: HtmlContent.PhrasingContent[]
    script: string[]
    section: HtmlContent.FlowContent[]
    select: (HtmlTypes['option'] | HtmlTypes['optgroup'] | HtmlContent.ScriptSupportingElements)[]
    small: HtmlContent.PhrasingContent[]
    source: void
    span: HtmlContent.PhrasingContent[]
    strong: HtmlContent.PhrasingContent[]
    style: (string | HTMLElement | SVGSVGElement)[]
    sub: HtmlContent.PhrasingContent[]
    summary: HtmlContent.PhrasingContent[]
    sup: HtmlContent.PhrasingContent[]
    table: (HtmlTypes['caption'] | HtmlTypes['colgroup'] | HtmlTypes['thead'] | HtmlTypes['tbody'] | HtmlTypes['tfoot'] | HtmlTypes['tr'] | HtmlContent.ScriptSupportingElements)[]
    tbody: (HtmlTypes['tr'] | HtmlContent.ScriptSupportingElements)[]
    td: HtmlContent.FlowContent[]
    template: (string | HTMLElement | SVGSVGElement)[]
    textarea: string[]
    tfoot: (HtmlTypes['tr'] | HtmlContent.ScriptSupportingElements)[]
    th: HtmlContent.FlowContent[]
    thead: (HtmlTypes['tr'] | HtmlContent.ScriptSupportingElements)[]
    time: HtmlContent.PhrasingContent[]
    title: string[]
    tr: (HtmlTypes['th'] | HtmlTypes['td'] | HtmlContent.ScriptSupportingElements)[]
    track: void
    u: HtmlContent.PhrasingContent[]
    ul: (HtmlTypes['li'] | HtmlContent.ScriptSupportingElements)[]
    var: HtmlContent.PhrasingContent[]
    video: (HtmlTypes['source'] | HtmlContent.TransparentContent)[]
    wbr: void
}

/**
 * Deprecated elements still declared in `HTMLElementTagNameMap`.
 */
export interface HtmlChildren {
    applet: void | (string | Element)[]
    basefont: void | (string | Element)[]
    dir: void | (string | Element)[]
    font: void | (string | Element)[]
    frame: void | (string | Element)[]
    frameset: void | (string | Element)[]
    hgroup: void | (string | Element)[]
    marquee: void | (string | Element)[]
    menu: void | (string | Element)[]
    slot: void | (string | Element)[]
}
