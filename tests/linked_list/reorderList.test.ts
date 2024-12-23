import {describe, expect, test, } from '@jest/globals';
import reorderList from '../../algos/linked_list/reorderList';
import ListNode from '../../algos/linked_list/ListNode';

test('first', () => {
    let list: ListNode | null = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
    reorderList(list)

    const answers = [1, 4, 2, 3]

    for (let i = 0; list !== null; i++) {
        expect(list.val).toBe(answers[i])
        list = list.next
    }
})

test('second', () => {
    let list: ListNode | null = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
    reorderList(list)
    console.log(JSON.stringify(list))

    const answers = [1, 5, 2, 4, 3]

    for (let i = 0; list !== null; i++) {
        expect(list.val).toBe(answers[i])
        list = list.next
    }
})