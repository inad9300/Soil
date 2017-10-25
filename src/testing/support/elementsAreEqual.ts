const {assert} = intern.getPlugin('chai')

/**
 * Check if two HTML or SVG elements are exactly equal.
 */
export function elementsAreEqual(actual: Element, expected: Element): void {
    assert.notEqual(actual, expected, `trying to test if an element is equal to itself (tag <${actual.tagName}>)`)
    assert.isNotEmpty(actual.outerHTML, `the HTML of the created element is empty (tag <${actual.tagName}>)`)
    assert.strictEqual(actual.outerHTML, expected.outerHTML, `the HTML of the two elements created is different (tag <${actual.tagName}>)`)
    assert.isTrue(actual.isEqualNode(expected), `elements are not deeply equal (tag <${actual.tagName}>)`)
}