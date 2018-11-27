import {addChildren} from '../addChildren'
import {assignProperties} from '../assignProperties'
import {BuiltTimeDom} from '../BuiltTimeDom'
import {BuiltTimeSvgTypesMap} from './BuiltTimeSvgTypesMap'
import {SvgTypesMap} from './SvgTypesMap'

/**
 * Factory function for SVG elements.
 */
function _s<T extends keyof SvgTypesMap>(tag: T, props?: BuiltTimeSvgTypesMap[T], children?: (Element | string)[]): SvgTypesMap[T]
function _s(tag: string, props?: BuiltTimeDom.SVGElement, children?: (Element | string)[]): SVGElement
function _s(tag: string, props?: BuiltTimeDom.SVGElement, children?: (Element | string)[]) {
    const elem = document.createElementNS('http://www.w3.org/2000/svg', tag)
    if (props !== undefined) {
        assignProperties(elem, props)
    }
    if (children !== undefined) {
        addChildren(elem, children)
    }
    return elem
}

/// Script-generated.

/**
 * Helpers to facilitate the concise creation of any SVG element.
 *
 * NOTE The following functions silently depend on the `document` variable
 * being globally available. Therefore, unit tests of components that use them
 * must be run inside a browser, or must expose `document` globally, e.g.
 * through PhantomJS or jsdom.
 */
export namespace s {
    export const a = (props?: BuiltTimeDom.SVGAElement, children?: (SVGElement | string)[]): SvgTypesMap['a'] => _s('a', props, children)
    export const circle = (props?: BuiltTimeDom.SVGCircleElement, children?: (SVGElement | string)[]): SvgTypesMap['circle'] => _s('circle', props, children)
    export const clipPath = (props?: BuiltTimeDom.SVGClipPathElement, children?: (SVGElement | string)[]): SvgTypesMap['clipPath'] => _s('clipPath', props, children)
    export const defs = (props?: BuiltTimeDom.SVGDefsElement, children?: (SVGElement | string)[]): SvgTypesMap['defs'] => _s('defs', props, children)
    export const desc = (props?: BuiltTimeDom.SVGDescElement, children?: (SVGElement | string)[]): SvgTypesMap['desc'] => _s('desc', props, children)
    export const ellipse = (props?: BuiltTimeDom.SVGEllipseElement, children?: (SVGElement | string)[]): SvgTypesMap['ellipse'] => _s('ellipse', props, children)
    export const feBlend = (props?: BuiltTimeDom.SVGFEBlendElement, children?: (SVGElement | string)[]): SvgTypesMap['feBlend'] => _s('feBlend', props, children)
    export const feColorMatrix = (props?: BuiltTimeDom.SVGFEColorMatrixElement, children?: (SVGElement | string)[]): SvgTypesMap['feColorMatrix'] => _s('feColorMatrix', props, children)
    export const feComponentTransfer = (props?: BuiltTimeDom.SVGFEComponentTransferElement, children?: (SVGElement | string)[]): SvgTypesMap['feComponentTransfer'] => _s('feComponentTransfer', props, children)
    export const feComposite = (props?: BuiltTimeDom.SVGFECompositeElement, children?: (SVGElement | string)[]): SvgTypesMap['feComposite'] => _s('feComposite', props, children)
    export const feConvolveMatrix = (props?: BuiltTimeDom.SVGFEConvolveMatrixElement, children?: (SVGElement | string)[]): SvgTypesMap['feConvolveMatrix'] => _s('feConvolveMatrix', props, children)
    export const feDiffuseLighting = (props?: BuiltTimeDom.SVGFEDiffuseLightingElement, children?: (SVGElement | string)[]): SvgTypesMap['feDiffuseLighting'] => _s('feDiffuseLighting', props, children)
    export const feDisplacementMap = (props?: BuiltTimeDom.SVGFEDisplacementMapElement, children?: (SVGElement | string)[]): SvgTypesMap['feDisplacementMap'] => _s('feDisplacementMap', props, children)
    export const feDistantLight = (props?: BuiltTimeDom.SVGFEDistantLightElement, children?: (SVGElement | string)[]): SvgTypesMap['feDistantLight'] => _s('feDistantLight', props, children)
    export const feFlood = (props?: BuiltTimeDom.SVGFEFloodElement, children?: (SVGElement | string)[]): SvgTypesMap['feFlood'] => _s('feFlood', props, children)
    export const feFuncA = (props?: BuiltTimeDom.SVGFEFuncAElement, children?: (SVGElement | string)[]): SvgTypesMap['feFuncA'] => _s('feFuncA', props, children)
    export const feFuncB = (props?: BuiltTimeDom.SVGFEFuncBElement, children?: (SVGElement | string)[]): SvgTypesMap['feFuncB'] => _s('feFuncB', props, children)
    export const feFuncG = (props?: BuiltTimeDom.SVGFEFuncGElement, children?: (SVGElement | string)[]): SvgTypesMap['feFuncG'] => _s('feFuncG', props, children)
    export const feFuncR = (props?: BuiltTimeDom.SVGFEFuncRElement, children?: (SVGElement | string)[]): SvgTypesMap['feFuncR'] => _s('feFuncR', props, children)
    export const feGaussianBlur = (props?: BuiltTimeDom.SVGFEGaussianBlurElement, children?: (SVGElement | string)[]): SvgTypesMap['feGaussianBlur'] => _s('feGaussianBlur', props, children)
    export const feImage = (props?: BuiltTimeDom.SVGFEImageElement, children?: (SVGElement | string)[]): SvgTypesMap['feImage'] => _s('feImage', props, children)
    export const feMerge = (props?: BuiltTimeDom.SVGFEMergeElement, children?: (SVGElement | string)[]): SvgTypesMap['feMerge'] => _s('feMerge', props, children)
    export const feMergeNode = (props?: BuiltTimeDom.SVGFEMergeNodeElement, children?: (SVGElement | string)[]): SvgTypesMap['feMergeNode'] => _s('feMergeNode', props, children)
    export const feMorphology = (props?: BuiltTimeDom.SVGFEMorphologyElement, children?: (SVGElement | string)[]): SvgTypesMap['feMorphology'] => _s('feMorphology', props, children)
    export const feOffset = (props?: BuiltTimeDom.SVGFEOffsetElement, children?: (SVGElement | string)[]): SvgTypesMap['feOffset'] => _s('feOffset', props, children)
    export const fePointLight = (props?: BuiltTimeDom.SVGFEPointLightElement, children?: (SVGElement | string)[]): SvgTypesMap['fePointLight'] => _s('fePointLight', props, children)
    export const feSpecularLighting = (props?: BuiltTimeDom.SVGFESpecularLightingElement, children?: (SVGElement | string)[]): SvgTypesMap['feSpecularLighting'] => _s('feSpecularLighting', props, children)
    export const feSpotLight = (props?: BuiltTimeDom.SVGFESpotLightElement, children?: (SVGElement | string)[]): SvgTypesMap['feSpotLight'] => _s('feSpotLight', props, children)
    export const feTile = (props?: BuiltTimeDom.SVGFETileElement, children?: (SVGElement | string)[]): SvgTypesMap['feTile'] => _s('feTile', props, children)
    export const feTurbulence = (props?: BuiltTimeDom.SVGFETurbulenceElement, children?: (SVGElement | string)[]): SvgTypesMap['feTurbulence'] => _s('feTurbulence', props, children)
    export const filter = (props?: BuiltTimeDom.SVGFilterElement, children?: (SVGElement | string)[]): SvgTypesMap['filter'] => _s('filter', props, children)
    export const foreignObject = (props?: BuiltTimeDom.SVGForeignObjectElement, children?: (Element | string)[]): SvgTypesMap['foreignObject'] => _s('foreignObject', props, children)
    export const g = (props?: BuiltTimeDom.SVGGElement, children?: (SVGElement | string)[]): SvgTypesMap['g'] => _s('g', props, children)
    export const gradient = (props?: BuiltTimeDom.SVGGradientElement, children?: (SVGElement | string)[]): SvgTypesMap['gradient'] => _s('gradient', props, children)
    export const image = (props?: BuiltTimeDom.SVGImageElement, children?: (SVGElement | string)[]): SvgTypesMap['image'] => _s('image', props, children)
    export const line = (props?: BuiltTimeDom.SVGLineElement, children?: (SVGElement | string)[]): SvgTypesMap['line'] => _s('line', props, children)
    export const linearGradient = (props?: BuiltTimeDom.SVGLinearGradientElement, children?: (SVGElement | string)[]): SvgTypesMap['linearGradient'] => _s('linearGradient', props, children)
    export const marker = (props?: BuiltTimeDom.SVGMarkerElement, children?: (SVGElement | string)[]): SvgTypesMap['marker'] => _s('marker', props, children)
    export const mask = (props?: BuiltTimeDom.SVGMaskElement, children?: (SVGElement | string)[]): SvgTypesMap['mask'] => _s('mask', props, children)
    export const metadata = (props?: BuiltTimeDom.SVGMetadataElement, children?: (SVGElement | string)[]): SvgTypesMap['metadata'] => _s('metadata', props, children)
    export const path = (props?: BuiltTimeDom.SVGPathElement, children?: (SVGElement | string)[]): SvgTypesMap['path'] => _s('path', props, children)
    export const pattern = (props?: BuiltTimeDom.SVGPatternElement, children?: (SVGElement | string)[]): SvgTypesMap['pattern'] => _s('pattern', props, children)
    export const polygon = (props?: BuiltTimeDom.SVGPolygonElement, children?: (SVGElement | string)[]): SvgTypesMap['polygon'] => _s('polygon', props, children)
    export const polyline = (props?: BuiltTimeDom.SVGPolylineElement, children?: (SVGElement | string)[]): SvgTypesMap['polyline'] => _s('polyline', props, children)
    export const radialGradient = (props?: BuiltTimeDom.SVGRadialGradientElement, children?: (SVGElement | string)[]): SvgTypesMap['radialGradient'] => _s('radialGradient', props, children)
    export const rect = (props?: BuiltTimeDom.SVGRectElement, children?: (SVGElement | string)[]): SvgTypesMap['rect'] => _s('rect', props, children)
    export const script = (props?: BuiltTimeDom.SVGScriptElement, children?: (SVGElement | string)[]): SvgTypesMap['script'] => _s('script', props, children)
    export const stop = (props?: BuiltTimeDom.SVGStopElement, children?: (SVGElement | string)[]): SvgTypesMap['stop'] => _s('stop', props, children)
    export const style = (props?: BuiltTimeDom.SVGStyleElement, children?: (SVGElement | string)[]): SvgTypesMap['style'] => _s('style', props, children)
    export const svg = (props?: BuiltTimeDom.SVGSVGElement, children?: (SVGElement | string)[]): SvgTypesMap['svg'] => _s('svg', props, children)
    export const switch_ = (props?: BuiltTimeDom.SVGSwitchElement, children?: (SVGElement | string)[]): SvgTypesMap['switch'] => _s('switch', props, children)
    export const symbol = (props?: BuiltTimeDom.SVGSymbolElement, children?: (SVGElement | string)[]): SvgTypesMap['symbol'] => _s('symbol', props, children)
    export const text = (props?: BuiltTimeDom.SVGTextElement, children?: (SVGElement | string)[]): SvgTypesMap['text'] => _s('text', props, children)
    export const textPath = (props?: BuiltTimeDom.SVGTextPathElement, children?: (SVGElement | string)[]): SvgTypesMap['textPath'] => _s('textPath', props, children)
    export const title = (props?: BuiltTimeDom.SVGTitleElement, children?: (SVGElement | string)[]): SvgTypesMap['title'] => _s('title', props, children)
    export const tspan = (props?: BuiltTimeDom.SVGTSpanElement, children?: (SVGElement | string)[]): SvgTypesMap['tspan'] => _s('tspan', props, children)
    export const use = (props?: BuiltTimeDom.SVGUseElement, children?: (SVGElement | string)[]): SvgTypesMap['use'] => _s('use', props, children)
    export const view = (props?: BuiltTimeDom.SVGViewElement, children?: (SVGElement | string)[]): SvgTypesMap['view'] => _s('view', props, children)
}

/// Script-generated.

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
