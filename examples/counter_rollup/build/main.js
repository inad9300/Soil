(function (dom, arch) {
    'use strict';

    var counter = arch.element(function () {
        var $count = dom.h.span();
        var tmpl = dom.h.div({}, [
            dom.h.button({ onclick: function () { return ctrl.value--; } }, ['-']),
            $count,
            dom.h.button({ onclick: function () { return ctrl.value++; } }, ['+'])
        ]);
        var ctrl = {
            get value() {
                return parseInt($count.textContent, 10);
            },
            set value(c) {
                $count.textContent = '' + c;
            }
        };
        return [tmpl, ctrl];
    });

    var $counter = counter({ value: 0 });
    $counter.value++;
    $counter.value++;
    $counter.value--;
    $counter.value++;
    document.body.appendChild($counter);

}(dom, arch));
