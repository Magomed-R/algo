import {describe, expect, test} from '@jest/globals';
import isSameTree from "../../algos/trees/isSameTree";
import TreeNode from '../../algos/trees/entities/TreeNode';

test('First', () => {
    const p = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    const q = new TreeNode(1, new TreeNode(2), new TreeNode(3))

    expect(isSameTree(p, q)).toBe(true)
})

test('Second', () => {
    const p = new TreeNode(1, new TreeNode(2))
    const q = new TreeNode(1, null, new TreeNode(2))

    expect(isSameTree(p, q)).toBe(false)
})

test('Third', () => {
    const p = new TreeNode(1, new TreeNode(2), new TreeNode(1))
    const q = new TreeNode(1, new TreeNode(1), new TreeNode(2))

    expect(isSameTree(p, q)).toBe(false)
})