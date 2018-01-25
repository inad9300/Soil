const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')

import {extend} from './extend'

suite('extend()', () => {

    test('includes own enumerable properties', () => {
        const target = {n: 111}

        const o = {p: 555}

        const source = {
            n: 222,
            s: 'a',
            b: true,
            a: [333],
            f: () => 444,
            o
        }

        const result = extend(target, source)

        assert.strictEqual(target, result)
        assert.notStrictEqual(target, source)
        assert.strictEqual(Object.keys(result).length, 6)

        assert.strictEqual(result.n, 222)
        assert.strictEqual(result.s, 'a')
        assert.strictEqual(result.b, true)

        assert.isArray(result.a)
        assert.strictEqual(result.a.length, 1)
        assert.strictEqual(result.a[0], 333)

        assert.isFunction(result.f)
        assert.strictEqual(result.f(), 444)

        assert.isObject(result.o)
        assert.strictEqual(result.o, o)
    })

    test('includes getters and setters', () => {
        const target = {}

        let p = 0

        const source = {
            get p() { return p },
            set p(_p) { p = _p }
        }

        const result = extend(target, source)

        result.p = 3
        result.p++

        assert.strictEqual(result.p, 4)
        assert.strictEqual(p, 4)
    })

    test('ignores inherited properties', () => {
        const target = {}

        class Source {a = 111}
        ;(Source.prototype as any).b = 222

        const source = new Source

        assert.strictEqual(source.a, 111)
        assert.strictEqual((source as any).b, 222)

        const result = extend(target, source)

        assert.strictEqual(result.a, 111)
        assert.strictEqual((result as any).b, undefined)
        assert.notProperty(result, 'b')
    })
})