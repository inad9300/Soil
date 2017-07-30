# Soil

## Foreword
Writing web applications with today's frameworks tends to be an unpleasant
experience when it comes to implementing new features and refactoring existing
code, as soon as the application starts to grow a little. The risk is high of
introducing bugs and degrading performance.

Soil's goal is to overcome these problems by making use of state-of-the-art
tools and ideas, while still being easy to use and reason about. More
extensively, we aim at making easier for web applications to have the following
properties:
- **Correctness** The most important feature of any program: it must behave as
the programmer intended to. The more guarantees we have about that, the better.
- **Testability** It must be possible to verify whether the program does what
it has to do.
- **Determinism** Under the same sequence of actions, it ought to behave
equally. The opposite makes very likely that there will be cases we have not
thought of.
- **Robustness** The program should know what to do on the advent of unexpected
circumstances, keeping itself alive.
- **Composability** More complex parts of the application should consist of
sets of simpler ones. This makes possible for humans to scale the application
without keeping too much of its state on their minds.
- **Reusability** The different pieces of the application should be general
enough to be used by multiple modules.
- **Debuggability** The program must be easy to manipulate and debug on-line,
and the feedback loop with respect to modifications should remain short.

In order to achieve this, we took inspiration from projects such as Elm, Flux,
Redux and some of its middleware, MobX, Cycle.js, React, and others. In a way,
Soil pretends to be a minimal but complete implementation which addresses the
problems we identify in these projects.

Here is what we believe will put us in track to achieve the properties listed
above:
- **Static type system** It allows you to express your intents more
explicitely, reducing the ambiguity and the amount of mistakes.
- **Pure functions** Side effects greatly expand the limits of a program in
unpredictable ways. Placing them smartly and keeping as much of our codebase as
possible pure allows to reason about parts of our program in isolation.
- **Immutable data** If a piece of data is immutable, you can forget about all
the potential parts of the code that might change it. It gives simplicity and
safety when it comes to concurrent operations.
- **Unidirectional and circular data flow** Allows for a simple mental model of
the application, which expresses reality very well: the user constantly
interacts with the application, and constantly receives stimulus from it as a
consequence of these interactions.
- **Fractal architecture** With it, the program is composed of a hierarchy of
ever-smaller parts, and the way of thinking of top-level layers is the same as
that of deeper ones.

Despite this being our current depiction of the present and future of web
applications, our desire is to keep evaluating new options and ideas as they
show up, as well as trying to come up with our own. Therefore, input from the
community will always be much appreciated, and contributions very welcomed.
