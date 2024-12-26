import { WordDictionary } from "../../algos/tries/wordDictionary"

describe('Trie', () => {
    const dict = new WordDictionary()
    dict.addWord('app')

    test('search equals', () => {
        expect(dict.search('app')).toBe(true)
    })

    test('not equals', () => {
        expect(dict.search('apple')).toBe(false)
    })

    test('not enough dots', () => {
        expect(dict.search('a.')).toBe(false)
    })

    test('one dot', () => {
        expect(dict.search('a.p')).toBe(true)
    })

    test('two dots', () => {
        expect(dict.search('..p')).toBe(true)
    })

    test('three dots', () => {
        expect(dict.search('...')).toBe(true)
    })

    test('more dots', () => {
        expect(dict.search('ap..')).toBe(false)
    })
})