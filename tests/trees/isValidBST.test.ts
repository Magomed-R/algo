import { test } from "@jest/globals";
import TreeNode from "../../algos/trees/entities/TreeNode";
import isValidBST from "../../algos/trees/isValidBST";

test('first', () => {
    const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3))

    expect(isValidBST(tree)).toBe(true)
})

test('second', () => {
    const tree = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)))

    expect(isValidBST(tree)).toBe(false)
})

test('third', () => {
    const tree = new TreeNode(5, new TreeNode(4), new TreeNode(6, new TreeNode(3), new TreeNode(7)))

    expect(isValidBST(tree)).toBe(false)
})