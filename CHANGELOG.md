# Changelog

## NEXT
First stable release of Soil! It includes:
- `Component` and `ComponentFactory` interfaces to support the core idea of isolated, well-defined components.
- `h()` and `s()` helper functions to ease the creation of HTML and SVG elements.
- `extend()` helper function to facilitate the extension of native HTML elements.
- `assert()` helper function as a means to support contract programming.
- `Channel` class, allowing for communications between components far away from each other.
- `autofocus()` function as a replacement for the native `autofocus` HTML attribute, which doesn't work if the element
is introduced after the page loads.
- Support elements for the aforementioned ones, i.e. the `DeepPartial` generic type, the `assignProperties()` utility
function, unit test for all the functionality, and the `createElement()` and `elementsAreEqual()` test helper functions.
