// Source: https://www.w3.org/TR/html52/fullindex.html.
// Target: ../src/html/HtmlChildrenMap.ts.

const elements = []
const initialElements = Array
    .from(
        document
            .querySelector('#index-elements')
            .nextElementSibling
            .nextElementSibling
            .querySelectorAll('tbody tr')
    )
    .map(row => [
        row.cells[0].textContent.trim(),
        row.cells[4].textContent
            .toLowerCase()
            .replace('one ', '')
            .replace(/[\s*]/g, '')
            .split(';')
    ])

initialElements.forEach(([tag, childrenCategories]) => {
    if (tag.indexOf(',') > -1) {
        return tag
            .split(',')
            .map(t => [t.trim(), childrenCategories])
            .forEach(([tag, childrenCategories]) => elements.push([tag, childrenCategories]))
    }
    return elements.push([tag, childrenCategories])
})

const textToType = {
    'transparent': 'HtmlContent.TransparentContent',
    'phrasing': 'HtmlContent.PhrasingContent',
    'flow': 'HtmlContent.FlowContent',
    'metadata': 'HtmlContent.MetadataContent',
    'script-supportingelements': 'HtmlContent.ScriptSupportingElements',
    'script,data,orscriptdocumentation': 'string',
    'text': 'string',
    'empty': 'void',
    'varies': 'HTMLElement | SVGSVGElement | string',
    'it’scomplicated': 'HTMLElement | SVGSVGElement | string'
}

const tagsWithSpecialTypes = {
    iframe: '(HTMLElement | string)[]'
}

copy(
`/// Script-generated.

import {HtmlContent} from './HtmlContent'
import {HtmlTypesMap} from './HtmlTypesMap'

/**
 * Map from HTML tag names to the types accepted as children by their
 * corresponding HTML elements.
 */
export interface HtmlChildrenMap {
${
    elements
        .map(([tag, childrenCategories]) => {
            if (tagsWithSpecialTypes[tag]) {
                return `    ${tag}: ${tagsWithSpecialTypes[tag]}`
            }

            let type = childrenCategories
                .map(cat => textToType[cat] || `HtmlTypesMap['${cat}']`)
                .join(' | ')

            if (type.indexOf(' | ') > -1) {
                type = '(' + type + ')'
            }
            if (type !== 'void') {
                type += '[]'
            }
            return `    ${tag}: ${type}`
        })
        .join('\n')
}
}`)
