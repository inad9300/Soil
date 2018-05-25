# [@soil/dom](https://www.npmjs.com/package/@soil/dom)

Declaratively create type-safe HTML and SVG elements.


## Documentation

### `h` (namespace)

Creating HTML using strings is not type-safe. Creating them from code is too verbose. The `h` namespace gives access to shortcut functions to create any HTML element, as well as to type aliases to refer the types returned by those functions.

```js
import {h} from '@soil/web'

const button: h.Button = h.button({onclick: () => alert('Clicked')}, ['Click me'])

const paragraph: h.P = h.p({}, [
    'Text with ',
    h.a({href: '...'}, ['link'])
])

const input: h.Input = h.input({placeholder: 'Input 1'})

const customElement: HTMLElement = h.x('custom-element')
```

They are provided under a namespace to avoid long import statements and to avoid polluting the scope with plenty of functions and types (`a`, `A`, `b`, `B`, ...). As a nice side effect the auto-completion experience is better too.

### `s` (namespace)

Analogous to `h` for SVG elements.

```js
import {s} from '@soil/web'

s.svg({width: {baseVal: {value: 100}}, height: {baseVal: {value: 100}}}, [
    s.circle({
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

Unfortunately, creating type-safe SVG programmatically results in verbose code, and the difference between attributes and properties is bigger than in the HTML case. The code above produces the same circle than the following HTML:

```html
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

On the other hand, we have access to the whole SVG API, richer than its attribute-based counterpart, and there will be no differences between creating elements and modifying them, e.g. you would otherwise need `<circle stroke="green" />` for creation but `circle.style.stroke = 'red'` for modification.


## Installation

The package is available at npm's registry, so it can be installed via npm or
Yarn:

```bash
npm i -S @soil/dom
# AKA npm install --save @soil/dom
```

```bash
yarn add @soil/dom
```


## License

This project is licensed under the [GNU Affero General Public License](LICENSE).
