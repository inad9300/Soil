import {chan} from './src/chan'
import {h} from '../dom/src'

// function ref<E extends Element, F extends () => E>(elemFn: F): F & {ref?: E} {
//     const wrapFn: F & {ref?: E} = ((...args: any[]) => {
//         const elem = elemFn.apply(null, args as any)
//         wrapFn.ref = elem
//         return elem
//     }) as any
//     return wrapFn
// }
//
// const count = ref(h.span)
//
// h.div({}, [
//     h.button({onclick: () => null}, ['-']),
//     count({}, ['0']),
//     h.button({onclick: () => null}, ['+'])
// ])
//
// count.ref

const toInt = (s?: string | null) => parseInt(s!, 10)

const counter = (opts: {count: number}) => {
    const count = h.span({}, ['' + (opts.count || 0)])

    const tmpl = h.div({}, [
        h.button({}, ['-']),
        count,
        h.button({}, ['+']),
    ])

    const ctrl = {
        inc: () => count.textContent = '' + (toInt(count.textContent) + 1),
        dec: () => count.textContent = '' + (toInt(count.textContent) - 1),
    }

    return Object.assign(tmpl, ctrl)
}

const HH = chan<{
    msg: 'userDeleted' | 'usersFetched',
    id?: number
}>()

HH.pub({msg: 'userDeleted', id: 9})

const Radio = {
    userDeleted: chan<number>()
}

class Store<D extends Record<string, any>, K extends keyof D> {
    private data: D

    set(k: K, v: D[K]) {
        this.data[k] = v
    }

    get(k: K) {
        return this.data[k]
    }
}

const UserStore = () => {
    let users: number[] = []
    const usersChan = chan<number[]>()

    return {
        onUsersChange: usersChan.sub,
        fetchUsers() {
            fetch('...')
                .then(res => res.json())
                .then(data => {
                    users = data
                    usersChan.pub(users)
                })
        },
        deleteUser(id: number) {
            fetch('...', {body: JSON.stringify({id})})
                .then(() => {
                    // remove from array...
                    Radio.userDeleted.pub(id)
                })
        }
    }
}

function prop<V>(initial?: V) {
    let value: V | undefined = initial
    type Listener = (prior: V | undefined, next: V) => void
    const listeners: Listener[] = []
    return {
        get() {
            return value
        },
        set(next: V) {
            let prior = value
            value = next
            listeners.forEach(l => l(prior, next))
        },
        onChange(l: Listener) {
            listeners.push(l)
        }
    }
}

let n = 0

function chann<Msg>(elem: HTMLElement) {
    const name = 'custom-event-' + (++n)
    return {
        pub: (detail: Msg, eventInit: EventInit = {}) => {
            const customEvent = new CustomEvent<Msg>(name, {detail, ...eventInit})
            elem.dispatchEvent(customEvent)
        },
        sub: (listener: (customEvent: CustomEvent<Msg>) => void) => {
            elem.addEventListener(name, listener)
            return () => elem.removeEventListener(name, listener)
        }
    }
}

const div = document.createElement('div')
const randomChan = chann<number>(div)

const unsub = randomChan.sub(evt => {
    console.log('event received!', evt)
})

randomChan.pub(Math.random())
randomChan.pub(Math.random())
