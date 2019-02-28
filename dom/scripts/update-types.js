#!/usr/bin/env node

const fs = require('fs')
const https = require('https')
const {JSDOM} = require('jsdom')

const snakeToCamel = str => str.replace(/(\-\w)/g, match => match[1].toUpperCase())

function update(filename, url, cb) {
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

update('../src/AriaAttributes.ts', 'https://www.w3.org/TR/wai-aria-1.1/', doc => {
    const roles = Array
        .from(doc.getElementById('role_definitions').querySelectorAll('dt a'))
        .map(el => el.textContent.trim())
        .filter(r => r.indexOf('abstract role') === -1)

    const attrs = Array
        .from(doc.getElementById('state_prop_def').querySelectorAll('dt a'))
        .map(el => el.textContent.trim())

    return `/// Script-generated.

export type AriaRole
    = ${roles.map(r => `'${r}'`).join('\n    | ')}

export interface AriaAttributes {
    role?: AriaRole
${attrs.map(a => `    '${a}'?: string`).join('\n')}
}
`
})

update('../src/html/HTMLElementContent.ts', 'https://www.w3.org/TR/html52/fullindex.html', doc => {
    const elems = Array
        .from(
            doc
                .querySelector('#element-content-categories')
                .nextElementSibling
                .nextElementSibling
                .nextElementSibling
                .querySelectorAll('tbody tr')
        )
        .map(row => [
            snakeToCamel(
                row.cells[0].textContent
                    .trim()
                    .replace(' ', '-')
                    .replace('*', '')
            ),
            Array
                .from(row.cells[1].querySelectorAll('a'))
                .map(el => el.textContent.trim())
                .concat(
                    // Elements with exceptions.
                    row.cells[2].textContent
                        .trim()
                        .slice(0, -1)
                        .split(';')
                        .map(tag => tag.trim().split(' ')[0])
                        .filter(tag => tag !== '')
                )
        ])

    return `/// Script-generated.

/**
 * Content categories for HTML elements. For reference, see:
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories.
 */
export namespace HTMLElementContent {
    export type TransparentContent = string | HTMLElement | SVGSVGElement
${
    elems
        .map(([category, tags]) =>
            `    export type ${category} = ${tags
                .filter(tag => tag !== 'math') // MathML has very poor browser support yet.
                .map(tag => tag === 'Text'
                    ? 'string'
                    : tag === 'svg'
                    ? 'SVGSVGElement'
                    : `HTMLElementTagNameMap['${tag}']`
                )
                .join(' | ')}`)
        .join('\n')
}
}
`
})

update('../src/html/HTMLElementChildrenMap.ts', 'https://www.w3.org/TR/html52/fullindex.html', doc => {
    const elems = []
    const initialElems = Array
        .from(
            doc
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

    initialElems.forEach(([tag, childrenCategories]) => {
        if (tag.indexOf(',') > -1) {
            return tag
                .split(',')
                .map(t => [t.trim(), childrenCategories])
                .forEach(([tag, childrenCategories]) => elems.push([tag, childrenCategories]))
        }
        return elems.push([tag, childrenCategories])
    })

    const textToType = {
        'transparent': 'HTMLElementContent.TransparentContent',
        'phrasing': 'HTMLElementContent.PhrasingContent',
        'flow': 'HTMLElementContent.FlowContent',
        'metadata': 'HTMLElementContent.MetadataContent',
        'script-supportingelements': 'HTMLElementContent.ScriptSupportingElements',
        'script,data,orscriptdocumentation': 'string',
        'text': 'string',
        'empty': 'never',
        'varies': 'string | HTMLElement | SVGSVGElement',
        'it’scomplicated': 'string | HTMLElement | SVGSVGElement'
    }

    const tagsWithSpecialTypes = {
        iframe: '(string | HTMLElement)[]'
    }

    return `/// Script-generated.

import {HTMLElementContent} from './HTMLElementContent'

/**
 * Map from HTML tag names to the types accepted as children by their
 * corresponding HTML elements.
 */
export interface HTMLElementChildrenMap extends Record<keyof HTMLElementTagNameMap, never | (string | Element)[]> {
${
    elems
        .map(([tag, childrenCategories]) => {
            if (tagsWithSpecialTypes[tag]) {
                return `    ${tag}: ${tagsWithSpecialTypes[tag]}`
            }

            let type = childrenCategories
                .map(cat => textToType[cat] || `HTMLElementTagNameMap['${cat}']`)
                .join(' | ')

            if (type.indexOf(' | ') > -1) {
                type = '(' + type + ')'
            }
            if (type !== 'never') {
                type += '[]'
            }
            return `    ${tag}: ${type}`
        })
        .join('\n')
}
}
`
})
