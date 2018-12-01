import {assert, chan, extend} from './index'

declare global {
    interface Window {
        soil?: any
    }
}

window.soil = window.soil || {}
window.soil.assert = assert
window.soil.chan = chan
window.soil.extend = extend
