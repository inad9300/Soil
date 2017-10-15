/**
 * Function similar to `Object.assign` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign),
 * the major differences being:
 * - It recursively assigns properties on nested objects.
 * - It accepts only one source object.
 */
export function deepAssign<T extends Object, S extends Object>(target: T, source: S): T & S {
    for (const prop in source) {
        if (source.hasOwnProperty(prop)) {
            if ((source as any)[prop] instanceof Object &&
                (target as any)[prop] instanceof Object) {
                deepAssign((target as any)[prop], source[prop])
            } else {
                (target as any)[prop] = source[prop]
            }
        }
    }
    return target as T & S
}