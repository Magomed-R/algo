import depth from "./depth";
import ListNode from "./ListNode";
import reverseList from "./reverseList";

//! Slow code
/*
function spliceLastListNode(list: ListNode | null) {
    if (!list || !list.next) return null
    else if (list.next.next === null) {
        const result = list.next
        list.next = null
        return result
    }
    else return spliceLastListNode(list.next)
}

export default function reorderList(head: ListNode | null): void {
    let cursor = head

    for (let i = 0; cursor !== null; i++) {
        if (i % 2 === 1) {
            cursor.next = new ListNode(cursor.val, cursor.next)
            cursor.val = spliceLastListNode(head)!.val
        }

        cursor = cursor.next
    }
} */

//* Fast code
function middleList(list: ListNode | null): ListNode | null {
    let middle = list;
    let fast = list;

    while (fast && fast.next) {
        middle = middle?.next!;
        fast = fast.next.next;
    }

    return middle;
}

export default function reorderList(head: ListNode | null): void {
    let first = head
    let second = reverseList(middleList(head));
    const length = depth(head)

    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
        } else {
            const first_next = new ListNode(first?.val, first?.next)
            first!.next = first_next
            first!.val = second!.val
            second = second!.next
        }

        if (i < length - 1) first = first!.next
    }

    if (first?.next) first.next = null;
}