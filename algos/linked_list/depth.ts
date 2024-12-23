import ListNode from "./ListNode";

export default function depth(list: ListNode | null) {
    let d = 0;
    while (list) {
        d++;
        list = list.next;
    }
    return d;
}
