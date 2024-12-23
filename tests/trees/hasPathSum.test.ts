import { test, expect } from "@jest/globals";
import TreeNode from "../../algos/trees/entities/TreeNode";
import hasPathSum from "../../algos/trees/hasPathSum";

test('first', () => {
    const tree = new TreeNode(5, 
        new TreeNode(4,
            new TreeNode(11,
                new TreeNode(7),
                new TreeNode(2)
            )
        ),
        new TreeNode(8,
            new TreeNode(13),
            new TreeNode(4,
                null,
                new TreeNode(1)
            )
        )
    )
    const targetSum = 22

    expect(hasPathSum(tree, targetSum)).toBe(true)
})

test('second', () => {
    const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    const targetSum = 5

    expect(hasPathSum(tree, targetSum)).toBe(false)
})

test('three', () => {
    const tree = null
    const targetSum = 0

    expect(hasPathSum(tree, targetSum)).toBe(false)
})