import { expect, test } from "@jest/globals";
import rightSideView from "../../algos/trees/rightSideView";
import TreeNode from "../../algos/trees/entities/TreeNode";

test('first', () => {
    const tree = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4)))

    expect(rightSideView(tree)).toStrictEqual([1, 3, 4])
})

test('second', () => {
    const tree = new TreeNode(1, null, new TreeNode(3))

    expect(rightSideView(tree)).toStrictEqual([1, 3])
})

test('third', () => {
    const tree = null

    expect(rightSideView(tree)).toStrictEqual([])
})

test('fourth', () => {
    const tree = new TreeNode(1, new TreeNode(2))

    expect(rightSideView(tree)).toStrictEqual([1, 2])
})