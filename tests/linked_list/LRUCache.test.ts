import { LRUCache } from '../../algos/linked_list/LRUCache'

describe('LRUCache', () => {
  test('case 1', () => {
    const cache = new LRUCache(2)

    cache.put(1, 1)
    cache.put(2, 2)
    expect(cache.get(1)).toBe(1)
    cache.put(3, 3)
    expect(cache.get(2)).toBe(-1)
    cache.put(4, 4)
    expect(cache.get(1)).toBe(-1)
    expect(cache.get(3)).toBe(3)
    expect(cache.get(4)).toBe(4)
  })

  test('case 2', () => {
    const cache = new LRUCache(3)

    cache.put(1, 1)
    cache.put(2, 2)
    cache.put(3, 3)
    cache.put(4, 4)
    expect(cache.get(4)).toBe(4)
    expect(cache.get(3)).toBe(3)
    expect(cache.get(2)).toBe(2)
    expect(cache.get(1)).toBe(-1)
    cache.put(5, 5)
    expect(cache.get(1)).toBe(-1)
    expect(cache.get(2)).toBe(2)
    expect(cache.get(3)).toBe(3)
    expect(cache.get(4)).toBe(-1)
    expect(cache.get(5)).toBe(5)
  })

  test('case 3', () => {
    const stack: Array<'LRUCache' | 'put' | 'get'> = [
      'LRUCache',
      'put',
      'put',
      'put',
      'get',
      'put',
      'put',
      'get',
      'put',
      'put',
      'get',
      'put',
      'get',
      'get',
      'get',
      'put',
      'put',
      'get',
      'put',
      'get',
    ]
    const args: Array<[number] | [number, number]> = [
      [10],
      [7, 28],
      [7, 1],
      [8, 15],
      [6],
      [10, 27],
      [8, 10],
      [8],
      [6, 29],
      [1, 9],
      [6],
      [10, 7],
      [1],
      [2],
      [13],
      [8, 30],
      [1, 5],
      [1],
      [13, 2],
      [12],
    ]
    const expected = [
      undefined,
      undefined,
      undefined,
      undefined,
      -1,
      undefined,
      undefined,
      10,
      undefined,
      undefined,
      29,
      undefined,
      9,
      -1,
      -1,
      undefined,
      undefined,
      5,
      undefined,
      -1,
    ]

    stack.reduce((cache, call, i) => {
      if (call === 'LRUCache') cache = new LRUCache(args[i][0])
      else expect(cache[call](args[i][0], args[i][1] ? args[i][1] : 0)).toBe(expected[i])
      return cache
    }, new LRUCache(1))
  })

  test('case 4', () => {
    const stack: Array<'LRUCache' | 'put' | 'get'> = ["LRUCache","put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get","get","get","put","put","put","put","get","put","put","put","put","put","put","put"]
    const args: Array<[number] | [number, number]> = [[10],[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]
    const expected = [undefined,undefined,undefined,undefined,undefined,undefined,-1,undefined,19,17,undefined,-1,undefined,undefined,undefined,-1,undefined,-1,5,-1,12,undefined,undefined,3,5,5,undefined,undefined,1,undefined,-1,undefined,30,5,30,undefined,undefined,undefined,-1,undefined,-1,24,undefined,undefined,18,undefined,undefined,undefined,undefined,-1,undefined,undefined,18,undefined,undefined,-1,undefined,undefined,undefined,undefined,undefined,18,undefined,undefined,-1,undefined,4,29,30,undefined,12,-1,undefined,undefined,undefined,undefined,29,undefined,undefined,undefined,undefined,17,22,18,undefined,undefined,undefined,-1,undefined,undefined,undefined,20,undefined,undefined,undefined,-1,18,18,undefined,undefined,undefined,undefined,20,undefined,undefined,undefined,undefined,undefined,undefined,undefined]

    stack.reduce((cache, call, i) => {
      if (call === 'LRUCache') cache = new LRUCache(args[i][0])
      else expect(cache[call](args[i][0], args[i][1] ? args[i][1] : 0)).toBe(expected[i])
      return cache
    }, new LRUCache(1))
  })
})
