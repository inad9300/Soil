// Source: https://www.w3.org/TR/SVG2/Overview.html.

const svgInterfaces = document
    .getElementById('toc')
    .textContent
    .match(/SVG[a-zA-Z]+Element/g)
    .filter((iface, idx, arr) => arr.indexOf(iface) === idx)
    .sort()

copy(
`/// Script-generated.
// Array containing the names of all interfaces of SVG elements (does not include ancestors).
const svgInterfaces = ` + JSON.stringify(svgInterfaces)
    .replace(/"/g, `'`)
    .replace(/,/g, `, `)
)
