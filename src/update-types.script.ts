#!/usr/bin/env node

import * as fs from 'fs'
import * as path from 'path'
import * as https from 'https'
import {JSDOM} from 'jsdom'


// Helper functions.

const textToCamel = (str: string) => str.replace(/((\-| )\w)/g, match => match[1].toUpperCase())
// const ucfirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

function update(filename: string, url: string, cb: (doc: Document) => string) {
    try {
        https.get(url, res => {
            res.setEncoding('utf8')
            let data = ''
            res.on('data', chunk => data += chunk)
            res.on('end', () => fs.writeFileSync(filename, cb(new JSDOM(data).window.document)))
            res.on('error', err => console.error(`Error downloading ${url}`, err))
        })
    } catch (err) {
        console.error(`Error downloading ${url}`, err)
    }
}


// ARIA attributes.

update(path.resolve(__dirname, 'AriaAttributes.ts'), 'https://www.w3.org/TR/wai-aria-1.1/', doc => {
    const roles = Array
        .from(doc.getElementById('role_definitions')!.querySelectorAll('dt a'))
        .map(el => el.textContent!.trim())
        .filter(r => r.indexOf('abstract role') === -1)

    const attrs = Array
        .from(doc.getElementById('state_prop_def')!.querySelectorAll('dt a'))
        .map(el => el.textContent!.trim())

    return `/// Script-generated.

export type AriaRole
    = ${roles.map(r => `'${r}'`).join('\n    | ')}

export interface AriaAttributes {
    role?: AriaRole
${attrs.map(a => `    '${a}'?: string`).join('\n')}
}
`
})


// HTML element content categories.

update(path.resolve(__dirname, 'HtmlContent.ts'), 'https://www.w3.org/TR/html52/fullindex.html', doc => {
    const elems = Array
        .from<HTMLTableRowElement>(
            doc
                .querySelector('#element-content-categories')!
                .nextElementSibling!
                .nextElementSibling!
                .nextElementSibling!
                .querySelectorAll('tbody tr')
        )
        .map(row => [
            textToCamel(
                row.cells[0].textContent!
                    .trim()
                    .replace('*', '')
            ),
            Array
                .from(row.cells[1].querySelectorAll('a'))
                .map(el => el.textContent!.trim())
                .concat(
                    // Elements with exceptions.
                    row.cells[2].textContent!
                        .trim()
                        .slice(0, -1)
                        .split(';')
                        .map(tag => tag.trim().split(' ')[0])
                        .filter(tag => tag !== '')
                )
        ])

    return `/// Script-generated.

import {HtmlTypes} from './HtmlTypes'

/**
 * Content categories for HTML elements. For reference, see:
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories.
 */
export namespace HtmlContent {
    export type TransparentContent = string | HTMLElement | SVGSVGElement
${
    elems
        .map(([category, tags]) =>
            `    export type ${category} = ${(tags as string[])
                .filter(tag => tag !== 'math') // MathML has very poor browser support yet.
                .map(tag => tag === 'Text'
                    ? 'string'
                    : tag === 'svg'
                    ? 'SVGSVGElement'
                    : `HtmlTypes['${tag}']`
                )
                .join(' | ')}`)
        .join('\n')
}
}
`
})


// HTML element children.

update(path.resolve(__dirname, 'HtmlChildren.ts'), 'https://www.w3.org/TR/html52/fullindex.html', doc => {
    const elems: [string, string[]][] = []
    const initialElems: [string, string[]][] = Array
        .from<HTMLTableRowElement>(
            doc
                .querySelector('#index-elements')!
                .nextElementSibling!
                .nextElementSibling!
                .querySelectorAll('tbody tr')
        )
        .map(row => [
            row.cells[0].textContent!.trim(),
            row.cells[4].textContent!
                .toLowerCase()
                .replace('one ', '')
                .replace(/[\s*]/g, '')
                .split(';')
        ])

    initialElems.forEach(([tag, childrenCategories]) => {
        if (tag.indexOf(',') > -1) {
            const subElems: [string, string[]][] = tag
                .split(',')
                .map(t => [t.trim(), childrenCategories])

            return subElems.forEach(([tag, childrenCategories]) => elems.push([tag, childrenCategories]))
        }
        return elems.push([tag, childrenCategories])
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
        'varies': 'string | HTMLElement | SVGSVGElement',
        'it’scomplicated': 'string | HTMLElement | SVGSVGElement'
    }

    const tagsWithSpecialTypes = {
        iframe: '(string | HTMLElement)[]'
    }

    return `/// Script-generated.

import {HtmlContent} from './HtmlContent'
import {HtmlTypes} from './HtmlTypes'

/**
 * Map from HTML tag names to the types accepted as children by their
 * corresponding HTML elements.
 */
export interface HtmlChildren {
${
    elems
        .map(([tag, childrenCategories]) => {
            if (tagsWithSpecialTypes[tag as keyof typeof tagsWithSpecialTypes]) {
                return `    ${tag}: ${tagsWithSpecialTypes[tag as keyof typeof tagsWithSpecialTypes]}`
            }

            let type = childrenCategories
                .map(cat => textToType[cat as keyof typeof textToType] || `HtmlTypes['${cat}']`)
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
}

/**
 * Elements declared in \`HTMLElementTagNameMap\` but not in the spec.
 */
export interface HtmlChildren {
    applet: (string | Element)[]
    basefont: (string | Element)[]
    dir: (string | Element)[]
    font: (string | Element)[]
    frame: (string | Element)[]
    frameset: (string | Element)[]
    hgroup: (string | Element)[]
    marquee: (string | Element)[]
    menu: (string | Element)[]
    slot: (string | Element)[]
}
`
})


// Other.

// const specialSvgCatNames = {
//     'never-rendered element': 'NeverRenderedElements'
// }
//
// const svgCatName = cat => specialSvgCatNames[cat.toLowerCase()]
//     || (ucfirst(textToCamel(cat)) + (cat.toLowerCase().endsWith('element') ? 's' : ''))


// update(path.resolve(__dirname, 'SVGElementContent.ts'), 'https://svgwg.org/svg2-draft/single-page.html', doc => {
//     const elemsByCat = {}
//
//     Array
//         .from(doc.querySelectorAll('.element-summary'))
//         .forEach(summ => {
//             const tag = summ.querySelector('.element-summary-name .element-name dfn').textContent
//
//             Array
//                 .from(summ.querySelectorAll('dl > dt:first-child + dd > a'))
//                 .map(cat => svgCatName(cat.textContent))
//                 .forEach(cat => {
//                     if (elemsByCat[cat]) {
//                         elemsByCat[cat].push(tag)
//                     } else {
//                         elemsByCat[cat] = [tag]
//                     }
//                 })
//         })
//
//     return `/// Script-generated.
//
// /**
//  * Content categories for SVG elements. For reference, see:
//  * https://developer.mozilla.org/en-US/docs/Web/SVG/Element#SVG_elements_by_category.
//  */
// export namespace SVGElementContent {
// ${
//     Object
//         .keys(elemsByCat)
//         .map(cat =>
//             `    export type ${cat} = ${elemsByCat[cat]
//                 .filter(tag => tag !== 'unknown')
//                 .map(tag => tag === 'Text'
//                     ? 'string'
//                     : `SVGElementTagNameMap['${tag}']`
//                 )
//                 .join(' | ')}`)
//         .join('\n')
// }
// }
// `
// })


// update(path.resolve(__dirname, 'SVGElementChildrenMap.ts'), 'https://svgwg.org/svg2-draft/single-page.html', doc => {
//     const contentByTag = {}
//
//     Array
//         .from(doc.querySelectorAll('.element-summary'))
//         .forEach(summ => {
//             const tag = summ.querySelector('.element-summary-name .element-name dfn').textContent
//
//             const content = Array
//                 .from(summ.querySelectorAll('dl > dt'))
//                 .filter(elem => elem.textContent === 'Content model:')
//                 .pop()
//                 .nextElementSibling
//
//             contentByTag[tag] = {
//                 categories: Array
//                     .from(content.querySelectorAll('ul.no-bullets > li > a'))
//                     .map(cat => svgCatName(cat.textContent)),
//                 elements: Array
//                     .from(content.querySelectorAll(':scope > .element-name > a > span'))
//                     .map(tag => tag.textContent)
//             }
//         })
//
//     return `/// Script-generated.
//
// import {SVGElementContent} from './SVGElementContent'
//
// /**
//  * Map from SVG tag names to the types accepted as children by their
//  * corresponding SVG elements.
//  */
// export interface SVGElementChildrenMap {
// ${
//     Object
//         .keys(contentByTag)
//         .map(tag => {
//             // if (tagsWithSpecialTypes[tag]) {
//             //     return `    ${tag}: ${tagsWithSpecialTypes[tag]}`
//             // }
//
//             let type = [
//                 ...contentByTag[tag].categories.map(cat => `SVGElementContent.${cat}`),
//                 ...contentByTag[tag].elements.map(tag => `SVGElementTagNameMap['${tag}']`)
//             ]
//             .join(' | ')
//
//             if (type.indexOf(' | ') > -1) {
//                 type = '(' + type + ')'
//             }
//             // if (type !== 'void') {
//             //     type += '[]'
//             // }
//             return `    ${tag}: ${type}[]`
//         })
//         .join('\n')
// }
// }
// `
// })
