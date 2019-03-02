# [@soil/arch](https://www.npmjs.com/package/@soil/arch)

Architectural constructs for web applications.


## Documentation

### `element()` (function)

Components are the main building block of modern web applications. They are
functions responsible for creating instances of custom elements, which typically
are regular HTML or SVG elements extended with custom functions, getters and
setters. The `element()` function facilitates and streamlines the creation of
such components, in a way that makes them resemble native elements.

`element()` accepts a function which serves as the definition of the custom
component. In turn, that function accepts a list of properties the element knows
about, and returns a two-size tuple containing the internal DOM structure of the
element (its "template") and a number of functions which will determine the ways
one is allowed to interact with it (its "controller").

Note how the controller needs to implement the interface of the properties
supported by the component. Following from this, there is no need to perform an
initial assignment of the properties to the internal DOM elements: this will
happen automatically, enforcing consistent behaviour between initialization and
later usage.

```ts
import {element} from '@soil/arch'
import {h} from '@soil/dom'

const fancyLink = element((props: {x: number}) => {
    const tmpl = h.a({/* ... */})

    const ctrl = {
        f: () => console.log('A custom function.')
    }

    return [tmpl, ctrl]
})

const myFancyLink = fancyLink({x: 1})
myFancyLink.x = 2
myFancyLink.f()
```

#### Dependencies

When components need dependencies, they can be defined as a high-order function
to separate them from normal input.

```ts
import {element} from '@soil/arch'
import {h} from '@soil/dom'

const customElemFactory = (/* Dependencies */) => element((/* Input */) => {
   // ...
})
```

### `chan()` (function)

Components may easily communicate with their parents, children and siblings.
However when two components are further away from each other, the communication
is more complicated. For this cases, a publish-subscribe pattern can be used,
through so-called "channels".

```ts
import {chan} from '@soil/arch'

export const randomNumbersChan = chan<number>()

// ...

randomNumbersChan.sub(n => console.log('New random number received:', n))

// ...

randomNumbersChan.pub(Math.random())
```

### `assert()` (function)

This function provides the basic means to achieve programming by contract.

```ts
import {assert, Component} from '@soil/arch'

const counter: Component = (input: {value?: number} = {}) => {
    assert(value > -1, 'Negative values are not allowed.')
    // ...
}
```

When providing a function as the first argument, its source will be added to the
error message to provide the programmer with more context for debugging.

```ts
assert(() => 1 > 2) // Error: Assertion was: function () { return 1 > 2; }
```

### `extend()` (function)

Custom components are typically created by extending existing HTML elements.
Functions like the native `Object.assign()` are a valid approach for most cases.
However, they usually ignore getters and setters.

```ts
import {extend} from '@soil/arch'
import {h} from '@soil/dom'

const api = {
    C: 'A constant',
    someMethod() { /* ... */ },
    get value() { /* ... */ },
    set value(n: number) { /* ... */ }
}

const elem = h.div()
extend(elem, api)

elem.value = 8
```

This function modifies its first argument, and returns it too.


## Installation

The package is available at npm's registry, so it can be installed via npm or
Yarn:

```bash
npm i -S @soil/arch
# AKA npm install --save @soil/arch
```

```bash
yarn add @soil/arch
```


## License

This project is licensed under the [GNU Affero General Public License](LICENSE).
