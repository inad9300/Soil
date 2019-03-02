import 'intern'
import {element} from './element'
import {h} from '../../dom/src/html/h'

const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')

suite('element()', () => {

    test('creates void HTML elements', () => {
        const counter = element(() => {
            const count = h.span({}, ['0'])

            const tmpl = h.div({}, [
                h.button({onclick: () => ctrl.value--}, ['-']),
                count,
                h.button({onclick: () => ctrl.value++}, ['+'])
            ])

            const ctrl = {
                get value() {
                    return parseInt(count.textContent!, 10)
                },
                set value(v: number) {
                    count.textContent = '' + v
                },
                inc() {
                    ctrl.value++
                },
                dec() {
                    ctrl.value--
                }
            }

            return [tmpl, ctrl]
        })

        const myCounter = counter({value: 9})
        document.body.appendChild(myCounter)

        assert.strictEqual(myCounter.querySelector('span').textContent, '9')

        myCounter.value++;
        myCounter.value--;
        myCounter.inc();
        myCounter.dec();
        myCounter.inc();

        assert.strictEqual(myCounter.querySelector('span').textContent, '10')
    })

    test('creates non-void HTML elements', () => {
        const confirm = element((children: [h.P]) => {
            const tmpl = h.div({}, [
                h.header({}, ['Confirm']),
                children[0],
                h.footer({}, [
                    h.button({}, ['Yes']),
                    h.button({}, ['No'])
                ])
            ])

            const ctrl = {
                onclose: () => {}
            }

            return [tmpl, ctrl]
        })

        const myConfirm = confirm({onclose: () => undefined}, [
            h.p({}, ['Are you sure?'])
        ])
        document.body.appendChild(myConfirm)

        assert.strictEqual(myConfirm.querySelectorAll('p').length, 1)
    })
})
