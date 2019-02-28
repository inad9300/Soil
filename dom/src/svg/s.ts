import {addChildren} from '../addChildren'
import {assignProps} from '../assignProps'
import {Props} from '../Props'

/**
 * Factory function for SVG elements.
 */
function svg<T extends keyof SVGElementTagNameMap>(tag: T) {
    return (props?: Props<SVGElementTagNameMap[T]>, children?: (string | Element)[]): SVGElementTagNameMap[T] => {
        const elem = document.createElementNS('http://www.w3.org/2000/svg', tag)
        if (props !== undefined) {
            assignProps(elem, props)
        }
        if (children !== undefined) {
            addChildren(elem, children)
        }
        return elem
    }
}

type S = {
    [T in keyof SVGElementTagNameMap]:
        (props?: Props<SVGElementTagNameMap[T]>, children?: (string | Element)[]) => SVGElementTagNameMap[T]
}

/**
 * Helpers to facilitate the concise creation of any SVG element.
 *
 * NOTE The following functions silently depend on the `document` variable
 * being globally available. Therefore, unit tests of components that use them
 * must be run inside a browser, or must expose `document` globally, e.g.
 * through PhantomJS or jsdom.
 */
export const s: S = {
    a: svg('a'),
    circle: svg('circle'),
    clipPath: svg('clipPath'),
    defs: svg('defs'),
    desc: svg('desc'),
    ellipse: svg('ellipse'),
    feBlend: svg('feBlend'),
    feColorMatrix: svg('feColorMatrix'),
    feComponentTransfer: svg('feComponentTransfer'),
    feComposite: svg('feComposite'),
    feConvolveMatrix: svg('feConvolveMatrix'),
    feDiffuseLighting: svg('feDiffuseLighting'),
    feDisplacementMap: svg('feDisplacementMap'),
    feDistantLight: svg('feDistantLight'),
    feFlood: svg('feFlood'),
    feFuncA: svg('feFuncA'),
    feFuncB: svg('feFuncB'),
    feFuncG: svg('feFuncG'),
    feFuncR: svg('feFuncR'),
    feGaussianBlur: svg('feGaussianBlur'),
    feImage: svg('feImage'),
    feMerge: svg('feMerge'),
    feMergeNode: svg('feMergeNode'),
    feMorphology: svg('feMorphology'),
    feOffset: svg('feOffset'),
    fePointLight: svg('fePointLight'),
    feSpecularLighting: svg('feSpecularLighting'),
    feSpotLight: svg('feSpotLight'),
    feTile: svg('feTile'),
    feTurbulence: svg('feTurbulence'),
    filter: svg('filter'),
    foreignObject: svg('foreignObject'),
    g: svg('g'),
    gradient: svg('gradient'),
    image: svg('image'),
    line: svg('line'),
    linearGradient: svg('linearGradient'),
    marker: svg('marker'),
    mask: svg('mask'),
    metadata: svg('metadata'),
    path: svg('path'),
    pattern: svg('pattern'),
    polygon: svg('polygon'),
    polyline: svg('polyline'),
    radialGradient: svg('radialGradient'),
    rect: svg('rect'),
    script: svg('script'),
    stop: svg('stop'),
    style: svg('style'),
    svg: svg('svg'),
    switch: svg('switch'),
    symbol: svg('symbol'),
    text: svg('text'),
    textPath: svg('textPath'),
    title: svg('title'),
    tspan: svg('tspan'),
    use: svg('use'),
    view: svg('view'),
}

/**
 * Nice-to-remember aliases for all SVG element interfaces.
 */
export namespace s {
    export type A = SVGAElement
    export type Circle = SVGCircleElement
    export type ClipPath = SVGClipPathElement
    export type Defs = SVGDefsElement
    export type Desc = SVGDescElement
    export type Ellipse = SVGEllipseElement
    export type FeBlend = SVGFEBlendElement
    export type FeColorMatrix = SVGFEColorMatrixElement
    export type FeComponentTransfer = SVGFEComponentTransferElement
    export type FeComposite = SVGFECompositeElement
    export type FeConvolveMatrix = SVGFEConvolveMatrixElement
    export type FeDiffuseLighting = SVGFEDiffuseLightingElement
    export type FeDisplacementMap = SVGFEDisplacementMapElement
    export type FeDistantLight = SVGFEDistantLightElement
    export type FeFlood = SVGFEFloodElement
    export type FeFuncA = SVGFEFuncAElement
    export type FeFuncB = SVGFEFuncBElement
    export type FeFuncG = SVGFEFuncGElement
    export type FeFuncR = SVGFEFuncRElement
    export type FeGaussianBlur = SVGFEGaussianBlurElement
    export type FeImage = SVGFEImageElement
    export type FeMerge = SVGFEMergeElement
    export type FeMergeNode = SVGFEMergeNodeElement
    export type FeMorphology = SVGFEMorphologyElement
    export type FeOffset = SVGFEOffsetElement
    export type FePointLight = SVGFEPointLightElement
    export type FeSpecularLighting = SVGFESpecularLightingElement
    export type FeSpotLight = SVGFESpotLightElement
    export type FeTile = SVGFETileElement
    export type FeTurbulence = SVGFETurbulenceElement
    export type Filter = SVGFilterElement
    export type ForeignObject = SVGForeignObjectElement
    export type G = SVGGElement
    export type Gradient = SVGGradientElement
    export type Image = SVGImageElement
    export type Line = SVGLineElement
    export type LinearGradient = SVGLinearGradientElement
    export type Marker = SVGMarkerElement
    export type Mask = SVGMaskElement
    export type Metadata = SVGMetadataElement
    export type Path = SVGPathElement
    export type Pattern = SVGPatternElement
    export type Polygon = SVGPolygonElement
    export type Polyline = SVGPolylineElement
    export type RadialGradient = SVGRadialGradientElement
    export type Rect = SVGRectElement
    export type Script = SVGScriptElement
    export type Stop = SVGStopElement
    export type Style = SVGStyleElement
    export type Svg = SVGSVGElement
    export type Switch = SVGSwitchElement
    export type Symbol = SVGSymbolElement
    export type Text = SVGTextElement
    export type TextPath = SVGTextPathElement
    export type Title = SVGTitleElement
    export type Tspan = SVGTSpanElement
    export type Use = SVGUseElement
    export type View = SVGViewElement
}
