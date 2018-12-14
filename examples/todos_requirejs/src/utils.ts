export function noop() {}

export function hide(el: Element) {
    el.classList.add('hidden')
}

export function show(el: Element) {
    el.classList.remove('hidden')
}
