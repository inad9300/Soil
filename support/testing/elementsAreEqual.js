var assert = intern.getPlugin('chai').assert;
/**
 * Check if two HTML or SVG elements are exactly equal.
 */
function elementsAreEqual(actual, expected, skipDeepEquality) {
    if (skipDeepEquality === void 0) { skipDeepEquality = false; }
    assert.notEqual(actual, expected, "trying to test if an element is equal to itself (tag <" + actual.tagName + ">)");
    assert.isNotEmpty(actual.outerHTML, "the HTML of the created element is empty (tag <" + actual.tagName + ">)");
    assert.strictEqual(actual.outerHTML, expected.outerHTML, "the HTML of the two elements created is different (tag <" + actual.tagName + ">)");
    if (!skipDeepEquality) {
        assert.isTrue(actual.isEqualNode(expected), "elements are not deeply equal (tag <" + actual.tagName + ">)");
    }
}
exports.elementsAreEqual = elementsAreEqual;
