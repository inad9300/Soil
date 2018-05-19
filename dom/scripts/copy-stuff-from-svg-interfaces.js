// Source: https://raw.githubusercontent.com/Microsoft/TypeScript/master/lib/lib.dom.d.ts.

const firstUp = str => str.charAt(0).toUpperCase() + str.slice(1)

const elementsWithReservedNames = ['switch']

const fixReservedTag = tag => elementsWithReservedNames.indexOf(tag) > -1 ? tag + '_' : tag

const svgRegExp = /createElementNS\(namespaceURI: "http:\/\/www\.w3\.org\/2000\/svg", qualifiedName: "([a-zA-Z]+)"\): (SVG[a-zA-Z]+Element);/

const voidElements = []
const elementsWithSpecialChildren = {
    'foreignObject': '(Element | string)[]'
}

// Patch https://github.com/Microsoft/TypeScript/issues/24269.
const falseSvgTags = ['componentTransferFunction', 'textContent', 'textPositioning']

const svgInterfaces = document
    .body
    .textContent
    .match(new RegExp(svgRegExp, 'g'))
    .sort()
    .map(line => line.match(svgRegExp).slice(1, 3))
    .filter(iface => falseSvgTags.indexOf(iface[0]) === -1)


copy(
`/// Script-generated.
// Array containing the names of all interfaces of SVG elements (does not include ancestors).
const svgInterfaces = ` + JSON.stringify(
        svgInterfaces.map(([tag, iface]) => iface)
    )
    .replace(/"/g, `'`)
    .replace(/,/g, `, `)
)


copy(
`/// Script-generated.

/**
 * Map from SVG tag names to their corresponding types.
 */
export interface SvgTypesMap {
${
    svgInterfaces
        .map(([tag, iface]) => `    ${tag}: ${iface}`)
        .join('\n')
}
}`)


copy(
`/// Script-generated.

import {BuiltTimeDom} from '../BuiltTimeDom'

/**
 * Map from SVG tag names to their corresponding built-time types.
 */
export interface BuiltTimeSvgTypesMap {
${
    svgInterfaces
        .map(([tag, iface]) => `    ${tag}: BuiltTimeDom.${iface}`)
        .join('\n')
}
}`)


copy(
`/// Script-generated.

/**
 * Helpers to facilitate the concise creation of any SVG element.
 *
 * NOTE The following functions silently depend on the \`document\` variable
 * being globally available. Therefore, unit tests of components that use them
 * must be run inside a browser, or must expose \`document\` globally, e.g.
 * through PhantomJS or jsdom.
 */
export namespace s {
${
    svgInterfaces
        .map(([tag, iface]) => {
            return voidElements.indexOf(tag) > -1
                ? `    export const ${fixReservedTag(tag)} = (props?: BuiltTimeDom.${iface}): SvgTypesMap['${tag}'] => ss('${tag}', props)`
                : `    export const ${fixReservedTag(tag)} = (props?: BuiltTimeDom.${iface}, children?: ${elementsWithSpecialChildren[tag] || '(SVGElement | string)[]'}): SvgTypesMap['${tag}'] => ss('${tag}', props, children)`
        })
        .join('\n')
}
}`)


copy(
`/// Script-generated.

/**
 * Nice-to-remember aliases for all SVG element interfaces.
 */
export namespace s {
${
    svgInterfaces
        .map(([tag, iface]) => `    export type ${firstUp(tag)} = ${iface}`)
        .join('\n')
}
}`)
