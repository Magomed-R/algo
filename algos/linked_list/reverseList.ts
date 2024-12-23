import ListNode from "./ListNode"

//~ linear method
export default function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null;

    const elems: number[] = []

    while (head !== null) {
        elems.push(head.val)
        head = head.next
    }

    let result: ListNode | null = null

    const elems_length = elems.length

    for (let i = 0; i < elems_length; i++) {
        result = new ListNode(elems.shift(), result)
    }

    return result
};
