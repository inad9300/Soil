const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')

import {Channel} from './Channel'

// Maximum time that should take to send a message to all listeners. If it is longer, a problem must exist somewhere.
const DELIVERY_TIME_MS = 10

suite('Channel', () => {

    test('channel with one one-time listener', t => {
        const defer = t.async()

        let count = 0
        const stringChanged = new Channel<string>()

        stringChanged.once(newString => {
            count++
            assert.strictEqual(newString, 'S')
        })
        assert.strictEqual(stringChanged.length, 1)

        stringChanged.echo('S')
        setTimeout(() => {
            assert.strictEqual(stringChanged.length, 0)
            stringChanged.echo('!S')

            setTimeout(() => {
                assert.strictEqual(count, 1)

                defer.resolve()
            }, DELIVERY_TIME_MS)
        }, DELIVERY_TIME_MS)

        return defer.promise
    })

    test('channel with one one-time listener which stops before being triggered', t => {
        const defer = t.async()

        let count = 0
        const stringChanged = new Channel<string>()

        const stop = stringChanged.once(newString => count++)
        assert.strictEqual(stringChanged.length, 1)
        stop()
        assert.strictEqual(stringChanged.length, 0)

        stringChanged.echo('S')
        setTimeout(() => {
            assert.strictEqual(count, 0)

            defer.resolve()
        }, DELIVERY_TIME_MS)

        return defer.promise
    })

    test('channel with one listener which stops listenning after 3 messages', t => {
        const defer = t.async()

        let count = 0
        const numberChanged = new Channel<number>()

        const stop = numberChanged.do(newNumber => {
            count++
            assert.strictEqual(newNumber, 1)
        })
        assert.strictEqual(numberChanged.length, 1)

        numberChanged.echo(1)
        numberChanged.echo(1)
        numberChanged.echo(1)

        setTimeout(() => {
            stop()
            assert.strictEqual(numberChanged.length, 0)

            numberChanged.echo(7)

            setTimeout(() => {
                assert.strictEqual(count, 3)

                defer.resolve()
            }, DELIVERY_TIME_MS)
        }, DELIVERY_TIME_MS)

        return defer.promise
    })

    test('channel with multiple listeners', t => {
        const defer = t.async()

        type Message = {langCode: 'en' | 'fr'}

        let count = 0
        const langSettingChanged = new Channel<Message>()

        function countEn(newLang: Message) {
            count++
            assert.deepEqual(newLang, {langCode: 'en'})
        }

        function countFr(newLang: Message) {
            count++
            assert.deepEqual(newLang, {langCode: 'fr'})
        }

        langSettingChanged.once(countEn)
        langSettingChanged.once(countEn)
        langSettingChanged.do(newLang => {
            if (count <= 2) {
                assert.deepEqual(newLang, {langCode: 'en'})
            } else {
                assert.deepEqual(newLang, {langCode: 'fr'})
            }
            count++
        })
        assert.strictEqual(langSettingChanged.length, 3)

        langSettingChanged.echo({langCode: 'en'})

        setTimeout(() => {
            assert.strictEqual(langSettingChanged.length, 1)
            assert.strictEqual(count, 3)

            langSettingChanged.do(countFr)
            langSettingChanged.once(countFr)
            langSettingChanged.do(countFr)
            langSettingChanged.do(countFr)
            langSettingChanged.once(countFr)
            langSettingChanged.do(countFr)

            assert.strictEqual(langSettingChanged.length, 7)

            langSettingChanged.echo({langCode: 'fr'})

            setTimeout(() => {
                assert.strictEqual(count, 10)
                assert.strictEqual(langSettingChanged.length, 5)

                defer.resolve()
            }, DELIVERY_TIME_MS)
        }, DELIVERY_TIME_MS)

        return defer.promise
    })

    test('channel kicks out all listeners on clear', () => {
        const someChannel = new Channel<undefined>()

        someChannel.do(() => {})
        someChannel.do(() => {})
        someChannel.once(() => {})
        assert.strictEqual(someChannel.length, 3)

        someChannel.clear()
        assert.strictEqual(someChannel.length, 0)
    })
})
