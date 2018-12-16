/**
 * Enhanced alias of `document.querySelectorAll()`, for the sake of conciseness.
 * In contrast with the native function, the return type is `Array` and not
 * `NodeListOf`.
 *
 * The function signatures are derived from the native interface `NodeSelector`.
 */
export function $$<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K][]
export function $$<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K][]
export function $$<E extends Element = Element>(selectors: string): E[]
export function $$(selectors: string) {
    return Array.from(document.querySelectorAll(selectors))
}
