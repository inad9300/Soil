/**
 * Helper for the declaration of distinctive, safer versions of the types given
 * by TypeScript to the different `Element`s (HTML and SVG).
 *
 * @param T Value of the JavaScript field `tagName`, e.g. 'TABLE'. It provides
 * enhanced type safety, and makes the resulting types branded.
 * @param E Base interface which will be specialized.
 * @param C Defines the types allowed for the children of `E`.
 */
export type TypedElement<T extends string, E extends Element, C extends void | (string | Element)> = Omit<E, 'tagName' | 'appendChild' | 'insertBefore' | 'removeChild' | 'replaceChild' | 'append' | 'prepend'> & {
    readonly tagName: T
    appendChild(newChild: C): C
    insertBefore(newChild: C, refChild: C | null): C
    removeChild(oldChild: C): C
    replaceChild(newChild: C, oldChild: C): C
    // children: HTMLCollection & {[index: number]: C}
} & (void extends C ? {
    append(): void
    prepend(): void
} : {
    append(...nodes: C[]): void
    prepend(...nodes: C[]): void
})
