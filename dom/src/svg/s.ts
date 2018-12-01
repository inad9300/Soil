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
    export function a(props?: BuiltTimeDom.SVGAElement, children?: (SVGElement | string)[]): SvgTypesMap['a'] { return _s('a', props, children) }
    export function circle(props?: BuiltTimeDom.SVGCircleElement, children?: (SVGElement | string)[]): SvgTypesMap['circle'] { return _s('circle', props, children) }
    export function clipPath(props?: BuiltTimeDom.SVGClipPathElement, children?: (SVGElement | string)[]): SvgTypesMap['clipPath'] { return _s('clipPath', props, children) }
    // TODO export function cursor(props?: BuiltTimeDom.SVGCursorElement, children?: (SVGElement | string)[]): SvgTypesMap['cursor'] { return _s('cursor', props, children) }
    export function defs(props?: BuiltTimeDom.SVGDefsElement, children?: (SVGElement | string)[]): SvgTypesMap['defs'] { return _s('defs', props, children) }
    export function desc(props?: BuiltTimeDom.SVGDescElement, children?: (SVGElement | string)[]): SvgTypesMap['desc'] { return _s('desc', props, children) }
    export function ellipse(props?: BuiltTimeDom.SVGEllipseElement, children?: (SVGElement | string)[]): SvgTypesMap['ellipse'] { return _s('ellipse', props, children) }
    export function feBlend(props?: BuiltTimeDom.SVGFEBlendElement, children?: (SVGElement | string)[]): SvgTypesMap['feBlend'] { return _s('feBlend', props, children) }
    export function feColorMatrix(props?: BuiltTimeDom.SVGFEColorMatrixElement, children?: (SVGElement | string)[]): SvgTypesMap['feColorMatrix'] { return _s('feColorMatrix', props, children) }
    export function feComponentTransfer(props?: BuiltTimeDom.SVGFEComponentTransferElement, children?: (SVGElement | string)[]): SvgTypesMap['feComponentTransfer'] { return _s('feComponentTransfer', props, children) }
    export function feComposite(props?: BuiltTimeDom.SVGFECompositeElement, children?: (SVGElement | string)[]): SvgTypesMap['feComposite'] { return _s('feComposite', props, children) }
    export function feConvolveMatrix(props?: BuiltTimeDom.SVGFEConvolveMatrixElement, children?: (SVGElement | string)[]): SvgTypesMap['feConvolveMatrix'] { return _s('feConvolveMatrix', props, children) }
    export function feDiffuseLighting(props?: BuiltTimeDom.SVGFEDiffuseLightingElement, children?: (SVGElement | string)[]): SvgTypesMap['feDiffuseLighting'] { return _s('feDiffuseLighting', props, children) }
    export function feDisplacementMap(props?: BuiltTimeDom.SVGFEDisplacementMapElement, children?: (SVGElement | string)[]): SvgTypesMap['feDisplacementMap'] { return _s('feDisplacementMap', props, children) }
    export function feDistantLight(props?: BuiltTimeDom.SVGFEDistantLightElement, children?: (SVGElement | string)[]): SvgTypesMap['feDistantLight'] { return _s('feDistantLight', props, children) }
    export function feFlood(props?: BuiltTimeDom.SVGFEFloodElement, children?: (SVGElement | string)[]): SvgTypesMap['feFlood'] { return _s('feFlood', props, children) }
    export function feFuncA(props?: BuiltTimeDom.SVGFEFuncAElement, children?: (SVGElement | string)[]): SvgTypesMap['feFuncA'] { return _s('feFuncA', props, children) }
    export function feFuncB(props?: BuiltTimeDom.SVGFEFuncBElement, children?: (SVGElement | string)[]): SvgTypesMap['feFuncB'] { return _s('feFuncB', props, children) }
    export function feFuncG(props?: BuiltTimeDom.SVGFEFuncGElement, children?: (SVGElement | string)[]): SvgTypesMap['feFuncG'] { return _s('feFuncG', props, children) }
    export function feFuncR(props?: BuiltTimeDom.SVGFEFuncRElement, children?: (SVGElement | string)[]): SvgTypesMap['feFuncR'] { return _s('feFuncR', props, children) }
    export function feGaussianBlur(props?: BuiltTimeDom.SVGFEGaussianBlurElement, children?: (SVGElement | string)[]): SvgTypesMap['feGaussianBlur'] { return _s('feGaussianBlur', props, children) }
    export function feImage(props?: BuiltTimeDom.SVGFEImageElement, children?: (SVGElement | string)[]): SvgTypesMap['feImage'] { return _s('feImage', props, children) }
    export function feMerge(props?: BuiltTimeDom.SVGFEMergeElement, children?: (SVGElement | string)[]): SvgTypesMap['feMerge'] { return _s('feMerge', props, children) }
    export function feMergeNode(props?: BuiltTimeDom.SVGFEMergeNodeElement, children?: (SVGElement | string)[]): SvgTypesMap['feMergeNode'] { return _s('feMergeNode', props, children) }
    export function feMorphology(props?: BuiltTimeDom.SVGFEMorphologyElement, children?: (SVGElement | string)[]): SvgTypesMap['feMorphology'] { return _s('feMorphology', props, children) }
    export function feOffset(props?: BuiltTimeDom.SVGFEOffsetElement, children?: (SVGElement | string)[]): SvgTypesMap['feOffset'] { return _s('feOffset', props, children) }
    export function fePointLight(props?: BuiltTimeDom.SVGFEPointLightElement, children?: (SVGElement | string)[]): SvgTypesMap['fePointLight'] { return _s('fePointLight', props, children) }
    export function feSpecularLighting(props?: BuiltTimeDom.SVGFESpecularLightingElement, children?: (SVGElement | string)[]): SvgTypesMap['feSpecularLighting'] { return _s('feSpecularLighting', props, children) }
    export function feSpotLight(props?: BuiltTimeDom.SVGFESpotLightElement, children?: (SVGElement | string)[]): SvgTypesMap['feSpotLight'] { return _s('feSpotLight', props, children) }
    export function feTile(props?: BuiltTimeDom.SVGFETileElement, children?: (SVGElement | string)[]): SvgTypesMap['feTile'] { return _s('feTile', props, children) }
    export function feTurbulence(props?: BuiltTimeDom.SVGFETurbulenceElement, children?: (SVGElement | string)[]): SvgTypesMap['feTurbulence'] { return _s('feTurbulence', props, children) }
    export function filter(props?: BuiltTimeDom.SVGFilterElement, children?: (SVGElement | string)[]): SvgTypesMap['filter'] { return _s('filter', props, children) }
    export function foreignObject(props?: BuiltTimeDom.SVGForeignObjectElement, children?: (Element | string)[]): SvgTypesMap['foreignObject'] { return _s('foreignObject', props, children) }
    export function g(props?: BuiltTimeDom.SVGGElement, children?: (SVGElement | string)[]): SvgTypesMap['g'] { return _s('g', props, children) }
    export function gradient(props?: BuiltTimeDom.SVGGradientElement, children?: (SVGElement | string)[]): SvgTypesMap['gradient'] { return _s('gradient', props, children) }
    export function image(props?: BuiltTimeDom.SVGImageElement, children?: (SVGElement | string)[]): SvgTypesMap['image'] { return _s('image', props, children) }
    export function line(props?: BuiltTimeDom.SVGLineElement, children?: (SVGElement | string)[]): SvgTypesMap['line'] { return _s('line', props, children) }
    export function linearGradient(props?: BuiltTimeDom.SVGLinearGradientElement, children?: (SVGElement | string)[]): SvgTypesMap['linearGradient'] { return _s('linearGradient', props, children) }
    export function marker(props?: BuiltTimeDom.SVGMarkerElement, children?: (SVGElement | string)[]): SvgTypesMap['marker'] { return _s('marker', props, children) }
    export function mask(props?: BuiltTimeDom.SVGMaskElement, children?: (SVGElement | string)[]): SvgTypesMap['mask'] { return _s('mask', props, children) }
    export function metadata(props?: BuiltTimeDom.SVGMetadataElement, children?: (SVGElement | string)[]): SvgTypesMap['metadata'] { return _s('metadata', props, children) }
    export function path(props?: BuiltTimeDom.SVGPathElement, children?: (SVGElement | string)[]): SvgTypesMap['path'] { return _s('path', props, children) }
    export function pattern(props?: BuiltTimeDom.SVGPatternElement, children?: (SVGElement | string)[]): SvgTypesMap['pattern'] { return _s('pattern', props, children) }
    export function polygon(props?: BuiltTimeDom.SVGPolygonElement, children?: (SVGElement | string)[]): SvgTypesMap['polygon'] { return _s('polygon', props, children) }
    export function polyline(props?: BuiltTimeDom.SVGPolylineElement, children?: (SVGElement | string)[]): SvgTypesMap['polyline'] { return _s('polyline', props, children) }
    export function radialGradient(props?: BuiltTimeDom.SVGRadialGradientElement, children?: (SVGElement | string)[]): SvgTypesMap['radialGradient'] { return _s('radialGradient', props, children) }
    export function rect(props?: BuiltTimeDom.SVGRectElement, children?: (SVGElement | string)[]): SvgTypesMap['rect'] { return _s('rect', props, children) }
    export function script(props?: BuiltTimeDom.SVGScriptElement, children?: (SVGElement | string)[]): SvgTypesMap['script'] { return _s('script', props, children) }
    export function stop(props?: BuiltTimeDom.SVGStopElement, children?: (SVGElement | string)[]): SvgTypesMap['stop'] { return _s('stop', props, children) }
    export function style(props?: BuiltTimeDom.SVGStyleElement, children?: (SVGElement | string)[]): SvgTypesMap['style'] { return _s('style', props, children) }
    export function svg(props?: BuiltTimeDom.SVGSVGElement, children?: (SVGElement | string)[]): SvgTypesMap['svg'] { return _s('svg', props, children) }
    export function switch_(props?: BuiltTimeDom.SVGSwitchElement, children?: (SVGElement | string)[]): SvgTypesMap['switch'] { return _s('switch', props, children) }
    export function symbol(props?: BuiltTimeDom.SVGSymbolElement, children?: (SVGElement | string)[]): SvgTypesMap['symbol'] { return _s('symbol', props, children) }
    export function text(props?: BuiltTimeDom.SVGTextElement, children?: (SVGElement | string)[]): SvgTypesMap['text'] { return _s('text', props, children) }
    export function textPath(props?: BuiltTimeDom.SVGTextPathElement, children?: (SVGElement | string)[]): SvgTypesMap['textPath'] { return _s('textPath', props, children) }
    export function title(props?: BuiltTimeDom.SVGTitleElement, children?: (SVGElement | string)[]): SvgTypesMap['title'] { return _s('title', props, children) }
    export function tspan(props?: BuiltTimeDom.SVGTSpanElement, children?: (SVGElement | string)[]): SvgTypesMap['tspan'] { return _s('tspan', props, children) }
    export function use(props?: BuiltTimeDom.SVGUseElement, children?: (SVGElement | string)[]): SvgTypesMap['use'] { return _s('use', props, children) }
    export function view(props?: BuiltTimeDom.SVGViewElement, children?: (SVGElement | string)[]): SvgTypesMap['view'] { return _s('view', props, children) }
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
