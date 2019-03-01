import {chan} from './src/chan'

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
