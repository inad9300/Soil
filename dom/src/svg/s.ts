import {addChildren} from '../addChildren'
import {assignProperties} from '../assignProperties'
import {BuiltTimeDom} from '../BuiltTimeDom'
import {BuiltTimeSvgTypesMap} from './BuiltTimeSvgTypesMap'
import {SvgTypesMap} from './SvgTypesMap'

/**
 * Factory function for SVG elements.
 */
function ss<T extends keyof SvgTypesMap>(tag: T, props?: BuiltTimeSvgTypesMap[T], children?: (Element | Text)[]): SvgTypesMap[T]
function ss(tag: string, props?: BuiltTimeDom.SVGElement, children?: (Element | Text)[]): SVGElement
function ss(tag: string, props?: BuiltTimeDom.SVGElement, children?: (Element | Text)[]) {
    const elem = document.createElementNS('http://www.w3.org/2000/svg', tag)
    if (props !== undefined) {
        assignProperties(elem, props)
    }
    if (children !== undefined) {
        addChildren(elem, children)
    }
    return elem
}

export namespace s {

    /**
     * Type representing any nested SVG values.
     */
    export type Value<T extends boolean | number | Text> = {
        baseVal: {
            value: T
        }
    }

    /**
     * Helper function to simplify writting and reading nested SVG values.
     */
    export function value<T extends boolean | number | Text>(value: T): Value<T>
    export function value<T extends boolean | number | Text>(value: Value<T>): T
    export function value<T extends boolean | number | Text>(value: T | Value<T>): Value<T> | T {
        if (value instanceof Object) {
            return (value as Value<T>).baseVal.value
        } else {
            return {
                baseVal: {
                    value: value as T
                }
            }
        }
    }
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
    export const a = (props?: BuiltTimeDom.SVGAElement, children?: (SVGElement | Text)[]): SvgTypesMap['a'] => ss('a', props, children)
    export const circle = (props?: BuiltTimeDom.SVGCircleElement, children?: (SVGElement | Text)[]): SvgTypesMap['circle'] => ss('circle', props, children)
    export const clipPath = (props?: BuiltTimeDom.SVGClipPathElement, children?: (SVGElement | Text)[]): SvgTypesMap['clipPath'] => ss('clipPath', props, children)
    export const componentTransferFunction = (props?: BuiltTimeDom.SVGComponentTransferFunctionElement, children?: (SVGElement | Text)[]): SvgTypesMap['componentTransferFunction'] => ss('componentTransferFunction', props, children)
    export const defs = (props?: BuiltTimeDom.SVGDefsElement, children?: (SVGElement | Text)[]): SvgTypesMap['defs'] => ss('defs', props, children)
    export const desc = (props?: BuiltTimeDom.SVGDescElement, children?: (SVGElement | Text)[]): SvgTypesMap['desc'] => ss('desc', props, children)
    export const ellipse = (props?: BuiltTimeDom.SVGEllipseElement, children?: (SVGElement | Text)[]): SvgTypesMap['ellipse'] => ss('ellipse', props, children)
    export const feBlend = (props?: BuiltTimeDom.SVGFEBlendElement, children?: (SVGElement | Text)[]): SvgTypesMap['feBlend'] => ss('feBlend', props, children)
    export const feColorMatrix = (props?: BuiltTimeDom.SVGFEColorMatrixElement, children?: (SVGElement | Text)[]): SvgTypesMap['feColorMatrix'] => ss('feColorMatrix', props, children)
    export const feComponentTransfer = (props?: BuiltTimeDom.SVGFEComponentTransferElement, children?: (SVGElement | Text)[]): SvgTypesMap['feComponentTransfer'] => ss('feComponentTransfer', props, children)
    export const feComposite = (props?: BuiltTimeDom.SVGFECompositeElement, children?: (SVGElement | Text)[]): SvgTypesMap['feComposite'] => ss('feComposite', props, children)
    export const feConvolveMatrix = (props?: BuiltTimeDom.SVGFEConvolveMatrixElement, children?: (SVGElement | Text)[]): SvgTypesMap['feConvolveMatrix'] => ss('feConvolveMatrix', props, children)
    export const feDiffuseLighting = (props?: BuiltTimeDom.SVGFEDiffuseLightingElement, children?: (SVGElement | Text)[]): SvgTypesMap['feDiffuseLighting'] => ss('feDiffuseLighting', props, children)
    export const feDisplacementMap = (props?: BuiltTimeDom.SVGFEDisplacementMapElement, children?: (SVGElement | Text)[]): SvgTypesMap['feDisplacementMap'] => ss('feDisplacementMap', props, children)
    export const feDistantLight = (props?: BuiltTimeDom.SVGFEDistantLightElement, children?: (SVGElement | Text)[]): SvgTypesMap['feDistantLight'] => ss('feDistantLight', props, children)
    export const feFlood = (props?: BuiltTimeDom.SVGFEFloodElement, children?: (SVGElement | Text)[]): SvgTypesMap['feFlood'] => ss('feFlood', props, children)
    export const feFuncA = (props?: BuiltTimeDom.SVGFEFuncAElement, children?: (SVGElement | Text)[]): SvgTypesMap['feFuncA'] => ss('feFuncA', props, children)
    export const feFuncB = (props?: BuiltTimeDom.SVGFEFuncBElement, children?: (SVGElement | Text)[]): SvgTypesMap['feFuncB'] => ss('feFuncB', props, children)
    export const feFuncG = (props?: BuiltTimeDom.SVGFEFuncGElement, children?: (SVGElement | Text)[]): SvgTypesMap['feFuncG'] => ss('feFuncG', props, children)
    export const feFuncR = (props?: BuiltTimeDom.SVGFEFuncRElement, children?: (SVGElement | Text)[]): SvgTypesMap['feFuncR'] => ss('feFuncR', props, children)
    export const feGaussianBlur = (props?: BuiltTimeDom.SVGFEGaussianBlurElement, children?: (SVGElement | Text)[]): SvgTypesMap['feGaussianBlur'] => ss('feGaussianBlur', props, children)
    export const feImage = (props?: BuiltTimeDom.SVGFEImageElement, children?: (SVGElement | Text)[]): SvgTypesMap['feImage'] => ss('feImage', props, children)
    export const feMerge = (props?: BuiltTimeDom.SVGFEMergeElement, children?: (SVGElement | Text)[]): SvgTypesMap['feMerge'] => ss('feMerge', props, children)
    export const feMergeNode = (props?: BuiltTimeDom.SVGFEMergeNodeElement, children?: (SVGElement | Text)[]): SvgTypesMap['feMergeNode'] => ss('feMergeNode', props, children)
    export const feMorphology = (props?: BuiltTimeDom.SVGFEMorphologyElement, children?: (SVGElement | Text)[]): SvgTypesMap['feMorphology'] => ss('feMorphology', props, children)
    export const feOffset = (props?: BuiltTimeDom.SVGFEOffsetElement, children?: (SVGElement | Text)[]): SvgTypesMap['feOffset'] => ss('feOffset', props, children)
    export const fePointLight = (props?: BuiltTimeDom.SVGFEPointLightElement, children?: (SVGElement | Text)[]): SvgTypesMap['fePointLight'] => ss('fePointLight', props, children)
    export const feSpecularLighting = (props?: BuiltTimeDom.SVGFESpecularLightingElement, children?: (SVGElement | Text)[]): SvgTypesMap['feSpecularLighting'] => ss('feSpecularLighting', props, children)
    export const feSpotLight = (props?: BuiltTimeDom.SVGFESpotLightElement, children?: (SVGElement | Text)[]): SvgTypesMap['feSpotLight'] => ss('feSpotLight', props, children)
    export const feTile = (props?: BuiltTimeDom.SVGFETileElement, children?: (SVGElement | Text)[]): SvgTypesMap['feTile'] => ss('feTile', props, children)
    export const feTurbulence = (props?: BuiltTimeDom.SVGFETurbulenceElement, children?: (SVGElement | Text)[]): SvgTypesMap['feTurbulence'] => ss('feTurbulence', props, children)
    export const filter = (props?: BuiltTimeDom.SVGFilterElement, children?: (SVGElement | Text)[]): SvgTypesMap['filter'] => ss('filter', props, children)
    export const foreignObject = (props?: BuiltTimeDom.SVGForeignObjectElement, children?: (Element | Text)[]): SvgTypesMap['foreignObject'] => ss('foreignObject', props, children)
    export const g = (props?: BuiltTimeDom.SVGGElement, children?: (SVGElement | Text)[]): SvgTypesMap['g'] => ss('g', props, children)
    export const gradient = (props?: BuiltTimeDom.SVGGradientElement, children?: (SVGElement | Text)[]): SvgTypesMap['gradient'] => ss('gradient', props, children)
    export const image = (props?: BuiltTimeDom.SVGImageElement, children?: (SVGElement | Text)[]): SvgTypesMap['image'] => ss('image', props, children)
    export const line = (props?: BuiltTimeDom.SVGLineElement, children?: (SVGElement | Text)[]): SvgTypesMap['line'] => ss('line', props, children)
    export const linearGradient = (props?: BuiltTimeDom.SVGLinearGradientElement, children?: (SVGElement | Text)[]): SvgTypesMap['linearGradient'] => ss('linearGradient', props, children)
    export const marker = (props?: BuiltTimeDom.SVGMarkerElement, children?: (SVGElement | Text)[]): SvgTypesMap['marker'] => ss('marker', props, children)
    export const mask = (props?: BuiltTimeDom.SVGMaskElement, children?: (SVGElement | Text)[]): SvgTypesMap['mask'] => ss('mask', props, children)
    export const metadata = (props?: BuiltTimeDom.SVGMetadataElement, children?: (SVGElement | Text)[]): SvgTypesMap['metadata'] => ss('metadata', props, children)
    export const path = (props?: BuiltTimeDom.SVGPathElement, children?: (SVGElement | Text)[]): SvgTypesMap['path'] => ss('path', props, children)
    export const pattern = (props?: BuiltTimeDom.SVGPatternElement, children?: (SVGElement | Text)[]): SvgTypesMap['pattern'] => ss('pattern', props, children)
    export const polygon = (props?: BuiltTimeDom.SVGPolygonElement, children?: (SVGElement | Text)[]): SvgTypesMap['polygon'] => ss('polygon', props, children)
    export const polyline = (props?: BuiltTimeDom.SVGPolylineElement, children?: (SVGElement | Text)[]): SvgTypesMap['polyline'] => ss('polyline', props, children)
    export const radialGradient = (props?: BuiltTimeDom.SVGRadialGradientElement, children?: (SVGElement | Text)[]): SvgTypesMap['radialGradient'] => ss('radialGradient', props, children)
    export const rect = (props?: BuiltTimeDom.SVGRectElement, children?: (SVGElement | Text)[]): SvgTypesMap['rect'] => ss('rect', props, children)
    export const script = (props?: BuiltTimeDom.SVGScriptElement, children?: (SVGElement | Text)[]): SvgTypesMap['script'] => ss('script', props, children)
    export const stop = (props?: BuiltTimeDom.SVGStopElement, children?: (SVGElement | Text)[]): SvgTypesMap['stop'] => ss('stop', props, children)
    export const style = (props?: BuiltTimeDom.SVGStyleElement, children?: (SVGElement | Text)[]): SvgTypesMap['style'] => ss('style', props, children)
    export const svg = (props?: BuiltTimeDom.SVGSVGElement, children?: (SVGElement | Text)[]): SvgTypesMap['svg'] => ss('svg', props, children)
    export const switch_ = (props?: BuiltTimeDom.SVGSwitchElement, children?: (SVGElement | Text)[]): SvgTypesMap['switch'] => ss('switch', props, children)
    export const symbol = (props?: BuiltTimeDom.SVGSymbolElement, children?: (SVGElement | Text)[]): SvgTypesMap['symbol'] => ss('symbol', props, children)
    export const text = (props?: BuiltTimeDom.SVGTextElement, children?: (SVGElement | Text)[]): SvgTypesMap['text'] => ss('text', props, children)
    export const textContent = (props?: BuiltTimeDom.SVGTextContentElement, children?: (SVGElement | Text)[]): SvgTypesMap['textContent'] => ss('textContent', props, children)
    export const textPath = (props?: BuiltTimeDom.SVGTextPathElement, children?: (SVGElement | Text)[]): SvgTypesMap['textPath'] => ss('textPath', props, children)
    export const textPositioning = (props?: BuiltTimeDom.SVGTextPositioningElement, children?: (SVGElement | Text)[]): SvgTypesMap['textPositioning'] => ss('textPositioning', props, children)
    export const title = (props?: BuiltTimeDom.SVGTitleElement, children?: (SVGElement | Text)[]): SvgTypesMap['title'] => ss('title', props, children)
    export const tspan = (props?: BuiltTimeDom.SVGTSpanElement, children?: (SVGElement | Text)[]): SvgTypesMap['tspan'] => ss('tspan', props, children)
    export const use = (props?: BuiltTimeDom.SVGUseElement, children?: (SVGElement | Text)[]): SvgTypesMap['use'] => ss('use', props, children)
    export const view = (props?: BuiltTimeDom.SVGViewElement, children?: (SVGElement | Text)[]): SvgTypesMap['view'] => ss('view', props, children)
}

/// Script-generated.

/**
 * Nice-to-remember aliases for all SVG element interfaces.
 */
export namespace s {
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
}
