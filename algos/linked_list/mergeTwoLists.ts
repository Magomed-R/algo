import ListNode from "./ListNode"

//~ recursive method
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    else if (!list2) return list1;
    else if (list1.val <= list2.val) return new ListNode(list1.val, mergeTwoLists(list1.next, list2));
    else return new ListNode(list2.val, mergeTwoLists(list1, list2.next));
}

//~ linear method 
/* function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const values: number[] = []

    while (list1 !== null) {
        values.push(list1.val)
        list1 = list1.next
    }

    while (list2 !== null) {
        values.push(list2.val)
        list2 = list2.next
    }

    values.sort((a, b) => a - b)

    let result: ListNode | null = null

    const len = values.length

    for (let i = 0; i < len; i++) {
        result = new ListNode(values.pop(), result)
    }

    return result
} */


const tl1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const tl2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(JSON.stringify(mergeTwoLists(tl1, tl2)));
