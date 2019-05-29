"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@soil/dom");
var loginModal_1 = require("./loginModal");
var $loginModal = loginModal_1.loginModal();
var $loginBtn = dom_1.h.button({ onclick: $loginModal.open }, ['Log in']);
document.body.appendChild($loginModal);
document.body.appendChild($loginBtn);
//# sourceMappingURL=main.js.map