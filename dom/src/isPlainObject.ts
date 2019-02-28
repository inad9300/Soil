export type PlainObject = {
    [key: string]: any
}

export function isPlainObject(o: any): o is PlainObject {
    return o instanceof Object && (o as Object).constructor === Object
}
