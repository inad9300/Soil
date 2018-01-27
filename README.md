# Soil

A foundational set of ideas to help building enduring web applications.

[![Build Status](https://travis-ci.org/inad9300/Soil.svg?branch=master)](https://travis-ci.org/inad9300/Soil)
[![codecov](https://codecov.io/gh/inad9300/Soil/branch/master/graph/badge.svg)](https://codecov.io/gh/inad9300/Soil)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Finad9300%2FSoil.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Finad9300%2FSoil?ref=badge_shield)

## Motivation
The pace with which the web ecosystem evolves is unthinkably fast. Parallel to this, popular web frameworks tend to
create architectures with poor interoperability with tools built on top of standard technologies. Additionally, the
technical burden they introduce tends to be significant, and clearer than the benefits they bring. Projects based on
them are left with the choice of deprecation and long-term unmaintainability, or the expense of unreasonable amounts of
resources to try to keep the community's transformation rate.

Soil aims at putting together a minimal set of basic concepts that embrace today's web standards and thus last longer,
while being competitive with popular frameworks in areas such as reliability, testability, reusability, development
experience and performance.

## Basics
Soil encourages a structure around *components*, conceptually similar to the [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)'
proposal. They are pieces whose responsibility is to render UI elements and control the interaction with them, both from
the user and other components.

Technically, they are functions accepting an object to configure their initial state and subscriptions (via callbacks,
as a means to establish child-to-parent communications), and return another object with a set of available *messages*
(functions, getters or setters) that the component responds to (allowing for parent-to-child exchanges).

Components dynamically create and manipulate the HTML elements they manage, using globally-available functions with a
one-to-one correspondence with HTML elements. This provides a look-and-feel similar to regular HTML, but adds some type
safety on top.

Logic other than that to control the user interface should be pushed out of the components into *services*. Typically,
these are classes or functions that get injected into components and are concerned with topics such as server
communication, or communication between components that are not close to each other.

The different pieces can be glued together through [pure dependency injection](http://blog.ploeh.dk/2014/06/10/pure-di/)
at the application's [composition root](http://blog.ploeh.dk/2011/07/28/CompositionRoot/). In particular, components in
need of dependencies will have a *factory* associated with them, through which they will gain access to them. As an
alternative to the composition root, it is possible to use [default parameters for dependency injection](https://medium.freecodecamp.org/how-to-take-advantage-of-javascripts-default-parameters-for-dependency-injection-98fc423328e1).

```javascript
import {h, extend} from 'soil-web'

export const counter = (input: {value?: number} = {}) => {

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

To continue learning the principles of Soil, check out the [examples](examples/) on this repository, or dive into the
[source code](src/).


## Installation
The package is available [at npm](https://www.npmjs.com/package/soil-web), so it can be installed by running:
```bash
npm i -S soil-web # AKA npm install --save soil-web
```

## Compatibility
Browser support comes down to the individual functions used internally by Soil. The potentially problematic ones are
summarized below. Polyfills are offered by MDN for many of them.

| Function | Source files | Chrome | Edge | Firefox | IE  | Opera | Safari
| -------- | ------------ | ------ | ---- | ------- | --- | ----- | ------
| [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) | [`fix/autofocus.ts`](src/fix/autofocus.ts) | 45 | (Yes) | 32 | No | (Yes) | 9
| [`Object.setPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) | [`core/assert.ts`](src/core/assert.ts) | 34 | (Yes) | 31 | 11 | (Yes) | 9
| [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) | [`fix/autofocus.ts`](src/fix/autofocus.ts)| 1 | (Yes) | 3.5 | 9 | 10 | 3.2
| [`Object.defineProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) | [`core/extend.ts`](src/core/extend.ts) | 5 | (Yes) | 4 | 9 | 11.6 | 5.1
| [`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) | [`core/Channel.ts`](src/core/Channel.ts), [`dom/h.ts`](src/dom/h.ts), [`dom/s.ts`](src/dom/s.ts) | (Yes) | (Yes) | 1.5 | 9 | (Yes) | (Yes)
| [`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) | [`core/Channel.ts`](src/core/Channel.ts), [`fix/autofocus.ts`](src/fix/autofocus.ts) | (Yes) | (Yes) | 1.5 | 9 | (Yes) | (Yes)
| [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) | [`fix/autofocus.ts`](src/fix/autofocus.ts) | (Yes) | (Yes) | (Yes) | 9 | (Yes) | (Yes)

## Contributions
Please, feel free and encouraged to [open new discussions](../../issues) on any non-technical topic that may help
maturing Soil. For technical contributions, pull requests are also welcomed.

## License
The Soil project is licensed under the [GNU Affero General Public License](LICENSE).
