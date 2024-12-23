import { test } from "@jest/globals";
import TreeNode from "../../algos/trees/entities/TreeNode";
import goodNodes from "../../algos/trees/goodNodes";


test('first', () => {
    const tree = new TreeNode(3, new TreeNode(1, new TreeNode(3)), new TreeNode(4, new TreeNode(1), new TreeNode(5)))

    expect(goodNodes(tree)).toBe(4)
})

test('second', () => {
    const tree = new TreeNode(3, new TreeNode(3, new TreeNode(4), new TreeNode(2)))

    expect(goodNodes(tree)).toBe(3)
})

test('third', () => {
    const tree = new TreeNode(1)

    expect(goodNodes(tree)).toBe(1)
})

test('fourth', () => {
    const tree = new TreeNode(9, null, new TreeNode(3, new TreeNode(6)))

    expect(goodNodes(tree)).toBe(1)
})