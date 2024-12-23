import { describe, expect, test } from '@jest/globals'
import TreeNode from '../../algos/trees/entities/TreeNode'
import { kthSmallest } from '../../algos/trees/kthSmallest'

describe('kthSmallest', () => {
  test('first test', () => {
    const tree = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4))
    const k = 1

    expect(kthSmallest(tree, k)).toStrictEqual(1)
  })

  test('second test', () => {
    const tree = new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)), new TreeNode(6))
    const k = 3

    expect(kthSmallest(tree, k)).toStrictEqual(3)
  })
})
