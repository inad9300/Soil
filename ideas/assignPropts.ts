function isPlainObject(o: any): o is Record<any, any> {
    return o instanceof Object && (o as Object).constructor === Object
}

function assignProps(elem: any, props: any) {
    for (const p of Object.keys(props)) {
        if (isPlainObject(props[p])) {
            assignProps(elem[p], props[p])
        } else {
            elem[p] = props[p]
        }
    }
}
