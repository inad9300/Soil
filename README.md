# Soil

A foundational library to help building long-lasting web applications.

[![Build Status](https://travis-ci.org/inad9300/Soil.svg?branch=master)](https://travis-ci.org/inad9300/Soil)
[![codecov](https://codecov.io/gh/inad9300/Soil/branch/master/graph/badge.svg)](https://codecov.io/gh/inad9300/Soil)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Finad9300%2FSoil.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Finad9300%2FSoil?ref=badge_shield)

**Important** This library is a work in progress. For its ideas to perform at
their best, new TypeScript features need to be released and/or developed.
Therefore, it should be considered experimental.


## Motivation

The pace with which the web ecosystem evolves is unthinkably fast. At the same
time, trendy web frameworks often offer poor interoperability with standard
technologies, and the technical burden they introduce tends to be significant
and clearer than the benefits. Projects based on them are left with the choice
of deprecation and long-term unmaintainability, or the expense of unreasonable
amounts of resources to match the community's speed.

Soil aims at putting together a minimal set of basic elements that embrace
today's web standards and help you in developing high-quality, enduring
applications, while being competitive with popular frameworks in areas such as
reliability, testability, reusability, development experience and performance.


## Basics

Soil encourages an architecture around *components*, conceptually similar to
the [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)'
proposal. Components are responsible for rendering parts of UI and controlling
the user interaction with them, and are framework-agnostic.

They create and manipulate HTML elements dynamically, with the help of
type-safe functions with a one-to-one correspondence with standard HTML
elements, which provides a look-and-feel similar to regular HTML.

```ts
import {h} from '@soil/dom'
import {extend} from '@soil/arch'

export const counter = (props: {value: number}) => {
    let value = props.value

    const $count = h.span()

    const $self = h.div({}, [
        h.button({onclick: () => api.value--}, ['-']),
        $count,
        h.button({onclick: () => api.value++}, ['+'])
    ])

    const api = {
        get value() {
            return value
        },
        set value(v: number) {
            value = v
            $count.textContent = '' + v
        }
    }

    api.value = value

    return extend($self, api)
}
```

Custom components can then be used in a way similar to native ones.

```ts
import {counter} from './counter'

const $counter = counter({value: 0})

$counter.value++

document.body.appendChild($counter)
```

While purely [presentational components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
have no dependencies, container components may have them, including other
components. For this, [pure dependency injection](http://blog.ploeh.dk/2014/06/10/pure-di/)
is recommended, which could be achieved [through default parameters](https://medium.freecodecamp.org/how-to-take-advantage-of-javascripts-default-parameters-for-dependency-injection-98fc423328e1), or through explicit factory functions, as illustrated bellow.

```ts
import {counterService, CounterService} from './counterService'

export const counterFactory = (counterService: CounterService) => (props: {}) => {
    // ...
}

export const counter = counterFactory(counterService)

export type Counter = typeof counter
```

Communicating adjacent components is usually easy. What about distant
components? There are [plenty of alternatives](https://www.javascriptstuff.com/component-communication/)
out there. One possibility is to use the native [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent),
which integrates nicely with web components based on native DOM elements.

To get a bit more familiar with the ideas presented above, you may head to the
individual sub-projects to read their documentation, check out the [examples](examples/),
or dive directly into the source code!


## Installation

Soil is divided into packages that work well together but that can be used
independently, namely:
- [@soil/dom](https://github.com/inad9300/Soil/tree/master/dom)
- [@soil/arch](https://github.com/inad9300/Soil/tree/master/arch)

They are all available at npm's registry, so they can be installed via npm or
Yarn:

```bash
npm i -S @soil/dom @soil/arch
# AKA npm install --save @soil/dom @soil/arch
```

```bash
yarn add @soil/dom @soil/arch
```


## Contributions

Feel free and encouraged to [open new discussions](../../issues) on any
non-technical topic that may help maturing Soil. For technical contributions,
pull requests are also welcomed.


## License

The Soil project is licensed under the [GNU Affero General Public License](LICENSE).
