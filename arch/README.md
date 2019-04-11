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
component. In turn, that function is responsible for returning a two-size tuple
containing the internal DOM structure of the element (its "template") and a
number of functions which will determine the ways one is allowed to interact
with it (its "controller"), and optionally accepts a series of children.

```ts
import {element} from '@soil/arch'
import {h} from '@soil/dom'

const fancyLink = element(() => {
    const tmpl = h.a({href: 'https://example.org/'}, ['Fancy Link'])

    const ctrl = {
        set secret(s: number) {
            tmpl.dataset.secret = '' + s
        },
        fly: () => console.log('Taking off...')
    }

    return [tmpl, ctrl]
})

const aFancyLink = fancyLink({secret: 1, className: 'a-fancy-link'})
aFancyLink.secret = 2
aFancyLink.fly()
```

Note how the controller implement the interface of the properties supported by
the component. Following from this, there is no need to perform an initial
assignment of the properties to the internal DOM elements: this will happen
automatically, enforcing consistent behaviour between initialization and later
usage, as we are accustomed to with native interfaces.

#### Dependencies

When components need dependencies, they can be defined as a high-order function.
To facilitate both regular development and testing, both the factory function
and the default instance can be exported.

```ts
import {element} from '@soil/arch'
import {h} from '@soil/dom'
import {serviceX, ServiceX} from './ServiceX'

export const elemXFactory = (serviceX: ServiceX) => element(() => {
   // ...
})

export const elemX = elemXFactory(serviceX)
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
