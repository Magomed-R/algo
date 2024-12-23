import ListNode from "./ListNode";

export default function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let num_1 = ''
    let num_2 = ''

    while (l1) {
        num_1 = l1.val + num_1
        l1 = l1.next
    }

    while (l2) {
        num_2 = l2.val + num_2
        l2 = l2.next
    }

    const summ = String(Number(num_1) + Number(num_2))
    const result: ListNode | null = new ListNode(0)
    let cursor: ListNode | null = result

    for (let i = 0; i < summ.length; i++) {
        cursor!.val = Number(summ[summ.length - i - 1])
        
        if (summ[summ.length - i - 2]) {
            cursor.next = new ListNode()
            cursor = cursor.next
        }
    }

    return result
};