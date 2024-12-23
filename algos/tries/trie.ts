interface Store {
  [key: string]: Store
}

export class Trie {
  private store: Store

  constructor() {
    this.store = {}
  }

  insert(word: string): void {
    const chars = word.split('')

    let acc = this.store

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i]

      if (!acc[char]) acc[char] = {}

      acc = acc[char]
    }

    acc['_'] = {}
  }

  search(word: string, equal: boolean = true): boolean {
    const chars = word.split('')

    let acc = this.store

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i]

      if (!acc[char]) return false

      acc = acc[char]
    }

    if (equal && Object.values(acc).length !== 0 && !acc['_']) return false

    return true
  }

  startsWith(prefix: string): boolean {
    return this.search(prefix, false)
  }
}
