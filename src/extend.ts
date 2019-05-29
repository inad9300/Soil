/**
 * Extend `target` with the enumerable own properties in `source`. Similar to
 * `Object.assign()`, but including getters and setters.
 */
export function extend<T extends object, U extends object>(target: T, source: U): T & U {
    for (const prop in source) {
        if (source.hasOwnProperty(prop)) {
            Object.defineProperty(
                target,
                prop,
                Object.getOwnPropertyDescriptor(source, prop)!
            )
        }
    }
    return target as T & U
}
