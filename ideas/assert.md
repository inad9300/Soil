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
