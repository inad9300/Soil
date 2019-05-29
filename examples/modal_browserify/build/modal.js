"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@soil/dom");
var arch_1 = require("@soil/arch");
exports.modal = function (props, children) {
    var $self = dom_1.h.div({ className: 'hidden modal overlay ' + (props.className || ''), onclick: close }, [
        dom_1.h.div({ className: 'container', onclick: preventClose }, [
            dom_1.h.div({ className: 'title' }, [props.title]),
            dom_1.h.div({ className: 'body' }, children),
            dom_1.h.div({ className: 'footer' }, [
                dom_1.h.button({ className: 'cancel', onclick: close }, ['Cancel']),
                dom_1.h.button({ className: 'submit', onclick: function () { return props.onSubmit(); } }, ['Submit']),
                dom_1.h.div({ className: 'clear' })
            ])
        ])
    ]);
    document.addEventListener('keyup', function (evt) {
        if (evt.key === 'Escape') {
            close();
        }
    });
    function open() {
        $self.classList.remove('hidden');
    }
    function close() {
        $self.classList.add('hidden');
    }
    function preventClose(evt) {
        evt.stopPropagation();
    }
    return arch_1.extend($self, { open: open, close: close });
};
//# sourceMappingURL=modal.js.map