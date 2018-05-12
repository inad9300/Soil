// Source: https://www.w3.org/TR/html52/fullindex.html.

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
    transparent: 'HtmlContent.TransparentContent',
    phrasing: 'HtmlContent.PhrasingContent',
    flow: 'HtmlContent.FlowContent',
    metadata: 'HtmlContent.MetadataContent',
    'script-supportingelements': 'HtmlContent.ScriptSupportingElements',
    'script,data,orscriptdocumentation': 'Text',
    text: 'Text',
    empty: 'void',
    varies: `HTMLElement | SVGSVGElement | Text`,
    'it’scomplicated': `HTMLElement | SVGSVGElement | Text`
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
        .map(([tag, childrenCategories]) => `    ${tag}: ${
            childrenCategories
                .map(cat => textToType[cat] || `HtmlTypesMap['${cat}']`)
                .join(' | ')
            }`)
            .join('\n')
}
}`)
