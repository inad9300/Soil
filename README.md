# Soil

A foundational library to help building long-lasting web applications. Soil
allows you to declaratively create type-safe HTML and SVG elements. One way to
think of it might be as "HTML-in-JS".

[![Build Status](https://travis-ci.org/inad9300/Soil.svg?branch=master)](https://travis-ci.org/inad9300/Soil)
[![codecov](https://codecov.io/gh/inad9300/Soil/branch/master/graph/badge.svg)](https://codecov.io/gh/inad9300/Soil)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Finad9300%2FSoil.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Finad9300%2FSoil?ref=badge_shield)


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
import {h, element} from '@soil/lib'

export const counter = element(() => {
    const count = h('span')

    const tmpl = h('div', {}, [
        h('button', {onclick: () => ctrl.value--}, ['-']),
        count,
        h('button', {onclick: () => ctrl.value++}, ['+'])
    ])

    const ctrl = {
        get value() {
            return parseInt(count.textContent!, 10)
        },
        set value(v: number) {
            count.textContent = '' + v
        }
    }

    return [tmpl, ctrl]
})
```

Custom components can then be used in a way similar to native ones.

```ts
import {counter} from './counter'

const c = counter({value: 1})

document.body.appendChild(c)

c.value++
```

While purely [presentational components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
have no dependencies, container components may have them, including other
components. For this, [pure dependency injection](http://blog.ploeh.dk/2014/06/10/pure-di/)
is recommended, which could be achieved [through default parameters](https://medium.freecodecamp.org/how-to-take-advantage-of-javascripts-default-parameters-for-dependency-injection-98fc423328e1),
or through explicit factory functions, as illustrated bellow.

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

The package is available at npm's registry, so it can be installed via npm or
Yarn:

```bash
npm i -S @soil/lib
# AKA npm install --save @soil/lib
```

```bash
yarn add @soil/lib
```


## Documentation

### `h` (function and namespace)

Creating HTML using strings is not type-safe. Creating them from code is too
verbose. The `h` function serves as a shortcut function to create any HTML
element. As a namespace, it contains type aliases to refer the types returned
by this function.

```ts
import {h} from '@soil/lib'

const button: h.Button = h('button', {onclick: () => alert('Clicked')}, ['Click me'])

const paragraph: h.P = h('p', {}, [
    'Text with ',
    h('a', {href: '...'}, ['link'])
])

const input: h.Input = h('input', {placeholder: 'Input...'})
```

They are provided under a namespace to avoid polluting the scope with plenty of
functions and types (`a`, `A`, `b`, `B`, ...); to prevent problems with reserved
words such as `var` and `switch`, which would be required for elements such as
[`<var>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var) and
[`<switch>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/switch);
and to avoid long import statements. As a nice side effect the auto-completion
experience is better too.

### `s` (function and namespace)

Analogous to `h` for SVG elements.

```ts
import {s} from '@soil/lib'

s('svg', {width: {baseVal: {value: 100}}, height: {baseVal: {value: 100}}}, [
    s('circle', {
        cx: {baseVal: {value: 50}},
        cy: {baseVal: {value: 50}},
        r: {baseVal: {value: 40}},
        style: {
            stroke: 'green',
            strokeWidth: '4',
            fill: 'yellow'
        }
    })
])
```

Unfortunately, creating type-safe SVG programmatically results in verbose code,
and the difference between attributes and properties is bigger than in the HTML
case. The code above produces the same circle than the following HTML:

```html
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

On the other hand, we have access to the whole SVG API, richer than its
attribute-based counterpart, and there will be no differences between creating
elements and modifying them, e.g. you would otherwise need `<circle stroke="green" />`
for creation but `circle.style.stroke = 'red'` for modification.

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
import {h, element} from '@soil/lib'

const fancyLink = element(() => {
    const tmpl = h('a', {href: 'https://example.org/'}, ['Fancy Link'])

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
import {element} from '@soil/lib'
import {serviceX, ServiceX} from './ServiceX'

export const elemXFactory = (serviceX: ServiceX) => element(() => {
   // ...
})

export const elemX = elemXFactory(serviceX)
```


## Contributions

Feel free and encouraged to [open new discussions](../../issues) on any
non-technical topic that may help maturing Soil. For technical contributions,
pull requests are also welcomed.


## License

The Soil project is licensed under the [GNU Affero General Public License](LICENSE).
