import { expect, test } from "@jest/globals";
import diameterOfBinaryTree from "../../algos/trees/diameterOfBinaryTree";
import TreeNode from "../../algos/trees/entities/TreeNode";

test("First", () => {
    const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))

    expect(diameterOfBinaryTree(tree)).toBe(3)
})

test("Second", () => {
    const tree = new TreeNode(1, new TreeNode(2))

    expect(diameterOfBinaryTree(tree)).toBe(1)
})