/**
 * When creating components asynchronously (e.g. if using RequireJS to load them), the `autofocus` property will not
 * work, as the browser will look for elements with this attribute on page load, and the page would have already loaded
 * by the time the component gets inserted into the DOM. If you still wish to use the `autofocus` property as opposed
 * to set the focus programmatically by yourself on the appropriate element, you can call this function after your
 * components have been mounted in the DOM.
 */
export function autofocus(): void {
    if (document.readyState === 'loading') {
        console.warn('autofocus() has been called while the DOM is still not accessible.'
            + ' Delaying the call is recommended.')
        return
    }

    if (document.activeElement === null || document.activeElement === document.body) {
        const focusableElems = Array
            .from(document.querySelectorAll('[autofocus=""],[autofocus="true"]'))
            .filter(el => window.getComputedStyle(el).display !== 'none')

        if (focusableElems.length > 0) {
            (focusableElems[0] as HTMLElement).focus()
        }
    }
}
