// Source: https://www.w3.org/TR/html52/fullindex.html.

const snakeToCamel = str => str.replace(/(\-\w)/g, match => match[1].toUpperCase())

const elements = Array
    .from(
        document
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

copy(
`/// Script-generated.

import {HtmlTypesMap} from './HtmlTypesMap'

/**
 * Content categories for HTML elements. For reference, see:
 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories.
 */
export namespace HtmlContent {
    export type TransparentContent = HTMLElement | SVGSVGElement | string
${
    elements
        .map(([category, tags]) =>
            `    export type ${category} = ${tags
                .filter(tag => tag !== 'math') // MathML has very poor browser support.
                .map(tag => tag === 'Text'
                    ? 'string'
                    : tag === 'svg'
                    ? 'SVGSVGElement'
                    : `HtmlTypesMap['${tag}']`
                )
                .join(' | ')}`)
        .join('\n')
}
}`)
