import 'intern'
import {isPlainObject, PlainObject} from './isPlainObject'

const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')

suite('isPlainObject()', () => {

    test('tells apart plain objects from anything else', () => {
        const positive: PlainObject[] = [{}, {n: 1, b: false, s: '', o: {}, a: []}, new Object]
        const negative = [0, false, true, '', Array, Promise, Element]

        positive.map(thing => isPlainObject(thing)).forEach(result => assert.isTrue(result))
        negative.map(thing => isPlainObject(thing)).forEach(result => assert.isFalse(result))
    })
})
