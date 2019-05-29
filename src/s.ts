import {addChildren} from './addChildren'
import {AriaAttributes} from './AriaAttributes'
import {assignProps} from './assignProps'
import {Props} from './Props'

const SVG_NS = 'http://www.w3.org/2000/svg'

/**
 * Function to facilitate the concise creation of any SVG element.
 *
 * NOTE The following function silently depends on the `document` variable
 * being globally available. Therefore, unit tests of components that use it
 * must be run inside a browser, or must expose `document` globally, e.g.
 * through PhantomJS or jsdom.
 *
 * FIXME Second signature fails at inferring `T`, thus not picking up `children`'s type.
 */
export function s<T extends keyof SVGElementTagNameMap, E extends SVGElementTagNameMap[T]>(tag: T, props?: Props<E> & AriaAttributes, children?: (string | Element)[]): E
export function s<T extends keyof SVGElementTagNameMap, E extends SVGElementTagNameMap[T]>(elem: E, props?: Props<E> & AriaAttributes, children?: (string | Element)[]): E
export function s(tagOrElem: keyof SVGElementTagNameMap | SVGElement, props?: Props<SVGElement> & AriaAttributes, children?: (string | Element)[]): SVGElement {
    const elem = typeof tagOrElem === 'string' ? document.createElementNS(SVG_NS, tagOrElem) : tagOrElem
    if (props !== undefined) {
        assignProps(elem, props)
    }
    if (children !== undefined) {
        addChildren(elem, children)
    }
    return elem
}

/**
 * Nice-to-remember, concise aliases for all SVG element interfaces.
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
