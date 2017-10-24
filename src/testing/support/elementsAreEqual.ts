const {assert} = intern.getPlugin('chai')

/**
 * Check if two HTML or SVG elements are exactly equal.
 */
export function elementsAreEqual(e1: Element, e2: Element): void {
    assert.notEqual(e1, e2, `trying to test if an element is equal to itself (tag <${e1.tagName}>)`)
    assert.isNotEmpty(e1.outerHTML, `the HTML of the created element is empty (tag <${e1.tagName}>)`)
    assert.strictEqual(e1.outerHTML, e2.outerHTML, `the HTML of the two elements created is different (tag <${e1.tagName}>)`)
    assert.isTrue(e1.isEqualNode(e2), `elements are not deeply equal (tag <${e1.tagName}>)`)
}