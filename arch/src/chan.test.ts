import {chan} from './chan'

const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')

// Maximum time sending a message should take.
const MAX_DELIVERY_TIME_MS = 10

suite('chan()', () => {

    test('channel with 1 one-time listener', t => {
        const defer = t.async()

        let count = 0
        const stringChan = chan<string>()

        stringChan.sub(newString => {
            count++
            assert.strictEqual(newString, 'S')
        }, 1)
        assert.strictEqual(stringChan.size, 1)

        stringChan.pub('S')
        setTimeout(() => {
            assert.strictEqual(stringChan.size, 0)
            stringChan.pub('!S')

            setTimeout(() => {
                assert.strictEqual(count, 1)

                defer.resolve()
            }, MAX_DELIVERY_TIME_MS)
        }, MAX_DELIVERY_TIME_MS)

        return defer.promise
    })

    test('channel with 1 three-times listener', t => {
        const defer = t.async()

        let count = 0
        const stringChan = chan<string>()

        stringChan.sub(newString => {
            count++
            assert.strictEqual(newString, 'S')
        }, 3)
        assert.strictEqual(stringChan.size, 1)

        stringChan.pub('S')
        setTimeout(() => {
            assert.strictEqual(stringChan.size, 1)
            stringChan.pub('S')
            stringChan.pub('S')
            stringChan.pub('!S')
            stringChan.pub('!S')

            setTimeout(() => {
                assert.strictEqual(count, 3)

                defer.resolve()
            }, MAX_DELIVERY_TIME_MS)
        }, MAX_DELIVERY_TIME_MS)

        return defer.promise
    })

    test('channel with 1 one-time listener which stops before being triggered', t => {
        const defer = t.async()

        let count = 0
        const stringChan = chan<string>()

        const stop = stringChan.sub(_newString => count++, 1)
        assert.strictEqual(stringChan.size, 1)
        stop()
        assert.strictEqual(stringChan.size, 0)

        stringChan.pub('S')
        setTimeout(() => {
            assert.strictEqual(count, 0)

            defer.resolve()
        }, MAX_DELIVERY_TIME_MS)

        return defer.promise
    })

    test('channel with 1 listener which stops listening after 3 messages', t => {
        const defer = t.async()

        let count = 0
        const numberChan = chan<number>()

        const stop = numberChan.sub(newNumber => {
            count++
            assert.strictEqual(newNumber, 1)
        })
        assert.strictEqual(numberChan.size, 1)

        numberChan.pub(1)
        numberChan.pub(1)
        numberChan.pub(1)

        setTimeout(() => {
            stop()
            assert.strictEqual(numberChan.size, 0)

            numberChan.pub(7)

            setTimeout(() => {
                assert.strictEqual(count, 3)

                defer.resolve()
            }, MAX_DELIVERY_TIME_MS)
        }, MAX_DELIVERY_TIME_MS)

        return defer.promise
    })

    test('channel with multiple listeners', t => {
        const defer = t.async()

        type Message = {langCode: 'en' | 'fr'}

        let count = 0
        const langSettingChan = chan<Message>()

        function countEn(newLang: Message) {
            count++
            assert.deepEqual(newLang, {langCode: 'en'})
        }

        function countFr(newLang: Message) {
            count++
            assert.deepEqual(newLang, {langCode: 'fr'})
        }

        langSettingChan.sub(countEn, 1)
        langSettingChan.sub(countEn, 1)
        langSettingChan.sub(newLang => {
            if (count <= 2) {
                assert.deepEqual(newLang, {langCode: 'en'})
            } else {
                assert.deepEqual(newLang, {langCode: 'fr'})
            }
            count++
        })
        assert.strictEqual(langSettingChan.size, 3)

        langSettingChan.pub({langCode: 'en'})

        setTimeout(() => {
            assert.strictEqual(langSettingChan.size, 1)
            assert.strictEqual(count, 3)

            langSettingChan.sub(countFr)
            langSettingChan.sub(countFr, 1)
            langSettingChan.sub(countFr)
            langSettingChan.sub(countFr)
            langSettingChan.sub(countFr, 1)
            langSettingChan.sub(countFr)

            assert.strictEqual(langSettingChan.size, 7)

            langSettingChan.pub({langCode: 'fr'})

            setTimeout(() => {
                assert.strictEqual(count, 10)
                assert.strictEqual(langSettingChan.size, 5)

                defer.resolve()
            }, MAX_DELIVERY_TIME_MS)
        }, MAX_DELIVERY_TIME_MS)

        return defer.promise
    })

    test('channel kicks out all listeners on clear', () => {
        const someChan = chan<undefined>()

        someChan.sub(() => {})
        someChan.sub(() => {})
        someChan.sub(() => {}, 1)
        assert.strictEqual(someChan.size, 3)

        someChan.clear()
        assert.strictEqual(someChan.size, 0)
    })
})
