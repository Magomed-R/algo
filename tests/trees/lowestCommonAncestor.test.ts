import { expect, test } from "@jest/globals";
import TreeNode from "../../algos/trees/entities/TreeNode";
import lowestCommonAncestor from '../../algos/trees/lowestCommonAncestor'

test('first', () => {
    const tree = new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))), new TreeNode(8, new TreeNode(7), new TreeNode(9)))

    expect(lowestCommonAncestor(tree, new TreeNode(2), new TreeNode(8))).toBe(6)
})

test('second', () => {
    const tree = new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))), new TreeNode(8, new TreeNode(7), new TreeNode(9)))

    expect(lowestCommonAncestor(tree, new TreeNode(2), new TreeNode(4))).toBe(2)
})