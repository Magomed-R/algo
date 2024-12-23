import { expect, test } from "@jest/globals";
import levelOrder from "../../algos/trees/levelOrder";
import TreeNode from "../../algos/trees/entities/TreeNode";

test('first test', () => {
    const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))

    expect(levelOrder(tree)).toStrictEqual([[3], [9, 20], [15, 7]])
})

test('second test', () => {
    const tree = new TreeNode(1)

    expect(levelOrder(tree)).toStrictEqual([[1]])
})

test('third test', () => {
    const tree = null

    expect(levelOrder(tree)).toStrictEqual([])
})