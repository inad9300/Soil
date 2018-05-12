const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')

import {Channel} from './Channel'

// Maximum time sending a message should take.
const DELIVERY_TIME_MS = 10

suite('Channel', () => {

    test('channel with one one-time listener', t => {
        const defer = t.async()

        let count = 0
        const stringChan = new Channel<string>()

        stringChan.listen(newString => {
            count++
            assert.strictEqual(newString, 'S')
        }, 1)
        assert.strictEqual(stringChan.length, 1)

        stringChan.send('S')
        setTimeout(() => {
            assert.strictEqual(stringChan.length, 0)
            stringChan.send('!S')

            setTimeout(() => {
                assert.strictEqual(count, 1)

                defer.resolve()
            }, DELIVERY_TIME_MS)
        }, DELIVERY_TIME_MS)

        return defer.promise
    })

    test('channel with one three-times listener', t => {
        const defer = t.async()

        let count = 0
        const stringChan = new Channel<string>()

        stringChan.listen(newString => {
            count++
            assert.strictEqual(newString, 'S')
        }, 3)
        assert.strictEqual(stringChan.length, 1)

        stringChan.send('S')
        setTimeout(() => {
            assert.strictEqual(stringChan.length, 1)
            stringChan.send('S')
            stringChan.send('S')
            stringChan.send('!S')
            stringChan.send('!S')

            setTimeout(() => {
                assert.strictEqual(count, 3)

                defer.resolve()
            }, DELIVERY_TIME_MS)
        }, DELIVERY_TIME_MS)

        return defer.promise
    })

    test('channel with one one-time listener which stops before being triggered', t => {
        const defer = t.async()

        let count = 0
        const stringChan = new Channel<string>()

        const stop = stringChan.listen(_newString => count++, 1)
        assert.strictEqual(stringChan.length, 1)
        stop()
        assert.strictEqual(stringChan.length, 0)

        stringChan.send('S')
        setTimeout(() => {
            assert.strictEqual(count, 0)

            defer.resolve()
        }, DELIVERY_TIME_MS)

        return defer.promise
    })

    test('channel with one listener which stops listening after 3 messages', t => {
        const defer = t.async()

        let count = 0
        const numberChan = new Channel<number>()

        const stop = numberChan.listen(newNumber => {
            count++
            assert.strictEqual(newNumber, 1)
        })
        assert.strictEqual(numberChan.length, 1)

        numberChan.send(1)
        numberChan.send(1)
        numberChan.send(1)

        setTimeout(() => {
            stop()
            assert.strictEqual(numberChan.length, 0)

            numberChan.send(7)

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
        const langSettingChan = new Channel<Message>()

        function countEn(newLang: Message) {
            count++
            assert.deepEqual(newLang, {langCode: 'en'})
        }

        function countFr(newLang: Message) {
            count++
            assert.deepEqual(newLang, {langCode: 'fr'})
        }

        langSettingChan.listen(countEn, 1)
        langSettingChan.listen(countEn, 1)
        langSettingChan.listen(newLang => {
            if (count <= 2) {
                assert.deepEqual(newLang, {langCode: 'en'})
            } else {
                assert.deepEqual(newLang, {langCode: 'fr'})
            }
            count++
        })
        assert.strictEqual(langSettingChan.length, 3)

        langSettingChan.send({langCode: 'en'})

        setTimeout(() => {
            assert.strictEqual(langSettingChan.length, 1)
            assert.strictEqual(count, 3)

            langSettingChan.listen(countFr)
            langSettingChan.listen(countFr, 1)
            langSettingChan.listen(countFr)
            langSettingChan.listen(countFr)
            langSettingChan.listen(countFr, 1)
            langSettingChan.listen(countFr)

            assert.strictEqual(langSettingChan.length, 7)

            langSettingChan.send({langCode: 'fr'})

            setTimeout(() => {
                assert.strictEqual(count, 10)
                assert.strictEqual(langSettingChan.length, 5)

                defer.resolve()
            }, DELIVERY_TIME_MS)
        }, DELIVERY_TIME_MS)

        return defer.promise
    })

    test('channel kicks out all listeners on clear', () => {
        const someChan = new Channel<undefined>()

        someChan.listen(() => {})
        someChan.listen(() => {})
        someChan.listen(() => {}, 1)
        assert.strictEqual(someChan.length, 3)

        someChan.clear()
        assert.strictEqual(someChan.length, 0)
    })
})
