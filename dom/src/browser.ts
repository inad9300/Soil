import {h, s} from './index'

declare global {
    interface Window {
        soil?: any
    }
}

window.soil = window.soil || {}
window.soil.h = h
window.soil.s = s
