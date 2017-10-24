# Soil

A foundational set of ideas to help building enduring web applications.

## Motivation
The pace with which the web ecosystem evolves is unthinkably fast. Parallel to this, popular web frameworks tend to
create architectures with poor interoperability with tools built on top of standard technologies. Additionaly, the
technical burden they introduce tends to be significant, and clearer than the benefits they bring. Projects based on
them are left with the choice of deprecation and long-term unmaintenability, or the expense of unreasonable amounts of
resources to try to keep the community's transformation rate.

Soil aims at defining a basic set of concepts that embrace today's web standards and thus last longer, while being
competitive with commonly-used frameworks in areas such as reliability, testability, reusability, development experience
and performance.

## Basics
Soil encourages a structure around *components*, conceptually similar to the [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)'
proposal. They are pieces whose responsability is to render UI elements and control the interaction with them, both from
the user and other components.

Technically, they are functions which accept an object to configure their initial state and to handle subscriptions (as
a means to establish child-to-parent communications), and return another object with a set of *messages* (functions)
that the component would respond to (allowing for parent-to-child exchanges).

Components dynamically create and manipulate the HTML elements they manage, using globally-available functions with a
one-to-one correspondence with HTML elements. This provides a look-and-feel similar to regular HTML, but adds some type
safety on top.

> Be aware of the difference between [HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) and
> [properties of `Element` objects](https://developer.mozilla.org/en-US/docs/Web/API/Element) and its children (e.g.
> [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)). While for most of them there is a
> one-to-one correspondence, this is not always the case.
>
> For instance the [`value` attribute of the `<input>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-value)
> is a way to provide an initial value to the element, and changing it will have no effect on the screen. On the other
> hand, the [`value` property of the `HTMLInputElement` interface](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#Properties)
> is synchronized with the visible value of the element, meaning updating the property will change the value the user
> sees, and any value entered by the user will be reflected on the property.

Logic other than that to control the user interface should be pushed out of the components into *services*: classes,
functions, etc. that get injected into components and are concerned with server communication, where (most of) the
business logic should be placed. Services may also serve as a way to communicate components that are not close in the
shared component hierarchy.

The different pieces are glued together through [pure dependency injection](http://blog.ploeh.dk/2014/06/10/pure-di/) at
the application's [composition root](http://blog.ploeh.dk/2011/07/28/CompositionRoot/). In particular, every component
has a *factory* associated with it, through which it will get its dependencies. Dependency injection improves
testability and often leads to better designs.

```typescript
const counter = (/* Dependencies. */) => (args: {initalValue: number}) {

    const count = args.initialValue || 0

    // For conciseness, variables holding references to HTML elements are prefixed with "$" by convention.
    const $count = span({}, count)

    const $el = div({}, [
        button({onclick: decrement}, '-'),
        $count,
        button({onclick: increment}, '+')
    ])

    function decrement() {
        count--
        $count.textContent = count
    }

    function increment() {
        count++
        $count.textContent = count
    }

    // In order for other components to incorporate this one, a read-only reference to the local HTML root is returned
    // as part of the public interface.
    return {$el, decrement, increment}
}
```

As you may have noticed, Soil leverages type safety through [TypeScript](https://www.typescriptlang.org/).

The best path forward to continue learning the principles of Soil is to check out the [examples](https://github.com/inad9300/Soil/tree/master/examples/)
available on this repository, and eventually dive into the [source code](https://github.com/inad9300/Soil/tree/master/src).

## Installation
*An npm package is on the making.*

## Contributions
Please, feel free and encouraged to [open new discussions](https://github.com/inad9300/Soil/issues) on any non-technical
topic that may help maturing Soil. For technical contributions, pull requests are also welcomed.

## License
The Soil project is licensed under the [GNU Affero General Public License](https://github.com/inad9300/Soil/blob/master/LICENSE).