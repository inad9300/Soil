# Changelog

## 1.0.0 - NEXT

### Added
- `Component` and `ComponentFactory` types, encoding the shape of custom components.
- `Channel` class, allowing for communications between distant components.
- `assert()` function, as a means towards contract programming.
- `extend()` function, to facilitate the extension of native HTML elements.
- `h()` and `s()` functions, to create HTML and SVG elements, as well as shortcut functions for each element.
- `DeepPartial` generic type, recursive version of TypeScript's `Partial`.
- `autofocus()` function, allowing to use `autofocus` on HTML elements created after page load.

#### Internal
- `assignProperties()` helper function for HTML and SVG elements.
- Unit tests for all the functionality.
- `createElement()` and `elementsAreEqual()` functions, to support testing.
