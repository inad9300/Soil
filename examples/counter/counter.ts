import {h} from 'soil-web'

type CounterI = {
    initialValue?: number
}

type CounterO = {
    readonly $el: h.Div
    decrement: () => void
    increment: () => void
}

export const counter = (args: CounterI = {}): CounterO => {
    let count = args.initialValue || 0

    const $count = h.span({}, `${count}`)

    const $el = h.div({}, [
        h.button({onclick: decrement}, '-'),
        $count,
        h.button({onclick: increment}, '+')
    ])

    function decrement() {
        count--
        $count.textContent = `${count}`
    }

    function increment() {
        count++
        $count.textContent = `${count}`
    }

    return {$el, decrement, increment}
}