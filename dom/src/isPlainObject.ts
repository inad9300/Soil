export function isPlainObject(o: any): o is Record<any, any> {
    return o instanceof Object && (o as Object).constructor === Object
}
