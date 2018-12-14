# [@soil/arch](https://www.npmjs.com/package/@soil/arch)

Architectural constructs for web applications.


## Documentation

### `Component` (type)

Components are the main building block of your web applications. They are
functions responsible for creating instances of custom HTML elements, which
typically are regular HTML elements extended with custom functions, getters and
setters.

```ts
import {Component} from '@soil/arch'
import {h} from '@soil/dom'

type Input = {
    x?: number
}

type Output = h.Div & {x?: number}

const component: Component<Input, Output> = (/* Input */) = {
    // ...
}
```

In most cases, it is better to let TypeScript figure out the type of your
component based on the input it takes and its return value; it will lead to less
verbose code, and it will still be type safe. Therefore, this type exists mostly
for documentation purposes.

### `ComponentFactory` (type)

When components need dependencies, they can be defined as a high-order function
to separate them from normal input.

```ts
import {ComponentFactory} from '@soil/arch'
import {h} from '@soil/dom'

type Input = {
    x?: number
}

type Output = h.Div & {x?: number}

const f: ComponentFactory<Input, Output> = (/* Dependencies */) => (/* Input */) => {
   // ...
}
```

As with `Component`, in most cases TypeScript will be able to infer the type for
you based on the actual input and output. This will lead to less verbose code,
and it will still be type safe. Therefore, this type exists mostly for
documentation purposes.

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
