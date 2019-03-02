import 'intern'
import {assert} from './assert'

const {suite, test} = intern.getInterface('tdd')
const {expect} = intern.getPlugin('chai')

suite('assert()', () => {

    test('true statements do not throw any exception', () => {
        expect(() => assert(2 === 2))
            .not.to.throw()

        expect(() => assert(() => 2 === 2, 'Two must be equal to 2'))
            .not.to.throw()
    })

    test('false statements throw an exception', () => {
        expect(() => assert(2 !== 2, 'Two must not be different from 2'))
            .to.throw(Error, /^(Two must not be different from 2)$/)

        expect(() => assert(() => 2 !== 2, 'Two must not be different from 2'))
            .to.throw(Error, /^(Two must not be different from 2)[\s\S]*2 !== 2/)
    })
})
