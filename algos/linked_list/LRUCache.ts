export class LRUCache {
  queue: number[] = []
  values: Record<number, number> = {}

  constructor(readonly capacity: number) {}

  get(key: number): number {
    const value = this.values[key]

    if (value === undefined) return -1
    
    this.queue.push(this.queue.splice(this.queue.findIndex((queueKey) => queueKey === key), 1)[0])

    return value
  }

  put(key: number, value: number): void {
    const oldValue = this.values[key]

    if (oldValue === undefined) {
      if (this.queue.length >= this.capacity) delete this.values[this.queue.shift()!]
      this.queue.push(key)
    } else {
      this.queue.push(this.queue.splice(this.queue.findIndex((queueKey) => queueKey === key), 1)[0])
    }

    this.values[key] = value
  }
}
