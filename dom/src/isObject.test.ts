const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')

import {isObject} from './isObject'

suite('isObject()', () => {

    test('tells apart plain objects from anything else', () => {
        const positive = [{}, {n: 1, b: false, s: '', o: {}, a: []}, new Object]
        const negative = [0, false, true, '', Array, Promise, Element]

        positive.map(thing => isObject(thing)).forEach(result => assert.isTrue(result))
        negative.map(thing => isObject(thing)).forEach(result => assert.isFalse(result))
    })
})
