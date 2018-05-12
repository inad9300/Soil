# Soil

A foundational library to help building long-lasting web applications.

[![Build Status](https://travis-ci.org/inad9300/Soil.svg?branch=master)](https://travis-ci.org/inad9300/Soil)
[![codecov](https://codecov.io/gh/inad9300/Soil/branch/master/graph/badge.svg)](https://codecov.io/gh/inad9300/Soil)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Finad9300%2FSoil.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Finad9300%2FSoil?ref=badge_shield)


## Motivation
The pace with which the web ecosystem evolves is unthinkably fast. At the same time, trendy web frameworks often offer
poor interoperability with standard technologies, and the technical burden they introduce tends to be significant and
clearer than the benefits. Projects based on them are left with the choice of deprecation and long-term
unmaintainability, or the expense of unreasonable amounts of resources to match the community's speed.

Soil aims at putting together a minimal set of basic elements that embrace today's web standards and help you in
developing high-quality, enduring applications, while being competitive with popular frameworks in areas such as
reliability, testability, reusability, development experience and performance.


## Basics
Soil encourages an architecture around *components*, conceptually similar to the [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)'
proposal. Components are responsible for rendering parts of UI and controlling the user interaction with them.

They create and manipulate HTML elements dynamically, with the help of type-safe functions with a one-to-one
correspondence with standard HTML elements, which provides a look-and-feel similar to regular HTML.

```js
import {h} from '@soil/dom'
import {extend} from '@soil/arch'

const counter = (input: {value?: number} = {}) => {

    const $count = h.span({})

    const $counter = h.div({}, [
        h.button({onclick: () => api.value = api.value - 1}, '-'),
        $count,
        h.button({onclick: () => api.value = api.value + 1}, '+')
    ])

    const state = {
        value: input.value || 0
    }

    const api = {
        get value() {
            return state.value
        },
        set value(v: number) {
            state.value = v
            $count.textContent = '' + v
        }
    }

    api.value = api.value

    return extend($counter, api)
}
```

Custom components can be used in a way similar to native ones.

```js
import {counter} from './counter'

const $counter = counter({value: 0})
$counter.value++

document.body.appendChild($counter)
```

Purely [presentational components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) have no
dependencies, but container components may have them, including other components. For this, [pure dependency injection](http://blog.ploeh.dk/2014/06/10/pure-di/)
is recommended, which can be achieved [through default parameters](https://medium.freecodecamp.org/how-to-take-advantage-of-javascripts-default-parameters-for-dependency-injection-98fc423328e1).

```js
const counterContainer = (counterService = new CounterService) => (input = {}) => {
    // ...
}
```

To get more familiar with the ideas presented above, head to the [documentation](https://github.com/inad9300/Soil/wiki/Documentation),
check out the [examples](examples/), or dive directly into the [source code](src/).


## Installation
The package is available at npm, so it can be installed by running:

```bash
npm i -S @soil/dom @soil/arch # AKA npm install --save @soil/dom @soil/arch
```

## Compatibility
Browser support comes down to the individual functions used internally by Soil. The potentially problematic ones are
summarized below. Polyfills are offered by MDN for most of them.

| Function | Source files | Chrome | Edge | Firefox | IE  | Opera | Safari
| -------- | ------------ | ------ | ---- | ------- | --- | ----- | ------
| [`Object.setPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) | [`core/assert.ts`](src/core/assert.ts) | 34 | (Yes) | 31 | 11 | (Yes) | 9
| [`Object.defineProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) | [`core/extend.ts`](src/core/extend.ts) | 5 | (Yes) | 4 | 9 | 11.6 | 5.1
| [`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) | [`core/Channel.ts`](src/core/Channel.ts), [`dom/h.ts`](src/dom/h.ts), [`dom/s.ts`](src/dom/s.ts) | (Yes) | (Yes) | 1.5 | 9 | (Yes) | (Yes)
| [`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) | [`core/Channel.ts`](src/core/Channel.ts), [`fix/autofocus.ts`](src/fix/autofocus.ts) | (Yes) | (Yes) | 1.5 | 9 | (Yes) | (Yes)


## Contributions
Feel free and encouraged to [open new discussions](../../issues) on any non-technical topic that may help maturing Soil.
For technical contributions, pull requests are also welcomed.


## License
The Soil project is licensed under the [GNU Affero General Public License](LICENSE).
