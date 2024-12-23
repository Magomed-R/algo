class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const arr: number[] = [];

    let sub_head = head;

    while (sub_head !== null) {
        arr.push(sub_head.val);
        sub_head = sub_head.next;
    }

    arr.splice(arr.length - n, 1);
    const length = arr.length;
    let result: ListNode | null = null;

    for (let i = 0; i < length; i++) {
        result = new ListNode(arr.pop(), result);
    }

    return result;
}

removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2)