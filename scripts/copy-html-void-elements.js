// Source: https://developer.mozilla.org/en-US/docs/Glossary/Empty_element.

copy(
`/// Script-generated.
const voidElements = ` + JSON.stringify(
        Array
            .from(
                document.querySelectorAll('#wikiArticle ul li a code')
            )
            .map(el => el.textContent.slice(1, -1))
    )
    .replace(/"/g, `'`)
    .replace(/,/g, `, `)
)
