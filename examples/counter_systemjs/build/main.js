System.register("counter", ["@soil/dom", "@soil/arch"], function (exports_1, context_1) {
    "use strict";
    var dom_1, arch_1, counter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (dom_1_1) {
                dom_1 = dom_1_1;
            },
            function (arch_1_1) {
                arch_1 = arch_1_1;
            }
        ],
        execute: function () {
            exports_1("counter", counter = arch_1.element(function () {
                var $count = dom_1.h.span();
                var tmpl = dom_1.h.div({}, [
                    dom_1.h.button({ onclick: function () { return ctrl.value--; } }, ['-']),
                    $count,
                    dom_1.h.button({ onclick: function () { return ctrl.value++; } }, ['+'])
                ]);
                var ctrl = {
                    get value() {
                        return parseInt($count.textContent, 10);
                    },
                    set value(v) {
                        $count.textContent = '' + v;
                    }
                };
                return [tmpl, ctrl];
            }));
        }
    };
});
System.register("main", ["counter"], function (exports_2, context_2) {
    "use strict";
    var counter_1, $counter;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (counter_1_1) {
                counter_1 = counter_1_1;
            }
        ],
        execute: function () {
            $counter = counter_1.counter({ value: 0 });
            $counter.value++;
            $counter.value++;
            $counter.value--;
            $counter.value++;
            document.body.appendChild($counter);
        }
    };
});
//# sourceMappingURL=main.js.map