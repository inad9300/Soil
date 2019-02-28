/// Script-generated.

import {HTMLElementContent} from './HTMLElementContent'

/**
 * Map from HTML tag names to the types accepted as children by their
 * corresponding HTML elements.
 */
export interface HTMLElementChildrenMap extends Record<keyof HTMLElementTagNameMap, never | (string | Element)[]> {
    a: HTMLElementContent.TransparentContent[]
    abbr: HTMLElementContent.PhrasingContent[]
    address: HTMLElementContent.FlowContent[]
    area: never
    article: HTMLElementContent.FlowContent[]
    aside: HTMLElementContent.FlowContent[]
    audio: (HTMLElementTagNameMap['source'] | HTMLElementContent.TransparentContent)[]
    b: HTMLElementContent.PhrasingContent[]
    base: never
    bdi: HTMLElementContent.PhrasingContent[]
    bdo: HTMLElementContent.PhrasingContent[]
    blockquote: HTMLElementContent.FlowContent[]
    body: HTMLElementContent.FlowContent[]
    br: never
    button: HTMLElementContent.PhrasingContent[]
    canvas: HTMLElementContent.TransparentContent[]
    caption: HTMLElementContent.FlowContent[]
    cite: HTMLElementContent.PhrasingContent[]
    code: HTMLElementContent.PhrasingContent[]
    col: never
    colgroup: (HTMLElementTagNameMap['col'] | HTMLElementTagNameMap['template'])[]
    data: HTMLElementContent.PhrasingContent[]
    datalist: (HTMLElementContent.PhrasingContent | HTMLElementTagNameMap['option'])[]
    dd: HTMLElementContent.FlowContent[]
    del: HTMLElementContent.TransparentContent[]
    details: (HTMLElementTagNameMap['summary'] | HTMLElementContent.FlowContent)[]
    dfn: HTMLElementContent.PhrasingContent[]
    dialog: HTMLElementContent.FlowContent[]
    div: HTMLElementContent.FlowContent[]
    dl: (HTMLElementTagNameMap['dt'] | HTMLElementTagNameMap['dd'] | HTMLElementContent.ScriptSupportingElements)[]
    dt: HTMLElementContent.FlowContent[]
    em: HTMLElementContent.PhrasingContent[]
    embed: never
    fieldset: (HTMLElementTagNameMap['legend'] | HTMLElementContent.FlowContent)[]
    figcaption: HTMLElementContent.FlowContent[]
    figure: (HTMLElementTagNameMap['figcaption'] | HTMLElementContent.FlowContent)[]
    footer: HTMLElementContent.FlowContent[]
    form: HTMLElementContent.FlowContent[]
    h1: HTMLElementContent.PhrasingContent[]
    h2: HTMLElementContent.PhrasingContent[]
    h3: HTMLElementContent.PhrasingContent[]
    h4: HTMLElementContent.PhrasingContent[]
    h5: HTMLElementContent.PhrasingContent[]
    h6: HTMLElementContent.PhrasingContent[]
    head: HTMLElementContent.MetadataContent[]
    header: HTMLElementContent.FlowContent[]
    hr: never
    html: (HTMLElementTagNameMap['head'] | HTMLElementTagNameMap['body'])[]
    i: HTMLElementContent.PhrasingContent[]
    iframe: (string | HTMLElement)[]
    img: never
    input: never
    ins: HTMLElementContent.TransparentContent[]
    kbd: HTMLElementContent.PhrasingContent[]
    label: HTMLElementContent.PhrasingContent[]
    legend: HTMLElementContent.PhrasingContent[]
    li: HTMLElementContent.FlowContent[]
    link: never
    main: HTMLElementContent.FlowContent[]
    map: (HTMLElementContent.TransparentContent | HTMLElementTagNameMap['area'])[]
    mark: HTMLElementContent.PhrasingContent[]
    meta: never
    meter: HTMLElementContent.PhrasingContent[]
    nav: HTMLElementContent.FlowContent[]
    noscript: (string | HTMLElement | SVGSVGElement)[]
    object: (HTMLElementTagNameMap['param'] | HTMLElementContent.TransparentContent)[]
    ol: (HTMLElementTagNameMap['li'] | HTMLElementContent.ScriptSupportingElements)[]
    optgroup: (HTMLElementTagNameMap['option'] | HTMLElementContent.ScriptSupportingElements)[]
    option: string[]
    output: HTMLElementContent.PhrasingContent[]
    p: HTMLElementContent.PhrasingContent[]
    param: never
    picture: (HTMLElementTagNameMap['source'] | HTMLElementTagNameMap['img'] | HTMLElementContent.ScriptSupportingElements)[]
    pre: HTMLElementContent.PhrasingContent[]
    progress: HTMLElementContent.PhrasingContent[]
    q: HTMLElementContent.PhrasingContent[]
    rb: HTMLElementContent.PhrasingContent[]
    rp: HTMLElementContent.PhrasingContent[]
    rt: HTMLElementContent.PhrasingContent[]
    rtc: HTMLElementContent.PhrasingContent[]
    ruby: (HTMLElementContent.PhrasingContent | HTMLElementTagNameMap['rp'] | HTMLElementTagNameMap['rt'] | HTMLElementTagNameMap['rb'] | HTMLElementTagNameMap['rtc'])[]
    s: HTMLElementContent.PhrasingContent[]
    samp: HTMLElementContent.PhrasingContent[]
    script: string[]
    section: HTMLElementContent.FlowContent[]
    select: (HTMLElementTagNameMap['option'] | HTMLElementTagNameMap['optgroup'] | HTMLElementContent.ScriptSupportingElements)[]
    small: HTMLElementContent.PhrasingContent[]
    source: never
    span: HTMLElementContent.PhrasingContent[]
    strong: HTMLElementContent.PhrasingContent[]
    style: (string | HTMLElement | SVGSVGElement)[]
    sub: HTMLElementContent.PhrasingContent[]
    summary: HTMLElementContent.PhrasingContent[]
    sup: HTMLElementContent.PhrasingContent[]
    table: (HTMLElementTagNameMap['caption'] | HTMLElementTagNameMap['colgroup'] | HTMLElementTagNameMap['thead'] | HTMLElementTagNameMap['tbody'] | HTMLElementTagNameMap['tfoot'] | HTMLElementTagNameMap['tr'] | HTMLElementContent.ScriptSupportingElements)[]
    tbody: (HTMLElementTagNameMap['tr'] | HTMLElementContent.ScriptSupportingElements)[]
    td: HTMLElementContent.FlowContent[]
    template: (string | HTMLElement | SVGSVGElement)[]
    textarea: string[]
    tfoot: (HTMLElementTagNameMap['tr'] | HTMLElementContent.ScriptSupportingElements)[]
    th: HTMLElementContent.FlowContent[]
    thead: (HTMLElementTagNameMap['tr'] | HTMLElementContent.ScriptSupportingElements)[]
    time: HTMLElementContent.PhrasingContent[]
    title: string[]
    tr: (HTMLElementTagNameMap['th'] | HTMLElementTagNameMap['td'] | HTMLElementContent.ScriptSupportingElements)[]
    track: never
    u: HTMLElementContent.PhrasingContent[]
    ul: (HTMLElementTagNameMap['li'] | HTMLElementContent.ScriptSupportingElements)[]
    var: HTMLElementContent.PhrasingContent[]
    video: (HTMLElementTagNameMap['source'] | HTMLElementContent.TransparentContent)[]
    wbr: never
}
