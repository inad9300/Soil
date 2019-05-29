/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@soil/dom/build/es6/addChildren.js":
/*!*********************************************************!*\
  !*** ./node_modules/@soil/dom/build/es6/addChildren.js ***!
  \*********************************************************/
/*! exports provided: addChildren */
/*! exports used: addChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return addChildren; });\n/**\n * Add children to the given element.\n */\nfunction addChildren(elem, children) {\n    for (var i = 0; i < children.length; ++i) {\n        var child = children[i];\n        elem.appendChild(typeof child === 'string'\n            ? document.createTextNode(child)\n            : child);\n    }\n}\n//# sourceMappingURL=addChildren.js.map\n\n//# sourceURL=webpack:///./node_modules/@soil/dom/build/es6/addChildren.js?");

/***/ }),

/***/ "./node_modules/@soil/dom/build/es6/assignProperties.js":
/*!**************************************************************!*\
  !*** ./node_modules/@soil/dom/build/es6/assignProperties.js ***!
  \**************************************************************/
/*! exports provided: assignProperties */
/*! exports used: assignProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return assignProperties; });\n/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject */ \"./node_modules/@soil/dom/build/es6/isObject.js\");\n\n/**\n * Assign properties from an object literal to an object of type `HTMLElement`\n * or `SVGElement`.\n */\nfunction assignProperties(elem, props) {\n    for (var p in props) {\n        if (props.hasOwnProperty(p)) {\n            if (p === 'role' || p.startsWith('aria-')) {\n                // First-class support for accessibility attributes.\n                elem.setAttribute(p, props[p]);\n            }\n            else if (Object(_isObject__WEBPACK_IMPORTED_MODULE_0__[/* isObject */ \"a\"])(props[p])) {\n                // Go deeper for properties such as `style` or SVG-specific properties.\n                assignNestedProperties(elem[p], props[p]);\n            }\n            else {\n                elem[p] = props[p];\n            }\n        }\n    }\n}\nfunction assignNestedProperties(elem, props) {\n    for (var p in props) {\n        if (props.hasOwnProperty(p)) {\n            if (Object(_isObject__WEBPACK_IMPORTED_MODULE_0__[/* isObject */ \"a\"])(props[p])) {\n                if (!elem[p]) {\n                    elem[p] = {};\n                }\n                assignNestedProperties(elem[p], props[p]);\n            }\n            else {\n                elem[p] = props[p];\n            }\n        }\n    }\n}\n//# sourceMappingURL=assignProperties.js.map\n\n//# sourceURL=webpack:///./node_modules/@soil/dom/build/es6/assignProperties.js?");

/***/ }),

/***/ "./node_modules/@soil/dom/build/es6/html/h.js":
/*!****************************************************!*\
  !*** ./node_modules/@soil/dom/build/es6/html/h.js ***!
  \****************************************************/
/*! exports provided: h */
/*! exports used: h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return h; });\n/* harmony import */ var _addChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addChildren */ \"./node_modules/@soil/dom/build/es6/addChildren.js\");\n/* harmony import */ var _assignProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assignProperties */ \"./node_modules/@soil/dom/build/es6/assignProperties.js\");\n\n\nfunction _h(tag, props, children) {\n    var elem = document.createElement(tag);\n    if (props !== undefined) {\n        Object(_assignProperties__WEBPACK_IMPORTED_MODULE_1__[/* assignProperties */ \"a\"])(elem, props);\n    }\n    if (children !== undefined) {\n        Object(_addChildren__WEBPACK_IMPORTED_MODULE_0__[/* addChildren */ \"a\"])(elem, children);\n    }\n    return elem;\n}\n/// Script-generated.\n/**\n * Helpers to facilitate the concise creation of any HTML element.\n *\n * NOTE The following functions silently depend on the `document` variable\n * being globally available. Therefore, unit tests of components that use them\n * must be run inside a browser, or must expose `document` globally, e.g.\n * through PhantomJS or jsdom.\n */\nvar h = {\n    a: function (props, children) { return _h('a', props, children); },\n    abbr: function (props, children) { return _h('abbr', props, children); },\n    address: function (props, children) { return _h('address', props, children); },\n    area: function (props) { return _h('area', props); },\n    article: function (props, children) { return _h('article', props, children); },\n    aside: function (props, children) { return _h('aside', props, children); },\n    audio: function (props, children) { return _h('audio', props, children); },\n    b: function (props, children) { return _h('b', props, children); },\n    base: function (props) { return _h('base', props); },\n    bdi: function (props, children) { return _h('bdi', props, children); },\n    bdo: function (props, children) { return _h('bdo', props, children); },\n    blockquote: function (props, children) { return _h('blockquote', props, children); },\n    body: function (props, children) { return _h('body', props, children); },\n    br: function (props) { return _h('br', props); },\n    button: function (props, children) { return _h('button', props, children); },\n    canvas: function (props, children) { return _h('canvas', props, children); },\n    caption: function (props, children) { return _h('caption', props, children); },\n    cite: function (props, children) { return _h('cite', props, children); },\n    code: function (props, children) { return _h('code', props, children); },\n    col: function (props) { return _h('col', props); },\n    colgroup: function (props, children) { return _h('colgroup', props, children); },\n    data: function (props, children) { return _h('data', props, children); },\n    datalist: function (props, children) { return _h('datalist', props, children); },\n    dd: function (props, children) { return _h('dd', props, children); },\n    del: function (props, children) { return _h('del', props, children); },\n    details: function (props, children) { return _h('details', props, children); },\n    dfn: function (props, children) { return _h('dfn', props, children); },\n    dialog: function (props, children) { return _h('dialog', props, children); },\n    div: function (props, children) { return _h('div', props, children); },\n    dl: function (props, children) { return _h('dl', props, children); },\n    dt: function (props, children) { return _h('dt', props, children); },\n    em: function (props, children) { return _h('em', props, children); },\n    embed: function (props) { return _h('embed', props); },\n    fieldset: function (props, children) { return _h('fieldset', props, children); },\n    figcaption: function (props, children) { return _h('figcaption', props, children); },\n    figure: function (props, children) { return _h('figure', props, children); },\n    footer: function (props, children) { return _h('footer', props, children); },\n    form: function (props, children) { return _h('form', props, children); },\n    h1: function (props, children) { return _h('h1', props, children); },\n    h2: function (props, children) { return _h('h2', props, children); },\n    h3: function (props, children) { return _h('h3', props, children); },\n    h4: function (props, children) { return _h('h4', props, children); },\n    h5: function (props, children) { return _h('h5', props, children); },\n    h6: function (props, children) { return _h('h6', props, children); },\n    head: function (props, children) { return _h('head', props, children); },\n    header: function (props, children) { return _h('header', props, children); },\n    hr: function (props) { return _h('hr', props); },\n    html: function (props, children) { return _h('html', props, children); },\n    i: function (props, children) { return _h('i', props, children); },\n    iframe: function (props, children) { return _h('iframe', props, children); },\n    img: function (props) { return _h('img', props); },\n    input: function (props) { return _h('input', props); },\n    ins: function (props, children) { return _h('ins', props, children); },\n    kbd: function (props, children) { return _h('kbd', props, children); },\n    label: function (props, children) { return _h('label', props, children); },\n    legend: function (props, children) { return _h('legend', props, children); },\n    li: function (props, children) { return _h('li', props, children); },\n    link: function (props) { return _h('link', props); },\n    main: function (props, children) { return _h('main', props, children); },\n    map: function (props, children) { return _h('map', props, children); },\n    mark: function (props, children) { return _h('mark', props, children); },\n    meta: function (props) { return _h('meta', props); },\n    meter: function (props, children) { return _h('meter', props, children); },\n    nav: function (props, children) { return _h('nav', props, children); },\n    noscript: function (props, children) { return _h('noscript', props, children); },\n    object: function (props, children) { return _h('object', props, children); },\n    ol: function (props, children) { return _h('ol', props, children); },\n    optgroup: function (props, children) { return _h('optgroup', props, children); },\n    option: function (props, children) { return _h('option', props, children); },\n    output: function (props, children) { return _h('output', props, children); },\n    p: function (props, children) { return _h('p', props, children); },\n    param: function (props) { return _h('param', props); },\n    picture: function (props, children) { return _h('picture', props, children); },\n    pre: function (props, children) { return _h('pre', props, children); },\n    progress: function (props, children) { return _h('progress', props, children); },\n    q: function (props, children) { return _h('q', props, children); },\n    rb: function (props, children) { return _h('rb', props, children); },\n    rp: function (props, children) { return _h('rp', props, children); },\n    rt: function (props, children) { return _h('rt', props, children); },\n    rtc: function (props, children) { return _h('rtc', props, children); },\n    ruby: function (props, children) { return _h('ruby', props, children); },\n    s: function (props, children) { return _h('s', props, children); },\n    samp: function (props, children) { return _h('samp', props, children); },\n    script: function (props, children) { return _h('script', props, children); },\n    section: function (props, children) { return _h('section', props, children); },\n    select: function (props, children) { return _h('select', props, children); },\n    small: function (props, children) { return _h('small', props, children); },\n    source: function (props) { return _h('source', props); },\n    span: function (props, children) { return _h('span', props, children); },\n    strong: function (props, children) { return _h('strong', props, children); },\n    style: function (props, children) { return _h('style', props, children); },\n    sub: function (props, children) { return _h('sub', props, children); },\n    summary: function (props, children) { return _h('summary', props, children); },\n    sup: function (props, children) { return _h('sup', props, children); },\n    table: function (props, children) { return _h('table', props, children); },\n    tbody: function (props, children) { return _h('tbody', props, children); },\n    td: function (props, children) { return _h('td', props, children); },\n    template: function (props, children) { return _h('template', props, children); },\n    textarea: function (props, children) { return _h('textarea', props, children); },\n    tfoot: function (props, children) { return _h('tfoot', props, children); },\n    th: function (props, children) { return _h('th', props, children); },\n    thead: function (props, children) { return _h('thead', props, children); },\n    time: function (props, children) { return _h('time', props, children); },\n    title: function (props, children) { return _h('title', props, children); },\n    tr: function (props, children) { return _h('tr', props, children); },\n    track: function (props) { return _h('track', props); },\n    u: function (props, children) { return _h('u', props, children); },\n    ul: function (props, children) { return _h('ul', props, children); },\n    var: function (props, children) { return _h('var', props, children); },\n    video: function (props, children) { return _h('video', props, children); },\n    wbr: function (props) { return _h('wbr', props); },\n};\n//# sourceMappingURL=h.js.map\n\n//# sourceURL=webpack:///./node_modules/@soil/dom/build/es6/html/h.js?");

/***/ }),

/***/ "./node_modules/@soil/dom/build/es6/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@soil/dom/build/es6/index.js ***!
  \***************************************************/
/*! exports provided: h, s */
/*! exports used: h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _html_h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/h */ \"./node_modules/@soil/dom/build/es6/html/h.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return _html_h__WEBPACK_IMPORTED_MODULE_0__[\"a\"]; });\n\n/* harmony import */ var _svg_s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/s */ \"./node_modules/@soil/dom/build/es6/svg/s.js\");\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@soil/dom/build/es6/index.js?");

/***/ }),

/***/ "./node_modules/@soil/dom/build/es6/isObject.js":
/*!******************************************************!*\
  !*** ./node_modules/@soil/dom/build/es6/isObject.js ***!
  \******************************************************/
/*! exports provided: isObject */
/*! exports used: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return isObject; });\n/**\n * Determines whether a given argument is a plain JavaScript object.\n */\nfunction isObject(o) {\n    return o instanceof Object && o.constructor === Object;\n}\n//# sourceMappingURL=isObject.js.map\n\n//# sourceURL=webpack:///./node_modules/@soil/dom/build/es6/isObject.js?");

/***/ }),

/***/ "./node_modules/@soil/dom/build/es6/svg/s.js":
/*!***************************************************!*\
  !*** ./node_modules/@soil/dom/build/es6/svg/s.js ***!
  \***************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export s */\n/* harmony import */ var _addChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addChildren */ \"./node_modules/@soil/dom/build/es6/addChildren.js\");\n/* harmony import */ var _assignProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assignProperties */ \"./node_modules/@soil/dom/build/es6/assignProperties.js\");\n\n\nfunction _s(tag, props, children) {\n    var elem = document.createElementNS('http://www.w3.org/2000/svg', tag);\n    if (props !== undefined) {\n        Object(_assignProperties__WEBPACK_IMPORTED_MODULE_1__[/* assignProperties */ \"a\"])(elem, props);\n    }\n    if (children !== undefined) {\n        Object(_addChildren__WEBPACK_IMPORTED_MODULE_0__[/* addChildren */ \"a\"])(elem, children);\n    }\n    return elem;\n}\n/// Script-generated.\n/**\n * Helpers to facilitate the concise creation of any SVG element.\n *\n * NOTE The following functions silently depend on the `document` variable\n * being globally available. Therefore, unit tests of components that use them\n * must be run inside a browser, or must expose `document` globally, e.g.\n * through PhantomJS or jsdom.\n */\nvar s = {\n    a: function (props, children) { return _s('a', props, children); },\n    circle: function (props, children) { return _s('circle', props, children); },\n    clipPath: function (props, children) { return _s('clipPath', props, children); },\n    // TODO cursor: (props?: BuiltTimeDom.SVGCursorElement, children?: (SVGElement | string)[]): SvgTypesMap['cursor'] => _s('cursor', props, children),\n    defs: function (props, children) { return _s('defs', props, children); },\n    desc: function (props, children) { return _s('desc', props, children); },\n    ellipse: function (props, children) { return _s('ellipse', props, children); },\n    feBlend: function (props, children) { return _s('feBlend', props, children); },\n    feColorMatrix: function (props, children) { return _s('feColorMatrix', props, children); },\n    feComponentTransfer: function (props, children) { return _s('feComponentTransfer', props, children); },\n    feComposite: function (props, children) { return _s('feComposite', props, children); },\n    feConvolveMatrix: function (props, children) { return _s('feConvolveMatrix', props, children); },\n    feDiffuseLighting: function (props, children) { return _s('feDiffuseLighting', props, children); },\n    feDisplacementMap: function (props, children) { return _s('feDisplacementMap', props, children); },\n    feDistantLight: function (props, children) { return _s('feDistantLight', props, children); },\n    feFlood: function (props, children) { return _s('feFlood', props, children); },\n    feFuncA: function (props, children) { return _s('feFuncA', props, children); },\n    feFuncB: function (props, children) { return _s('feFuncB', props, children); },\n    feFuncG: function (props, children) { return _s('feFuncG', props, children); },\n    feFuncR: function (props, children) { return _s('feFuncR', props, children); },\n    feGaussianBlur: function (props, children) { return _s('feGaussianBlur', props, children); },\n    feImage: function (props, children) { return _s('feImage', props, children); },\n    feMerge: function (props, children) { return _s('feMerge', props, children); },\n    feMergeNode: function (props, children) { return _s('feMergeNode', props, children); },\n    feMorphology: function (props, children) { return _s('feMorphology', props, children); },\n    feOffset: function (props, children) { return _s('feOffset', props, children); },\n    fePointLight: function (props, children) { return _s('fePointLight', props, children); },\n    feSpecularLighting: function (props, children) { return _s('feSpecularLighting', props, children); },\n    feSpotLight: function (props, children) { return _s('feSpotLight', props, children); },\n    feTile: function (props, children) { return _s('feTile', props, children); },\n    feTurbulence: function (props, children) { return _s('feTurbulence', props, children); },\n    filter: function (props, children) { return _s('filter', props, children); },\n    foreignObject: function (props, children) { return _s('foreignObject', props, children); },\n    g: function (props, children) { return _s('g', props, children); },\n    gradient: function (props, children) { return _s('gradient', props, children); },\n    image: function (props, children) { return _s('image', props, children); },\n    line: function (props, children) { return _s('line', props, children); },\n    linearGradient: function (props, children) { return _s('linearGradient', props, children); },\n    marker: function (props, children) { return _s('marker', props, children); },\n    mask: function (props, children) { return _s('mask', props, children); },\n    metadata: function (props, children) { return _s('metadata', props, children); },\n    path: function (props, children) { return _s('path', props, children); },\n    pattern: function (props, children) { return _s('pattern', props, children); },\n    polygon: function (props, children) { return _s('polygon', props, children); },\n    polyline: function (props, children) { return _s('polyline', props, children); },\n    radialGradient: function (props, children) { return _s('radialGradient', props, children); },\n    rect: function (props, children) { return _s('rect', props, children); },\n    script: function (props, children) { return _s('script', props, children); },\n    stop: function (props, children) { return _s('stop', props, children); },\n    style: function (props, children) { return _s('style', props, children); },\n    svg: function (props, children) { return _s('svg', props, children); },\n    switch: function (props, children) { return _s('switch', props, children); },\n    symbol: function (props, children) { return _s('symbol', props, children); },\n    text: function (props, children) { return _s('text', props, children); },\n    textPath: function (props, children) { return _s('textPath', props, children); },\n    title: function (props, children) { return _s('title', props, children); },\n    tspan: function (props, children) { return _s('tspan', props, children); },\n    use: function (props, children) { return _s('use', props, children); },\n    view: function (props, children) { return _s('view', props, children); },\n};\n//# sourceMappingURL=s.js.map\n\n//# sourceURL=webpack:///./node_modules/@soil/dom/build/es6/svg/s.js?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soil_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @soil/dom */ \"./node_modules/@soil/dom/build/es6/index.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ \"./src/table.ts\");\n\n\nvar colDefs = [{\n        headerCell: function () { return _soil_dom__WEBPACK_IMPORTED_MODULE_0__[/* h */ \"a\"].th({}, ['Text']); },\n        bodyCell: function (row) { return _soil_dom__WEBPACK_IMPORTED_MODULE_0__[/* h */ \"a\"].td({}, [row.text]); },\n        bodyCellUpdate: function (row, cell) { return cell.textContent = row.text; }\n    }, {\n        headerCell: function () { return _soil_dom__WEBPACK_IMPORTED_MODULE_0__[/* h */ \"a\"].th({}, ['Count']); },\n        bodyCell: function (row) { return _soil_dom__WEBPACK_IMPORTED_MODULE_0__[/* h */ \"a\"].td({}, ['' + row.count]); },\n        bodyCellUpdate: function (row, cell) { return cell.textContent = '' + row.count; },\n        footerCell: function (data) { return _soil_dom__WEBPACK_IMPORTED_MODULE_0__[/* h */ \"a\"].td({}, [\n            '' + data.map(function (row) { return row.count; }).reduce(function (a, b) { return a + b; }, 0)\n        ]); }\n    }];\nvar $table = Object(_table__WEBPACK_IMPORTED_MODULE_1__[/* table */ \"a\"])(colDefs);\ndocument.body.appendChild($table);\nsetInterval(function () {\n    $table.update(Array(10).fill(0).map(function () { return ({\n        text: Math.random().toString(36).substr(2),\n        count: Math.random()\n    }); }));\n}, 256);\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/table.ts":
/*!**********************!*\
  !*** ./src/table.ts ***!
  \**********************/
/*! exports provided: table */
/*! exports used: table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return table; });\n/* harmony import */ var _soil_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @soil/dom */ \"./node_modules/@soil/dom/build/es6/index.js\");\n\nvar table = function (colDefs) {\n    colDefs.forEach(function (colDef) {\n        if (!colDef.bodyCellUpdate) {\n            colDef.bodyCellUpdate = function (row, cell) {\n                return cell.parentElement.replaceChild(colDef.bodyCell(row), cell);\n            };\n        }\n    });\n    var $tbody = _soil_dom__WEBPACK_IMPORTED_MODULE_0__[/* h */ \"a\"].tbody({}, []);\n    var $tfootRow = _soil_dom__WEBPACK_IMPORTED_MODULE_0__[/* h */ \"a\"].tr({});\n    var $self = _soil_dom__WEBPACK_IMPORTED_MODULE_0__[/* h */ \"a\"].table({}, [\n        _soil_dom__WEBPACK_IMPORTED_MODULE_0__[/* h */ \"a\"].thead({}, [\n            _soil_dom__WEBPACK_IMPORTED_MODULE_0__[/* h */ \"a\"].tr({}, colDefs.map(function (colDef) { return colDef.headerCell(); }))\n        ]),\n        $tbody,\n        _soil_dom__WEBPACK_IMPORTED_MODULE_0__[/* h */ \"a\"].tfoot({}, [\n            $tfootRow\n        ])\n    ]);\n    function update(data) {\n        var trs = Array.from($tbody.rows);\n        if (trs.length > data.length) {\n            var lastIdx_1 = -1;\n            data.forEach(function (row, rowIdx) {\n                Array.from(trs[rowIdx].cells).forEach(function (td, tdIdx) {\n                    colDefs[tdIdx].bodyCellUpdate(row, td);\n                });\n                lastIdx_1 = rowIdx;\n            });\n            for (var i = lastIdx_1 + 1; i < trs.length; ++i) {\n                trs[i].remove();\n            }\n        }\n        else if (trs.length < data.length) {\n            var lastIdx_2 = -1;\n            trs.forEach(function (tr, trIdx) {\n                Array.from(tr.cells).forEach(function (td, tdIdx) {\n                    colDefs[tdIdx].bodyCellUpdate(data[trIdx], td);\n                });\n                lastIdx_2 = trIdx;\n            });\n            var _loop_1 = function (i) {\n                $tbody.appendChild(_soil_dom__WEBPACK_IMPORTED_MODULE_0__[/* h */ \"a\"].tr({}, colDefs.map(function (colDef) { return colDef.bodyCell(data[i]); })));\n            };\n            for (var i = lastIdx_2 + 1; i < data.length; ++i) {\n                _loop_1(i);\n            }\n        }\n        else {\n            trs.forEach(function (tr, trIdx) {\n                Array.from(tr.cells).forEach(function (td, tdIdx) {\n                    colDefs[tdIdx].bodyCellUpdate(data[trIdx], td);\n                });\n            });\n        }\n        $tfootRow.innerHTML = '';\n        colDefs.map(function (colDef) {\n            $tfootRow.appendChild(colDef.footerCell\n                ? colDef.footerCell(data)\n                : _soil_dom__WEBPACK_IMPORTED_MODULE_0__[/* h */ \"a\"].td());\n        });\n    }\n    return Object.assign($self, { update: update });\n};\n\n\n//# sourceURL=webpack:///./src/table.ts?");

/***/ })

/******/ });