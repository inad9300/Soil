/**
 * Set of helper functions to facilitate the work with SVG elements, specially their creation.
 *
 * NOTE The following functions silently depend on the `document` variable being globally available. Therefore, unit
 * tests of components that use them must be run inside a browser, or must expose `document` globally, e.g. through
 * PhantomJS or jsdom.
 *
 * The SVG elements considered below are based on the TypeScript (2.6.2) types for the `createElementNS()` function.
 * Some information was completed based on MDN's [SVG element reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Element).
 */

import {assignProperties} from './assignProperties'
import {DeepPartial} from '../extra/DeepPartial'

/**
 * List of all SVG tag names.
 */
export type SVGTag
    = 'a'
    | 'circle'
    | 'clipPath'
    | 'componentTransferFunction'
    | 'defs'
    | 'desc'
    | 'ellipse'
    | 'feBlend'
    | 'feColorMatrix'
    | 'feComponentTransfer'
    | 'feComposite'
    | 'feConvolveMatrix'
    | 'feDiffuseLighting'
    | 'feDisplacementMap'
    | 'feDistantLight'
    | 'feFlood'
    | 'feFuncA'
    | 'feFuncB'
    | 'feFuncG'
    | 'feFuncR'
    | 'feGaussianBlur'
    | 'feImage'
    | 'feMerge'
    | 'feMergeNode'
    | 'feMorphology'
    | 'feOffset'
    | 'fePointLight'
    | 'feSpecularLighting'
    | 'feSpotLight'
    | 'feTile'
    | 'feTurbulence'
    | 'filter'
    | 'foreignObject'
    | 'g'
    | 'gradient'
    | 'image'
    | 'line'
    | 'linearGradient'
    | 'marker'
    | 'mask'
    | 'metadata'
    | 'path'
    | 'pattern'
    | 'polygon'
    | 'polyline'
    | 'radialGradient'
    | 'rect'
    | 'script'
    | 'stop'
    | 'style'
    | 'svg'
    | 'switch'
    | 'symbol'
    | 'text'
    | 'textContent'
    | 'textPath'
    | 'textPositioning'
    | 'title'
    | 'tspan'
    | 'use'
    | 'view'

/**
 * Aliases for SVG element types, whose native counterparts are not always easy to guess or find.
 */
export type A = SVGAElement
export type Circle = SVGCircleElement
export type ClipPath = SVGClipPathElement
export type ComponentTransferFunction = SVGComponentTransferFunctionElement
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
export type TextContent = SVGTextContentElement
export type TextPath = SVGTextPathElement
export type TextPositioning = SVGTextPositioningElement
export type Title = SVGTitleElement
export type Tspan = SVGTSpanElement
export type Use = SVGUseElement
export type View = SVGViewElement

/**
 * Map from SVG tag names to their corresponding types.
 */
export interface SVGTagMap {
    a: A
    circle: Circle
    clipPath: ClipPath
    componentTransferFunction: ComponentTransferFunction
    defs: Defs
    desc: Desc
    ellipse: Ellipse
    feBlend: FeBlend
    feColorMatrix: FeColorMatrix
    feComponentTransfer: FeComponentTransfer
    feComposite: FeComposite
    feConvolveMatrix: FeConvolveMatrix
    feDiffuseLighting: FeDiffuseLighting
    feDisplacementMap: FeDisplacementMap
    feDistantLight: FeDistantLight
    feFlood: FeFlood
    feFuncA: FeFuncA
    feFuncB: FeFuncB
    feFuncG: FeFuncG
    feFuncR: FeFuncR
    feGaussianBlur: FeGaussianBlur
    feImage: FeImage
    feMerge: FeMerge
    feMergeNode: FeMergeNode
    feMorphology: FeMorphology
    feOffset: FeOffset
    fePointLight: FePointLight
    feSpecularLighting: FeSpecularLighting
    feSpotLight: FeSpotLight
    feTile: FeTile
    feTurbulence: FeTurbulence
    filter: Filter
    foreignObject: ForeignObject
    g: G
    gradient: Gradient
    image: Image
    line: Line
    linearGradient: LinearGradient
    marker: Marker
    mask: Mask
    metadata: Metadata
    path: Path
    pattern: Pattern
    polygon: Polygon
    polyline: Polyline
    radialGradient: RadialGradient
    rect: Rect
    script: Script
    stop: Stop
    style: Style
    svg: Svg
    switch: Switch
    symbol: Symbol
    text: Text
    textContent: TextContent
    textPath: TextPath
    textPositioning: TextPositioning
    title: Title
    tspan: Tspan
    use: Use
    view: View
}

/**
 * Allowed types for the children of SVG elements.
 */
export type SVGChildren = string | (SVGElement | string)[]

/**
 * Allowed types for the properties of SVG elements.
 */
export type SVGProperties<E extends SVGElement = SVGElement> = DeepPartial<E> & {[prop: string]: any}

/**
 * Helper function to concisely create instances of any SVG element.
 */
export function s<K extends keyof SVGTagMap>(name: K, props?: SVGProperties<SVGTagMap[K]>, children?: SVGChildren): SVGTagMap[K] {
    const elem: SVGTagMap[K] = document.createElementNS('http://www.w3.org/2000/svg', name)

    if (props !== undefined) {
        assignProperties<SVGTagMap[K], SVGProperties<SVGTagMap[K]>>(elem, props)
    }

    if (children !== undefined) {
        if (typeof children === 'string') {
            elem.appendChild(document.createTextNode(children))
        } else {
            children.forEach(child => elem.appendChild(
                typeof child === 'string'
                    ? document.createTextNode(child)
                    : child
            ))
        }
    }

    return elem
}

/**
 * Helpers to allow creating any concrete SVG element in a more concise manner.
 */
export const a = (props?: DeepPartial<A>, children?: SVGChildren): A => s('a', props, children)
export const circle = (props?: DeepPartial<Circle>, children?: SVGChildren): Circle => s('circle', props, children)
export const clipPath = (props?: DeepPartial<ClipPath>, children?: SVGChildren): ClipPath => s('clipPath', props, children)
export const componentTransferFunction = (props?: DeepPartial<ComponentTransferFunction>, children?: SVGChildren): ComponentTransferFunction => s('componentTransferFunction', props, children)
export const defs = (props?: DeepPartial<Defs>, children?: SVGChildren): Defs => s('defs', props, children)
export const desc = (props?: DeepPartial<Desc>, children?: SVGChildren): Desc => s('desc', props, children)
export const ellipse = (props?: DeepPartial<Ellipse>, children?: SVGChildren): Ellipse => s('ellipse', props, children)
export const feBlend = (props?: DeepPartial<FeBlend>, children?: SVGChildren): FeBlend => s('feBlend', props, children)
export const feColorMatrix = (props?: DeepPartial<FeColorMatrix>, children?: SVGChildren): FeColorMatrix => s('feColorMatrix', props, children)
export const feComponentTransfer = (props?: DeepPartial<FeComponentTransfer>, children?: SVGChildren): FeComponentTransfer => s('feComponentTransfer', props, children)
export const feComposite = (props?: DeepPartial<FeComposite>, children?: SVGChildren): FeComposite => s('feComposite', props, children)
export const feConvolveMatrix = (props?: DeepPartial<FeConvolveMatrix>, children?: SVGChildren): FeConvolveMatrix => s('feConvolveMatrix', props, children)
export const feDiffuseLighting = (props?: DeepPartial<FeDiffuseLighting>, children?: SVGChildren): FeDiffuseLighting => s('feDiffuseLighting', props, children)
export const feDisplacementMap = (props?: DeepPartial<FeDisplacementMap>, children?: SVGChildren): FeDisplacementMap => s('feDisplacementMap', props, children)
export const feDistantLight = (props?: DeepPartial<FeDistantLight>, children?: SVGChildren): FeDistantLight => s('feDistantLight', props, children)
export const feFlood = (props?: DeepPartial<FeFlood>, children?: SVGChildren): FeFlood => s('feFlood', props, children)
export const feFuncA = (props?: DeepPartial<FeFuncA>, children?: SVGChildren): FeFuncA => s('feFuncA', props, children)
export const feFuncB = (props?: DeepPartial<FeFuncB>, children?: SVGChildren): FeFuncB => s('feFuncB', props, children)
export const feFuncG = (props?: DeepPartial<FeFuncG>, children?: SVGChildren): FeFuncG => s('feFuncG', props, children)
export const feFuncR = (props?: DeepPartial<FeFuncR>, children?: SVGChildren): FeFuncR => s('feFuncR', props, children)
export const feGaussianBlur = (props?: DeepPartial<FeGaussianBlur>, children?: SVGChildren): FeGaussianBlur => s('feGaussianBlur', props, children)
export const feImage = (props?: DeepPartial<FeImage>, children?: SVGChildren): FeImage => s('feImage', props, children)
export const feMerge = (props?: DeepPartial<FeMerge>, children?: SVGChildren): FeMerge => s('feMerge', props, children)
export const feMergeNode = (props?: DeepPartial<FeMergeNode>, children?: SVGChildren): FeMergeNode => s('feMergeNode', props, children)
export const feMorphology = (props?: DeepPartial<FeMorphology>, children?: SVGChildren): FeMorphology => s('feMorphology', props, children)
export const feOffset = (props?: DeepPartial<FeOffset>, children?: SVGChildren): FeOffset => s('feOffset', props, children)
export const fePointLight = (props?: DeepPartial<FePointLight>, children?: SVGChildren): FePointLight => s('fePointLight', props, children)
export const feSpecularLighting = (props?: DeepPartial<FeSpecularLighting>, children?: SVGChildren): FeSpecularLighting => s('feSpecularLighting', props, children)
export const feSpotLight = (props?: DeepPartial<FeSpotLight>, children?: SVGChildren): FeSpotLight => s('feSpotLight', props, children)
export const feTile = (props?: DeepPartial<FeTile>, children?: SVGChildren): FeTile => s('feTile', props, children)
export const feTurbulence = (props?: DeepPartial<FeTurbulence>, children?: SVGChildren): FeTurbulence => s('feTurbulence', props, children)
export const filter = (props?: DeepPartial<Filter>, children?: SVGChildren): Filter => s('filter', props, children)
export const foreignObject = (props?: DeepPartial<ForeignObject>, children?: SVGChildren): ForeignObject => s('foreignObject', props, children)
export const g = (props?: DeepPartial<G>, children?: SVGChildren): G => s('g', props, children)
export const gradient = (props?: DeepPartial<Gradient>, children?: SVGChildren): Gradient => s('gradient', props, children)
export const image = (props?: DeepPartial<Image>, children?: SVGChildren): Image => s('image', props, children)
export const line = (props?: DeepPartial<Line>, children?: SVGChildren): Line => s('line', props, children)
export const linearGradient = (props?: DeepPartial<LinearGradient>, children?: SVGChildren): LinearGradient => s('linearGradient', props, children)
export const marker = (props?: DeepPartial<Marker>, children?: SVGChildren): Marker => s('marker', props, children)
export const mask = (props?: DeepPartial<Mask>, children?: SVGChildren): Mask => s('mask', props, children)
export const metadata = (props?: DeepPartial<Metadata>, children?: SVGChildren): Metadata => s('metadata', props, children)
export const path = (props?: DeepPartial<Path>, children?: SVGChildren): Path => s('path', props, children)
export const pattern = (props?: DeepPartial<Pattern>, children?: SVGChildren): Pattern => s('pattern', props, children)
export const polygon = (props?: DeepPartial<Polygon>, children?: SVGChildren): Polygon => s('polygon', props, children)
export const polyline = (props?: DeepPartial<Polyline>, children?: SVGChildren): Polyline => s('polyline', props, children)
export const radialGradient = (props?: DeepPartial<RadialGradient>, children?: SVGChildren): RadialGradient => s('radialGradient', props, children)
export const rect = (props?: DeepPartial<Rect>, children?: SVGChildren): Rect => s('rect', props, children)
export const script = (props?: DeepPartial<Script>, child?: string): Script => s('script', props, child)
export const stop = (props?: DeepPartial<Stop>, children?: SVGChildren): Stop => s('stop', props, children)
export const style = (props?: DeepPartial<Style>, child?: string): Style => s('style', props, child)
export const svg = (props?: DeepPartial<Svg>, children?: SVGChildren): Svg => s('svg', props, children)
// Reserved word suffixed with "_".
export const switch_ = (props?: DeepPartial<Switch>, children?: SVGChildren): Switch => s('switch', props, children)
export const symbol = (props?: DeepPartial<Symbol>, children?: SVGChildren): Symbol => s('symbol', props, children)
export const text = (props?: DeepPartial<Text>, children?: SVGChildren): Text => s('text', props, children)
export const textContent = (props?: DeepPartial<TextContent>, children?: SVGChildren): TextContent => s('textContent', props, children)
export const textPath = (props?: DeepPartial<TextPath>, children?: SVGChildren): TextPath => s('textPath', props, children)
export const textPositioning = (props?: DeepPartial<TextPositioning>, children?: SVGChildren): TextPositioning => s('textPositioning', props, children)
export const title = (props?: DeepPartial<Title>, children?: SVGChildren): Title => s('title', props, children)
export const tspan = (props?: DeepPartial<Tspan>, children?: SVGChildren): Tspan => s('tspan', props, children)
export const use = (props?: DeepPartial<Use>, children?: SVGChildren): Use => s('use', props, children)
export const view = (props?: DeepPartial<View>, children?: SVGChildren): View => s('view', props, children)
