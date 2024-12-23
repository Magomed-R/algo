import { Trie } from "../../algos/tries/trie"

describe('Trie', () => {
    const trie = new Trie()
    trie.insert('app')
    trie.insert('apple')
    trie.insert('apponent')

    test('search equals', () => {
        expect(trie.search('apple')).toBe(true)
    })

    test('search equals to similar but earlier', () => {
        expect(trie.search('app')).toBe(true)
    })

    test('search exceeding', () => {
        expect(trie.search('apples')).toBe(false)
    })

    test('prefix', () => {
        expect(trie.startsWith('ap')).toBe(true)
    })

    test('prefix equals', () => {
        expect(trie.startsWith('apponent')).toBe(true)
    })

    test('prefix equals exceeding', () => {
        expect(trie.startsWith('apponents')).toBe(false)
    })
})