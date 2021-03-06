/**
 * Specialized type of error to easily identify exceptions originated in
 * `assert()` expressions.
 */
class AssertionError extends Error {}

/**
 * Ensure that a given condition is true, adding basic support for design-by-
 * contract programming.
 *
 * When providing a function as opposed to a boolean as the first argument, the
 * source code of the function will be included as part of the error message in
 * case of failure, providing immediate feedback to help determine the reason
 * why the assertion did not hold true.
 */
export function assert(
    assertion: boolean | (() => boolean),
    message: string = ''
): void {
    const assertionIsFunction = typeof assertion === 'function'

    const ok = assertionIsFunction
        ? (assertion as () => boolean)()
        : assertion

    if (!ok) {
        if (assertionIsFunction) {
            if (message) {
                message += ' // '
            }
            message += 'Assertion was: ' + assertion.toString()
        }
        throw new AssertionError(message)
    }
}
