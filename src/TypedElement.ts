export type TypedElement<T extends string, E extends Element, C extends void | (string | Element)> = E & {
    readonly tagName: T
    append(...nodes: C[]): void // FIXME void[]
    prepend(...nodes: C[]): void
    appendChild(newChild: C): C
    insertBefore(newChild: C, refChild: C | null): C
    removeChild(oldChild: C): C
    replaceChild(newChild: C, oldChild: C): C
}
