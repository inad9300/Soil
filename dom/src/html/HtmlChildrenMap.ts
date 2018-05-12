/// Script-generated.

import {HtmlContent} from './HtmlContent'
import {HtmlTypesMap} from './HtmlTypesMap'

/**
 * Map from HTML tag names to the types accepted as children by their
 * corresponding HTML elements.
 */
export interface HtmlChildrenMap {
    a: HtmlContent.TransparentContent[]
    abbr: HtmlContent.PhrasingContent[]
    address: HtmlContent.FlowContent[]
    area: void
    article: HtmlContent.FlowContent[]
    aside: HtmlContent.FlowContent[]
    audio: (HtmlTypesMap['source'] | HtmlContent.TransparentContent)[]
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
    colgroup: (HtmlTypesMap['col'] | HtmlTypesMap['template'])[]
    data: HtmlContent.PhrasingContent[]
    datalist: (HtmlContent.PhrasingContent | HtmlTypesMap['option'])[]
    dd: HtmlContent.FlowContent[]
    del: HtmlContent.TransparentContent[]
    details: (HtmlTypesMap['summary'] | HtmlContent.FlowContent)[]
    dfn: HtmlContent.PhrasingContent[]
    dialog: HtmlContent.FlowContent[]
    div: HtmlContent.FlowContent[]
    dl: (HtmlTypesMap['dt'] | HtmlTypesMap['dd'] | HtmlContent.ScriptSupportingElements)[]
    dt: HtmlContent.FlowContent[]
    em: HtmlContent.PhrasingContent[]
    embed: void
    fieldset: (HtmlTypesMap['legend'] | HtmlContent.FlowContent)[]
    figcaption: HtmlContent.FlowContent[]
    figure: (HtmlTypesMap['figcaption'] | HtmlContent.FlowContent)[]
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
    html: (HtmlTypesMap['head'] | HtmlTypesMap['body'])[]
    i: HtmlContent.PhrasingContent[]
    iframe: (HTMLElement | string)[]
    img: void
    input: void
    ins: HtmlContent.TransparentContent[]
    kbd: HtmlContent.PhrasingContent[]
    label: HtmlContent.PhrasingContent[]
    legend: HtmlContent.PhrasingContent[]
    li: HtmlContent.FlowContent[]
    link: void
    main: HtmlContent.FlowContent[]
    map: (HtmlContent.TransparentContent | HtmlTypesMap['area'])[]
    mark: HtmlContent.PhrasingContent[]
    meta: void
    meter: HtmlContent.PhrasingContent[]
    nav: HtmlContent.FlowContent[]
    noscript: (HTMLElement | SVGSVGElement | string)[]
    object: (HtmlTypesMap['param'] | HtmlContent.TransparentContent)[]
    ol: (HtmlTypesMap['li'] | HtmlContent.ScriptSupportingElements)[]
    optgroup: (HtmlTypesMap['option'] | HtmlContent.ScriptSupportingElements)[]
    option: string[]
    output: HtmlContent.PhrasingContent[]
    p: HtmlContent.PhrasingContent[]
    param: void
    picture: (HtmlTypesMap['source'] | HtmlTypesMap['img'] | HtmlContent.ScriptSupportingElements)[]
    pre: HtmlContent.PhrasingContent[]
    progress: HtmlContent.PhrasingContent[]
    q: HtmlContent.PhrasingContent[]
    rb: HtmlContent.PhrasingContent[]
    rp: HtmlContent.PhrasingContent[]
    rt: HtmlContent.PhrasingContent[]
    rtc: HtmlContent.PhrasingContent[]
    ruby: (HtmlContent.PhrasingContent | HtmlTypesMap['rp'] | HtmlTypesMap['rt'] | HtmlTypesMap['rb'] | HtmlTypesMap['rtc'])[]
    s: HtmlContent.PhrasingContent[]
    samp: HtmlContent.PhrasingContent[]
    script: string[]
    section: HtmlContent.FlowContent[]
    select: (HtmlTypesMap['option'] | HtmlTypesMap['optgroup'] | HtmlContent.ScriptSupportingElements)[]
    small: HtmlContent.PhrasingContent[]
    source: void
    span: HtmlContent.PhrasingContent[]
    strong: HtmlContent.PhrasingContent[]
    style: (HTMLElement | SVGSVGElement | string)[]
    sub: HtmlContent.PhrasingContent[]
    summary: HtmlContent.PhrasingContent[]
    sup: HtmlContent.PhrasingContent[]
    table: (HtmlTypesMap['caption'] | HtmlTypesMap['colgroup'] | HtmlTypesMap['thead'] | HtmlTypesMap['tbody'] | HtmlTypesMap['tfoot'] | HtmlTypesMap['tr'] | HtmlContent.ScriptSupportingElements)[]
    tbody: (HtmlTypesMap['tr'] | HtmlContent.ScriptSupportingElements)[]
    td: HtmlContent.FlowContent[]
    template: (HTMLElement | SVGSVGElement | string)[]
    textarea: string[]
    tfoot: (HtmlTypesMap['tr'] | HtmlContent.ScriptSupportingElements)[]
    th: HtmlContent.FlowContent[]
    thead: (HtmlTypesMap['tr'] | HtmlContent.ScriptSupportingElements)[]
    time: HtmlContent.PhrasingContent[]
    title: string[]
    tr: (HtmlTypesMap['th'] | HtmlTypesMap['td'] | HtmlContent.ScriptSupportingElements)[]
    track: void
    u: HtmlContent.PhrasingContent[]
    ul: (HtmlTypesMap['li'] | HtmlContent.ScriptSupportingElements)[]
    var: HtmlContent.PhrasingContent[]
    video: (HtmlTypesMap['source'] | HtmlContent.TransparentContent)[]
    wbr: void
}
