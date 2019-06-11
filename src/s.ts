import {addChildren} from './addChildren'
import {TypedElement} from './TypedElement'
import {AriaAttributes} from './AriaAttributes'
import {assignProps} from './assignProps'
import {Props} from './Props'
import {SvgTypes} from './SvgTypes'

type SvgChild = string | SVGElement

const SVG_NS = 'http://www.w3.org/2000/svg'

/**
 * Function to facilitate the concise creation of any SVG element.
 *
 * NOTE The following function silently depends on the `document` variable
 * being globally available. Therefore, unit tests of components that use it
 * must be run inside a browser, or must expose `document` globally, e.g.
 * through PhantomJS or jsdom.
 */
export function s(elem: s.A, props?: Props<s.A>, children?: SvgChild[]): s.A
export function s(elem: s.Circle, props?: Props<s.Circle>, children?: SvgChild[]): s.Circle
export function s(elem: s.ClipPath, props?: Props<s.ClipPath>, children?: SvgChild[]): s.ClipPath
export function s(elem: s.Defs, props?: Props<s.Defs>, children?: SvgChild[]): s.Defs
export function s(elem: s.Desc, props?: Props<s.Desc>, children?: SvgChild[]): s.Desc
export function s(elem: s.Ellipse, props?: Props<s.Ellipse>, children?: SvgChild[]): s.Ellipse
export function s(elem: s.FeBlend, props?: Props<s.FeBlend>, children?: SvgChild[]): s.FeBlend
export function s(elem: s.FeColorMatrix, props?: Props<s.FeColorMatrix>, children?: SvgChild[]): s.FeColorMatrix
export function s(elem: s.FeComponentTransfer, props?: Props<s.FeComponentTransfer>, children?: SvgChild[]): s.FeComponentTransfer
export function s(elem: s.FeComposite, props?: Props<s.FeComposite>, children?: SvgChild[]): s.FeComposite
export function s(elem: s.FeConvolveMatrix, props?: Props<s.FeConvolveMatrix>, children?: SvgChild[]): s.FeConvolveMatrix
export function s(elem: s.FeDiffuseLighting, props?: Props<s.FeDiffuseLighting>, children?: SvgChild[]): s.FeDiffuseLighting
export function s(elem: s.FeDisplacementMap, props?: Props<s.FeDisplacementMap>, children?: SvgChild[]): s.FeDisplacementMap
export function s(elem: s.FeDistantLight, props?: Props<s.FeDistantLight>, children?: SvgChild[]): s.FeDistantLight
export function s(elem: s.FeFlood, props?: Props<s.FeFlood>, children?: SvgChild[]): s.FeFlood
export function s(elem: s.FeFuncA, props?: Props<s.FeFuncA>, children?: SvgChild[]): s.FeFuncA
export function s(elem: s.FeFuncB, props?: Props<s.FeFuncB>, children?: SvgChild[]): s.FeFuncB
export function s(elem: s.FeFuncG, props?: Props<s.FeFuncG>, children?: SvgChild[]): s.FeFuncG
export function s(elem: s.FeFuncR, props?: Props<s.FeFuncR>, children?: SvgChild[]): s.FeFuncR
export function s(elem: s.FeGaussianBlur, props?: Props<s.FeGaussianBlur>, children?: SvgChild[]): s.FeGaussianBlur
export function s(elem: s.FeImage, props?: Props<s.FeImage>, children?: SvgChild[]): s.FeImage
export function s(elem: s.FeMerge, props?: Props<s.FeMerge>, children?: SvgChild[]): s.FeMerge
export function s(elem: s.FeMergeNode, props?: Props<s.FeMergeNode>, children?: SvgChild[]): s.FeMergeNode
export function s(elem: s.FeMorphology, props?: Props<s.FeMorphology>, children?: SvgChild[]): s.FeMorphology
export function s(elem: s.FeOffset, props?: Props<s.FeOffset>, children?: SvgChild[]): s.FeOffset
export function s(elem: s.FePointLight, props?: Props<s.FePointLight>, children?: SvgChild[]): s.FePointLight
export function s(elem: s.FeSpecularLighting, props?: Props<s.FeSpecularLighting>, children?: SvgChild[]): s.FeSpecularLighting
export function s(elem: s.FeSpotLight, props?: Props<s.FeSpotLight>, children?: SvgChild[]): s.FeSpotLight
export function s(elem: s.FeTile, props?: Props<s.FeTile>, children?: SvgChild[]): s.FeTile
export function s(elem: s.FeTurbulence, props?: Props<s.FeTurbulence>, children?: SvgChild[]): s.FeTurbulence
export function s(elem: s.Filter, props?: Props<s.Filter>, children?: SvgChild[]): s.Filter
export function s(elem: s.ForeignObject, props?: Props<s.ForeignObject>, children?: SvgChild[]): s.ForeignObject
export function s(elem: s.G, props?: Props<s.G>, children?: SvgChild[]): s.G
export function s(elem: s.Image, props?: Props<s.Image>, children?: SvgChild[]): s.Image
export function s(elem: s.Line, props?: Props<s.Line>, children?: SvgChild[]): s.Line
export function s(elem: s.LinearGradient, props?: Props<s.LinearGradient>, children?: SvgChild[]): s.LinearGradient
export function s(elem: s.Marker, props?: Props<s.Marker>, children?: SvgChild[]): s.Marker
export function s(elem: s.Mask, props?: Props<s.Mask>, children?: SvgChild[]): s.Mask
export function s(elem: s.Metadata, props?: Props<s.Metadata>, children?: SvgChild[]): s.Metadata
export function s(elem: s.Path, props?: Props<s.Path>, children?: SvgChild[]): s.Path
export function s(elem: s.Pattern, props?: Props<s.Pattern>, children?: SvgChild[]): s.Pattern
export function s(elem: s.Polygon, props?: Props<s.Polygon>, children?: SvgChild[]): s.Polygon
export function s(elem: s.Polyline, props?: Props<s.Polyline>, children?: SvgChild[]): s.Polyline
export function s(elem: s.RadialGradient, props?: Props<s.RadialGradient>, children?: SvgChild[]): s.RadialGradient
export function s(elem: s.Rect, props?: Props<s.Rect>, children?: SvgChild[]): s.Rect
export function s(elem: s.Script, props?: Props<s.Script>, children?: SvgChild[]): s.Script
export function s(elem: s.Stop, props?: Props<s.Stop>, children?: SvgChild[]): s.Stop
export function s(elem: s.Style, props?: Props<s.Style>, children?: SvgChild[]): s.Style
export function s(elem: s.Svg, props?: Props<s.Svg>, children?: SvgChild[]): s.Svg
export function s(elem: s.Switch, props?: Props<s.Switch>, children?: SvgChild[]): s.Switch
export function s(elem: s.Symbol, props?: Props<s.Symbol>, children?: SvgChild[]): s.Symbol
export function s(elem: s.Text, props?: Props<s.Text>, children?: SvgChild[]): s.Text
export function s(elem: s.TextPath, props?: Props<s.TextPath>, children?: SvgChild[]): s.TextPath
export function s(elem: s.Title, props?: Props<s.Title>, children?: SvgChild[]): s.Title
export function s(elem: s.Tspan, props?: Props<s.Tspan>, children?: SvgChild[]): s.Tspan
export function s(elem: s.Use, props?: Props<s.Use>, children?: SvgChild[]): s.Use
export function s(elem: s.View, props?: Props<s.View>, children?: SvgChild[]): s.View
export function s<T extends keyof SvgTypes, E extends SvgTypes[T]>(tag: T, props?: Props<E> & AriaAttributes, children?: SvgChild[]): E
export function s(tagOrElem: keyof SvgTypes | SVGElement, props?: Props<SVGElement> & AriaAttributes, children?: SvgChild[]): SVGElement {
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
 * Nice-to-remember, concise aliases for all SVG element interfaces (or a
 * type-safer version of them).
 */
export namespace s {
    export interface A extends TypedElement<'a', SVGAElement, SvgChild> {}
    export interface Circle extends TypedElement<'circle', SVGCircleElement, SvgChild> {}
    export interface ClipPath extends TypedElement<'clipPath', SVGClipPathElement, SvgChild> {}
    export interface Defs extends TypedElement<'defs', SVGDefsElement, SvgChild> {}
    export interface Desc extends TypedElement<'desc', SVGDescElement, SvgChild> {}
    export interface Ellipse extends TypedElement<'ellipse', SVGEllipseElement, SvgChild> {}
    export interface FeBlend extends TypedElement<'feBlend', SVGFEBlendElement, SvgChild> {}
    export interface FeColorMatrix extends TypedElement<'feColorMatrix', SVGFEColorMatrixElement, SvgChild> {}
    export interface FeComponentTransfer extends TypedElement<'feComponentTransfer', SVGFEComponentTransferElement, SvgChild> {}
    export interface FeComposite extends TypedElement<'feComposite', SVGFECompositeElement, SvgChild> {}
    export interface FeConvolveMatrix extends TypedElement<'feConvolveMatrix', SVGFEConvolveMatrixElement, SvgChild> {}
    export interface FeDiffuseLighting extends TypedElement<'feDiffuseLighting', SVGFEDiffuseLightingElement, SvgChild> {}
    export interface FeDisplacementMap extends TypedElement<'feDisplacementMap', SVGFEDisplacementMapElement, SvgChild> {}
    export interface FeDistantLight extends TypedElement<'feDistantLight', SVGFEDistantLightElement, SvgChild> {}
    export interface FeFlood extends TypedElement<'feFlood', SVGFEFloodElement, SvgChild> {}
    export interface FeFuncA extends TypedElement<'feFuncA', SVGFEFuncAElement, SvgChild> {}
    export interface FeFuncB extends TypedElement<'feFuncB', SVGFEFuncBElement, SvgChild> {}
    export interface FeFuncG extends TypedElement<'feFuncG', SVGFEFuncGElement, SvgChild> {}
    export interface FeFuncR extends TypedElement<'feFuncR', SVGFEFuncRElement, SvgChild> {}
    export interface FeGaussianBlur extends TypedElement<'feGaussianBlur', SVGFEGaussianBlurElement, SvgChild> {}
    export interface FeImage extends TypedElement<'feImage', SVGFEImageElement, SvgChild> {}
    export interface FeMerge extends TypedElement<'feMerge', SVGFEMergeElement, SvgChild> {}
    export interface FeMergeNode extends TypedElement<'feMergeNode', SVGFEMergeNodeElement, SvgChild> {}
    export interface FeMorphology extends TypedElement<'feMorphology', SVGFEMorphologyElement, SvgChild> {}
    export interface FeOffset extends TypedElement<'feOffset', SVGFEOffsetElement, SvgChild> {}
    export interface FePointLight extends TypedElement<'fePointLight', SVGFEPointLightElement, SvgChild> {}
    export interface FeSpecularLighting extends TypedElement<'feSpecularLighting', SVGFESpecularLightingElement, SvgChild> {}
    export interface FeSpotLight extends TypedElement<'feSpotLight', SVGFESpotLightElement, SvgChild> {}
    export interface FeTile extends TypedElement<'feTile', SVGFETileElement, SvgChild> {}
    export interface FeTurbulence extends TypedElement<'feTurbulence', SVGFETurbulenceElement, SvgChild> {}
    export interface Filter extends TypedElement<'filter', SVGFilterElement, SvgChild> {}
    export interface ForeignObject extends TypedElement<'foreignObject', SVGForeignObjectElement, SvgChild> {}
    export interface G extends TypedElement<'g', SVGGElement, SvgChild> {}
    export interface Image extends TypedElement<'image', SVGImageElement, SvgChild> {}
    export interface Line extends TypedElement<'line', SVGLineElement, SvgChild> {}
    export interface LinearGradient extends TypedElement<'linearGradient', SVGLinearGradientElement, SvgChild> {}
    export interface Marker extends TypedElement<'marker', SVGMarkerElement, SvgChild> {}
    export interface Mask extends TypedElement<'mask', SVGMaskElement, SvgChild> {}
    export interface Metadata extends TypedElement<'metadata', SVGMetadataElement, SvgChild> {}
    export interface Path extends TypedElement<'path', SVGPathElement, SvgChild> {}
    export interface Pattern extends TypedElement<'pattern', SVGPatternElement, SvgChild> {}
    export interface Polygon extends TypedElement<'polygon', SVGPolygonElement, SvgChild> {}
    export interface Polyline extends TypedElement<'polyline', SVGPolylineElement, SvgChild> {}
    export interface RadialGradient extends TypedElement<'radialGradient', SVGRadialGradientElement, SvgChild> {}
    export interface Rect extends TypedElement<'rect', SVGRectElement, SvgChild> {}
    export interface Script extends TypedElement<'script', SVGScriptElement, SvgChild> {}
    export interface Stop extends TypedElement<'stop', SVGStopElement, SvgChild> {}
    export interface Style extends TypedElement<'style', SVGStyleElement, SvgChild> {}
    export interface Svg extends TypedElement<'svg', SVGSVGElement, SvgChild> {}
    export interface Switch extends TypedElement<'switch', SVGSwitchElement, SvgChild> {}
    export interface Symbol extends TypedElement<'symbol', SVGSymbolElement, SvgChild> {}
    export interface Text extends TypedElement<'text', SVGTextElement, SvgChild> {}
    export interface TextPath extends TypedElement<'textPath', SVGTextPathElement, SvgChild> {}
    export interface Title extends TypedElement<'title', SVGTitleElement, SvgChild> {}
    export interface Tspan extends TypedElement<'tspan', SVGTSpanElement, SvgChild> {}
    export interface Use extends TypedElement<'use', SVGUseElement, SvgChild> {}
    export interface View extends TypedElement<'view', SVGViewElement, SvgChild> {}
}
