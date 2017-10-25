/**
 * Interface of the function defined below. Inspired in the native interface `NodeSelector`.
 */
interface ElementsSelector {
    <K extends keyof ElementTagNameMap>(selectors: K): ElementTagNameMap[K][]
    (selectors: string): Element[]
}

/**
 * Enhanced alias of `document.querySelectorAll()`, for conciseness. The only difference with the native function is
 * that it returns an array instead of a `NodeListOf<Node>`.
 */
export const $$: ElementsSelector = (selectors: string) => {
    return Array.from(document.querySelectorAll(selectors))
}