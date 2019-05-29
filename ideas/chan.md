### `chan()` (function)

Function helping with communications between distant components.

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
