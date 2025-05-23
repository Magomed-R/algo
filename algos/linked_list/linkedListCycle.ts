import ListNode from "./ListNode"

class MarkedListNode extends ListNode {
  checked?: boolean = false
  declare next: MarkedListNode | null

  constructor(val: number, next: MarkedListNode | null) {
    super(val, next)
  }
}

export function hasCycle(head: MarkedListNode | null) {  
  while (head) {
    if (head.checked) return true
    head.checked = true
    head = head.next
  }

  return false
}
