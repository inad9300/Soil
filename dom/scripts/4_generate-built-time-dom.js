// Target (automatic): ../src/BuiltTimeDom.ts.

const fs = require('fs')
const https = require('https')

console.debug = () => {}

/// Script-generated.
// Array containing the names of all interfaces of HTML elements (does not include ancestors).
const htmlInterfaces = ['HTMLAnchorElement', 'HTMLAreaElement', 'HTMLAudioElement', 'HTMLBRElement', 'HTMLBaseElement', 'HTMLBodyElement', 'HTMLButtonElement', 'HTMLCanvasElement', 'HTMLDListElement', 'HTMLDataElement', 'HTMLDataListElement', 'HTMLDetailsElement', 'HTMLDialogElement', 'HTMLDivElement', 'HTMLElement', 'HTMLEmbedElement', 'HTMLFieldSetElement', 'HTMLFormElement', 'HTMLHRElement', 'HTMLHeadElement', 'HTMLHeadingElement', 'HTMLHtmlElement', 'HTMLIFrameElement', 'HTMLImageElement', 'HTMLInputElement', 'HTMLLIElement', 'HTMLLabelElement', 'HTMLLegendElement', 'HTMLLinkElement', 'HTMLMapElement', 'HTMLMetaElement', 'HTMLMeterElement', 'HTMLModElement', 'HTMLOListElement', 'HTMLObjectElement', 'HTMLOptGroupElement', 'HTMLOptionElement', 'HTMLOutputElement', 'HTMLParagraphElement', 'HTMLParamElement', 'HTMLPictureElement', 'HTMLPreElement', 'HTMLProgressElement', 'HTMLQuoteElement', 'HTMLScriptElement', 'HTMLSelectElement', 'HTMLSourceElement', 'HTMLSpanElement', 'HTMLStyleElement', 'HTMLTableCaptionElement', 'HTMLTableColElement', 'HTMLTableDataCellElement', 'HTMLTableElement', 'HTMLTableHeaderCellElement', 'HTMLTableRowElement', 'HTMLTableSectionElement', 'HTMLTemplateElement', 'HTMLTextAreaElement', 'HTMLTimeElement', 'HTMLTitleElement', 'HTMLTrackElement', 'HTMLUListElement', 'HTMLVideoElement']

/// Script-generated.
// Array containing the names of all interfaces of SVG elements (does not include ancestors).
const svgInterfaces = ['SVGAElement', 'SVGCircleElement', 'SVGClipPathElement', 'SVGDefsElement', 'SVGDescElement', 'SVGEllipseElement', 'SVGFEBlendElement', 'SVGFEColorMatrixElement', 'SVGFEComponentTransferElement', 'SVGFECompositeElement', 'SVGFEConvolveMatrixElement', 'SVGFEDiffuseLightingElement', 'SVGFEDisplacementMapElement', 'SVGFEDistantLightElement', 'SVGFEFloodElement', 'SVGFEFuncAElement', 'SVGFEFuncBElement', 'SVGFEFuncGElement', 'SVGFEFuncRElement', 'SVGFEGaussianBlurElement', 'SVGFEImageElement', 'SVGFEMergeElement', 'SVGFEMergeNodeElement', 'SVGFEMorphologyElement', 'SVGFEOffsetElement', 'SVGFEPointLightElement', 'SVGFESpecularLightingElement', 'SVGFESpotLightElement', 'SVGFETileElement', 'SVGFETurbulenceElement', 'SVGFilterElement', 'SVGForeignObjectElement', 'SVGGElement', 'SVGGradientElement', 'SVGImageElement', 'SVGLineElement', 'SVGLinearGradientElement', 'SVGMarkerElement', 'SVGMaskElement', 'SVGMetadataElement', 'SVGPathElement', 'SVGPatternElement', 'SVGPolygonElement', 'SVGPolylineElement', 'SVGRadialGradientElement', 'SVGRectElement', 'SVGScriptElement', 'SVGStopElement', 'SVGStyleElement', 'SVGSVGElement', 'SVGSwitchElement', 'SVGSymbolElement', 'SVGTextElement', 'SVGTextPathElement', 'SVGTitleElement', 'SVGTSpanElement', 'SVGUseElement', 'SVGViewElement']

const primitiveTypes = ['boolean', 'number', 'string', 'null', 'void', 'undefined']

// Types for fields that, despite being read-only, make sense to use when
// creating HTML elements, since some of their nested properties are assignable.
const modifiableReadonlyTypes = [
    // Entries expected to appear as missing interfaces in the final output.
    'any', // NOTE Disable (comment) once in a while to analyze the output.
    'Node & ParentNode',

    'CSSStyleDeclaration',
    'DOMRect',
    'DOMStringMap',
    'DOMTokenList',
    'SVGAngle',
    'SVGAnimatedAngle',
    'SVGAnimatedBoolean',
    'SVGAnimatedEnumeration',
    'SVGAnimatedInteger',
    'SVGAnimatedLength',
    'SVGAnimatedNumber',
    'SVGAnimatedPreserveAspectRatio',
    'SVGAnimatedRect',
    'SVGAnimatedString',
    'SVGLength',
    'SVGPreserveAspectRatio'
]

// Read-only types whose nested fields are all unmodifiable (or that are in practice deeply unmodifiable).
// NOTE Worth revisiting once in a while.
const unmodifiableReadonlyTypes = [
    'AudioTrackList',
    'CSSRule',
    'Document',
    'DocumentFragment',
    'DOMRectReadOnly',
    'HTMLAreasCollection',
    'HTMLCollection',
    'HTMLCollectionBase',
    'HTMLCollectionOf',
    'HTMLFormControlsCollection',
    'HTMLOptionsCollection',
    'HTMLSlotElement',
    'MediaError',
    'MediaKeys',
    'MSGraphicsTrust',
    'NamedNodeMap',
    'NodeList',
    'NodeListOf',
    'ShadowRoot',
    'StyleSheet',
    'SVGAnimatedLengthList',
    'SVGAnimatedNumberList',
    'SVGAnimatedTransformList',
    'SVGElementInstance',
    'SVGPoint',
    'SVGPointList',
    'SVGRect',
    'SVGStringList',
    'TextTrack',
    'TextTrackList',
    'TimeRanges',
    'ValidityState',
    'VideoTrackList',
    'Window'
]

// These types must be reviewed in order to determine whether any of their
// properties can be modified or not (will be printed in the end).
const unknownReadonlyTypes = []

const allInterfaces = htmlInterfaces
    .concat(svgInterfaces)
    .concat(modifiableReadonlyTypes)

download('https://raw.githubusercontent.com/Microsoft/TypeScript/master/lib/lib.dom.d.ts', source => {
    addAncestors(source, allInterfaces)

    // Before the element exists (i.e. while it is being created, which is the
    // case for which we want to define new interfaces), fields pointing to
    // other elements can't be used.
    allInterfaces.forEach(i => unmodifiableReadonlyTypes.push(i))

    addAncestors(source, modifiableReadonlyTypes)

    const out = source
        .split('\n')
        .filter(takeInterfaces(allInterfaces))
        .map(ensureOneDeclarationPerLine)
        .filter(skipDeprecatedFields())
        .filter(skipFunctions)
        .filter(skipReadonlyFields)
        .filter(skipIndexSignaturesFrom(['HTMLSelectElement', 'HTMLFormElement']))
        .filter(skipComments())
        .join('\n')

    const missedInterfaces = allInterfaces
        .filter(iface => !new RegExp(`\\binterface ${iface}[\\s<]`).test(out))

    console.warn('Interfaces missing in TypeScript:', missedInterfaces)
    console.warn('Unknown types:', unknownReadonlyTypes)

    fs.writeFileSync('../src/BuiltTimeDom.ts', `/// Script-generated.

import {AriaAttributes} from './AriaAttributes'

/**
 * Subset of the interfaces defined for HTML elements which makes sense to use
 * when building HTML elements.
 */
export namespace BuiltTimeDom {
${
    out
        .replace(/interface /g, 'export interface ')
        .replace('interface HTMLElement extends ', 'interface HTMLElement extends AriaAttributes, ')
        .replace(/{\n}/g, '{}')
        .replace(/export interface /g, '\nexport interface ')
        .replace(/(\s{4}(?:readonly )?[a-zA-Z0-9_]+):/g, '$1?:')
        .replace(/\n\s{4}autofocus\?: boolean;/g, '')
        .replace(/;/g, '')
}

}`)
    console.info('Done.')
})

function download(url, cb) {
    https.get(url, res => {
        let data = ''
        res.setEncoding('utf8')
        res.on('data', chunk => data += chunk)
        res.on('end', () => cb(data))
    })
}

function addAncestors(source, interfaces) {
    const initialLength = interfaces.length

    interfaces.forEach(i => {
        const match = source.match(new RegExp(`interface ${i}(?:<[a-zA-Z0-9_\\s|&]+>)? extends (.*){`))
        if (match && match[1]) {
            match[1]
                .split(',')
                .map(a => a.trim())
                .forEach(a => {
                    if (interfaces.indexOf(a) === -1) {
                        console.debug(`Adding ancestor interface "${a}".`)
                        interfaces.push(a)
                    }
                })
        }
    })

    if (interfaces.length > initialLength) {
        addAncestors(source, interfaces)
    }
}

function takeInterfaces(interfaces) {
    let insideInterface = false

    return line => {
        const match = line.match(/interface ([a-zA-Z0-9_]+) .*{/)
        if (match && interfaces.indexOf(match[1]) > -1) {
            insideInterface = true
        }
        if (insideInterface && /}$/.test(line)) {
            insideInterface = false
            return true
        }
        return insideInterface
    }
}

function ensureOneDeclarationPerLine(line) {
    const l = line.trim()
    if (l === ''
        || l.startsWith('*')
        || l.startsWith('/*')
        || l.startsWith('//')
        || l.endsWith(';')
        || l.endsWith('{')
        || l.endsWith('}')) {
        return line
    }
    throw new Error(`Unexpected end on line "${line}".`)
}

function skipDeprecatedFields() {
    let skipNext = false

    return line => {
        if (skipNext) {
            skipNext = false
            console.debug(`Skipping deprecated field "${line.trim()}".`)
            return false
        }
        if (/@deprecated/.test(line)) {
            skipNext = true
            return false
        }
        return true
    }
}

function skipFunctions(line) {
    if (/^\s{4}[a-zA-Z0-9_]+(<|\()/.test(line) && !/^\s{4}new\s*\(/.test(line)) {
        console.debug(`Skipping function "${line.trim()}".`)
        return false
    }
    return true
}

function skipReadonlyFields(line) {
    if (!/\breadonly\s/.test(line)) {
        return true
    }

    const isModifiableReadonlyType = new RegExp(
        modifiableReadonlyTypes.map(t => `\\b${t}\\b`).join('|')
    ).test(line)

    if (isModifiableReadonlyType) {
        console.debug(`Allowing read-only field "${line.trim()}".`)
        return true
    } else {
        const knownReadonlyTypesRegExp = new RegExp(`\\breadonly\\s[a-zA-Z0-9_]+: (${
            primitiveTypes
                .concat(unmodifiableReadonlyTypes)
                .join('|')
        })(<[a-zA-Z0-9_\\s|&]+>)?( \\| null)?;`)

        if (!knownReadonlyTypesRegExp.test(line)) {
            unknownReadonlyTypes.push(line.trim().slice('readonly '.length, -1))
            console.debug(`Skipping read-only, non-primitive field "${line.trim()}".`)
        }

        return false
    }
}

function skipIndexSignaturesFrom(ifaces) {
    let skipNext = false
    const regexps = ifaces.map(iface => new RegExp(`\\binterface ${iface}[\\s<]`))

    return line => {
        if (regexps.some(r => r.test(line))) {
            console.debug(`Preparing to skip index signature from "${line.trim()}".`)
            skipNext = true
            return true
        }
        if (skipNext && /\s+\[[a-zA-Z0-9_]+: (string|number)\]: [a-zA-Z0-9_]+/.test(line)) {
            skipNext = false
            console.debug(`Skipping index signature "${line.trim()}".`)
            return false
        }
        return true
    }
}

function skipComments() {
    let insideComment = false

    return line => {
        line = line.trim()
        if (!insideComment && line.startsWith('//')) {
            return false
        }
        if (line.startsWith('/*')) {
            insideComment = true
        }
        if (insideComment && line.endsWith('*/')) {
            insideComment = false
            return false
        }
        return !insideComment
    }
}
