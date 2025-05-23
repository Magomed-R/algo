import { findWords } from '../../algos/tries/findWords'

describe('findWords', () => {
  test('big board', () => {
    const board = [
        ['o', 'a', 'a', 'n'],
        ['e', 't', 'a', 'e'],
        ['i', 'h', 'k', 'r'],
        ['i', 'f', 'l', 'v'],
      ],
      words = ['oath', 'pea', 'eat', 'rain']

    expect(findWords(board, words).sort()).toStrictEqual(['eat', 'oath'].sort())
  })

  test('small board', () => {
    const board = [
        ['a', 'b'],
        ['c', 'd'],
      ],
      words = ['abcb']

    expect(findWords(board, words).sort()).toStrictEqual([].sort())
  })

  test('similar words', () => {
    const board = [
        ['o', 'a', 'b', 'n'],
        ['o', 't', 'a', 'e'],
        ['a', 'h', 'k', 'r'],
        ['a', 'f', 'l', 'v'],
      ],
      words = ['oa', 'oaa']

    expect(findWords(board, words).sort()).toStrictEqual(['oa', 'oaa'].sort())
  })
})
