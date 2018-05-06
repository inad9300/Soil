// TODO Consider moving to separate project, e.g. @soil/dom, @soil/core|arch|components|...
export {Component} from './core/Component'
export {ComponentFactory} from './core/ComponentFactory'
export {Channel} from './core/Channel'
export {assert} from './core/assert'
export {extend} from './core/extend'

import {h as _h} from './dom/html/h'
import * as _s from './dom/svg/s' // FIXME.

// A few HTML or SVG element names conflict with JavaScript keywords (e.g. `<var>`). For this reason, they are suffixed
// with an underscore (e.g. `var_`). When we import all the contents of the respective files with an alias, they are
// essentially namespaced, so we can add the original name to that "namespace" as well. The old ones are kept to allow
// for object destructuring (e.g. `let {var_} = h`).
const h: typeof _h & {var: typeof _h.var_} = _h as any
h.var = _h.var_
const s: typeof _s & {switch: typeof _s.switch_} = _s as any
s.switch = _s.switch_

export {h, s}

// TODO Consider removing.
export {DeepPartial} from './extra/DeepPartial'

// TODO Remove.
export {autofocus} from './fix/autofocus'
