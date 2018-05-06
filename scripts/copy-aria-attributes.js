// Source: https://www.w3.org/TR/wai-aria-1.1/.

const roles = Array
    .from(
        document
            .getElementById('role_definitions')
            .querySelectorAll('dt a')
    )
    .map(el => el.textContent.trim())
    .filter(r => r.indexOf('abstract role') === -1)

const attrs = Array
    .from(
        document
            .getElementById('state_prop_def')
            .querySelectorAll('dt a')
    )
    .map(el => el.textContent.trim())

copy(
`/// Script-generated.

export type AriaRole
    = ${roles.map(r => `'${r}'`).join('\n\t| ')}

export interface AriaAttributes {
    role: AriaRole
${attrs.map(a => `\t'${a}': string`).join('\n')}
}
`)
