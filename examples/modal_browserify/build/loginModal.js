"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@soil/dom");
var arch_1 = require("@soil/arch");
var modal_1 = require("./modal");
exports.loginModal = function () {
    var $usernameInput = dom_1.h.input({ placeholder: 'Username' });
    var $passwordInput = dom_1.h.input({ placeholder: 'Password', type: 'password' });
    var $self = modal_1.modal({ title: 'Log in', onSubmit: onSubmit, className: 'login' }, [
        dom_1.h.form({}, [
            $usernameInput,
            $passwordInput
        ])
    ]);
    function onSubmit() {
        if (!$passwordInput.value) {
            alert('Please, type your password');
            $passwordInput.focus();
            return;
        }
        alert("Welcome back, " + ($usernameInput.value || 'Mr. Undefined'));
        $self.close();
    }
    var openModal = $self.open;
    var closeModal = $self.close;
    function open() {
        openModal();
        $usernameInput.focus();
    }
    function close() {
        closeModal();
        $usernameInput.value = '';
        $passwordInput.value = '';
    }
    return arch_1.extend($self, { open: open, close: close });
};
//# sourceMappingURL=loginModal.js.map