// Set of helper functions to facilitate the work with SVG elements, specially their creation.

// NOTE The following functions silently depend on the `document` variable being globally available. Therefore, unit
// tests of components that use them must be run inside a browser, or must expose `document` globally, e.g. through
// PhantomJS or jsdom.

// The SVG elements considered below are based on the TypeScript (version 2.5.2) types for the `createElementNS()`
// function. Some information is completed based on MDN's SVG element reference available at
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element.

import {assignProperties} from './assignProperties'
import {DeepPartial} from '../extra/DeepPartial'

/**
 * List of all SVG tag names.
 */
export type SvgTag
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
 * Aliases for SVG tag types, whose native counterparts are not always easy to guess or find.
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
 * Allowed types for the children of SVG elements.
 */
export type SVGElementChildren = SVGElement[] | string

/**
 * Allowed types for the properties of SVG elements.
 */
export type SVGElementProperties = DeepPartial<SVGElement> & {[prop: string]: any}

/**
 * Helper function to concisely create instances of any SVG element.
 */
export function s(name: SvgTag, props?: SVGElementProperties, children?: SVGElementChildren): SVGElement {
    const elem = document.createElementNS('http://www.w3.org/2000/svg', name)

    if (props !== undefined) {
        assignProperties<SVGElement, SVGElementProperties>(elem, props)
    }

    if (children !== undefined) {
        if (typeof children === 'string') {
            elem.appendChild(document.createTextNode(children))
        } else {
            children.forEach(child => elem.appendChild(child))
        }
    }

    return elem
}

/**
 * Helpers to allow creating any concrete SVG element. Prefer over the generic `s()` function, as the types of these
 * are stricter, e.g. they return a type more specialized than `SVGElement`.
 */
export const a = (props?: DeepPartial<A>, children?: SVGElementChildren): A => s('a', props, children) as A
export const circle = (props?: DeepPartial<Circle>, children?: SVGElementChildren): Circle => s('circle', props, children) as Circle
export const clipPath = (props?: DeepPartial<ClipPath>, children?: SVGElementChildren): ClipPath => s('clipPath', props, children) as ClipPath
export const componentTransferFunction = (props?: DeepPartial<ComponentTransferFunction>, children?: SVGElementChildren): ComponentTransferFunction => s('componentTransferFunction', props, children) as ComponentTransferFunction
export const defs = (props?: DeepPartial<Defs>, children?: SVGElementChildren): Defs => s('defs', props, children) as Defs
export const desc = (props?: DeepPartial<Desc>, children?: SVGElementChildren): Desc => s('desc', props, children) as Desc
export const ellipse = (props?: DeepPartial<Ellipse>, children?: SVGElementChildren): Ellipse => s('ellipse', props, children) as Ellipse
export const feBlend = (props?: DeepPartial<FeBlend>, children?: SVGElementChildren): FeBlend => s('feBlend', props, children) as FeBlend
export const feColorMatrix = (props?: DeepPartial<FeColorMatrix>, children?: SVGElementChildren): FeColorMatrix => s('feColorMatrix', props, children) as FeColorMatrix
export const feComponentTransfer = (props?: DeepPartial<FeComponentTransfer>, children?: SVGElementChildren): FeComponentTransfer => s('feComponentTransfer', props, children) as FeComponentTransfer
export const feComposite = (props?: DeepPartial<FeComposite>, children?: SVGElementChildren): FeComposite => s('feComposite', props, children) as FeComposite
export const feConvolveMatrix = (props?: DeepPartial<FeConvolveMatrix>, children?: SVGElementChildren): FeConvolveMatrix => s('feConvolveMatrix', props, children) as FeConvolveMatrix
export const feDiffuseLighting = (props?: DeepPartial<FeDiffuseLighting>, children?: SVGElementChildren): FeDiffuseLighting => s('feDiffuseLighting', props, children) as FeDiffuseLighting
export const feDisplacementMap = (props?: DeepPartial<FeDisplacementMap>, children?: SVGElementChildren): FeDisplacementMap => s('feDisplacementMap', props, children) as FeDisplacementMap
export const feDistantLight = (props?: DeepPartial<FeDistantLight>, children?: SVGElementChildren): FeDistantLight => s('feDistantLight', props, children) as FeDistantLight
export const feFlood = (props?: DeepPartial<FeFlood>, children?: SVGElementChildren): FeFlood => s('feFlood', props, children) as FeFlood
export const feFuncA = (props?: DeepPartial<FeFuncA>, children?: SVGElementChildren): FeFuncA => s('feFuncA', props, children) as FeFuncA
export const feFuncB = (props?: DeepPartial<FeFuncB>, children?: SVGElementChildren): FeFuncB => s('feFuncB', props, children) as FeFuncB
export const feFuncG = (props?: DeepPartial<FeFuncG>, children?: SVGElementChildren): FeFuncG => s('feFuncG', props, children) as FeFuncG
export const feFuncR = (props?: DeepPartial<FeFuncR>, children?: SVGElementChildren): FeFuncR => s('feFuncR', props, children) as FeFuncR
export const feGaussianBlur = (props?: DeepPartial<FeGaussianBlur>, children?: SVGElementChildren): FeGaussianBlur => s('feGaussianBlur', props, children) as FeGaussianBlur
export const feImage = (props?: DeepPartial<FeImage>, children?: SVGElementChildren): FeImage => s('feImage', props, children) as FeImage
export const feMerge = (props?: DeepPartial<FeMerge>, children?: SVGElementChildren): FeMerge => s('feMerge', props, children) as FeMerge
export const feMergeNode = (props?: DeepPartial<FeMergeNode>, children?: SVGElementChildren): FeMergeNode => s('feMergeNode', props, children) as FeMergeNode
export const feMorphology = (props?: DeepPartial<FeMorphology>, children?: SVGElementChildren): FeMorphology => s('feMorphology', props, children) as FeMorphology
export const feOffset = (props?: DeepPartial<FeOffset>, children?: SVGElementChildren): FeOffset => s('feOffset', props, children) as FeOffset
export const fePointLight = (props?: DeepPartial<FePointLight>, children?: SVGElementChildren): FePointLight => s('fePointLight', props, children) as FePointLight
export const feSpecularLighting = (props?: DeepPartial<FeSpecularLighting>, children?: SVGElementChildren): FeSpecularLighting => s('feSpecularLighting', props, children) as FeSpecularLighting
export const feSpotLight = (props?: DeepPartial<FeSpotLight>, children?: SVGElementChildren): FeSpotLight => s('feSpotLight', props, children) as FeSpotLight
export const feTile = (props?: DeepPartial<FeTile>, children?: SVGElementChildren): FeTile => s('feTile', props, children) as FeTile
export const feTurbulence = (props?: DeepPartial<FeTurbulence>, children?: SVGElementChildren): FeTurbulence => s('feTurbulence', props, children) as FeTurbulence
export const filter = (props?: DeepPartial<Filter>, children?: SVGElementChildren): Filter => s('filter', props, children) as Filter
export const foreignObject = (props?: DeepPartial<ForeignObject>, children?: SVGElementChildren): ForeignObject => s('foreignObject', props, children) as ForeignObject
export const g = (props?: DeepPartial<G>, children?: SVGElementChildren): G => s('g', props, children) as G
export const gradient = (props?: DeepPartial<Gradient>, children?: SVGElementChildren): Gradient => s('gradient', props, children) as Gradient
export const image = (props?: DeepPartial<Image>, children?: SVGElementChildren): Image => s('image', props, children) as Image
export const line = (props?: DeepPartial<Line>, children?: SVGElementChildren): Line => s('line', props, children) as Line
export const linearGradient = (props?: DeepPartial<LinearGradient>, children?: SVGElementChildren): LinearGradient => s('linearGradient', props, children) as LinearGradient
export const marker = (props?: DeepPartial<Marker>, children?: SVGElementChildren): Marker => s('marker', props, children) as Marker
export const mask = (props?: DeepPartial<Mask>, children?: SVGElementChildren): Mask => s('mask', props, children) as Mask
export const metadata = (props?: DeepPartial<Metadata>, children?: SVGElementChildren): Metadata => s('metadata', props, children) as Metadata
export const path = (props?: DeepPartial<Path>, children?: SVGElementChildren): Path => s('path', props, children) as Path
export const pattern = (props?: DeepPartial<Pattern>, children?: SVGElementChildren): Pattern => s('pattern', props, children) as Pattern
export const polygon = (props?: DeepPartial<Polygon>, children?: SVGElementChildren): Polygon => s('polygon', props, children) as Polygon
export const polyline = (props?: DeepPartial<Polyline>, children?: SVGElementChildren): Polyline => s('polyline', props, children) as Polyline
export const radialGradient = (props?: DeepPartial<RadialGradient>, children?: SVGElementChildren): RadialGradient => s('radialGradient', props, children) as RadialGradient
export const rect = (props?: DeepPartial<Rect>, children?: SVGElementChildren): Rect => s('rect', props, children) as Rect
export const script = (props?: DeepPartial<Script>, child?: string): Script => s('script', props, child) as Script
export const stop = (props?: DeepPartial<Stop>, children?: SVGElementChildren): Stop => s('stop', props, children) as Stop
export const style = (props?: DeepPartial<Style>, child?: string): Style => s('style', props, child) as Style
export const svg = (props?: DeepPartial<Svg>, children?: SVGElementChildren): Svg => s('svg', props, children) as Svg
// Reserved word suffixed with "_".
export const switch_ = (props?: DeepPartial<Switch>, children?: SVGElementChildren): Switch => s('switch', props, children) as Switch
export const symbol = (props?: DeepPartial<Symbol>, children?: SVGElementChildren): Symbol => s('symbol', props, children) as Symbol
export const text = (props?: DeepPartial<Text>, children?: SVGElementChildren): Text => s('text', props, children) as Text
export const textContent = (props?: DeepPartial<TextContent>, children?: SVGElementChildren): TextContent => s('textContent', props, children) as TextContent
export const textPath = (props?: DeepPartial<TextPath>, children?: SVGElementChildren): TextPath => s('textPath', props, children) as TextPath
export const textPositioning = (props?: DeepPartial<TextPositioning>, children?: SVGElementChildren): TextPositioning => s('textPositioning', props, children) as TextPositioning
export const title = (props?: DeepPartial<Title>, children?: SVGElementChildren): Title => s('title', props, children) as Title
export const tspan = (props?: DeepPartial<Tspan>, children?: SVGElementChildren): Tspan => s('tspan', props, children) as Tspan
export const use = (props?: DeepPartial<Use>, children?: SVGElementChildren): Use => s('use', props, children) as Use
export const view = (props?: DeepPartial<View>, children?: SVGElementChildren): View => s('view', props, children) as View