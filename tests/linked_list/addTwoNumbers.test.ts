import { describe, expect, test } from "@jest/globals";
import addTwoNumbers from "../../algos/linked_list/addTwoNumbers";
import ListNode from "../../algos/linked_list/ListNode";

test("first", () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

    let output = addTwoNumbers(l1, l2);
    const expected = [7, 0, 8];

    for (let i = 0; i < expected.length; i++) {
        expect(output?.val).toBe(expected[i]);
        output = output?.next!;
    }
});

test("second", () => {
    const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
    const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

    let output = addTwoNumbers(l1, l2);
    const expected = [8, 9, 9, 9, 0, 0, 0, 1];

    for (let i = 0; i < expected.length; i++) {
        expect(output?.val).toBe(expected[i]);
        output = output?.next!;
    }
});
