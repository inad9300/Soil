/**
 * Enhanced alias of `document.querySelectorAll()`, for the sake of conciseness.
 * In contrast with the native function, the return type is `Array` and not
 * `NodeListOf`, and an optional element can be provided to determine the
 * selection context.
 */
export function $$<K extends keyof HTMLElementTagNameMap>(selector: K, context?: ParentNode): HTMLElementTagNameMap[K][]
export function $$<K extends keyof SVGElementTagNameMap>(selector: K, context?: ParentNode): SVGElementTagNameMap[K][]
export function $$<E extends Element = Element>(selector: string, context?: ParentNode): E[]
export function $$(selector: string, context: ParentNode = document): Element[] {
    return Array.from(context.querySelectorAll(selector))
}
