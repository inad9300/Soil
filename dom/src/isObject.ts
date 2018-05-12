/**
 * Determines whether a given argument is a plain JavaScript object.
 */
export function isObject(o: any): boolean {
    return o instanceof Object && (o as Object).constructor === Object
}
