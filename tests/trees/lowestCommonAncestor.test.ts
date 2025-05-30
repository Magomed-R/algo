import TreeNode from '../../algos/trees/entities/TreeNode'
import lowestCommonAncestor from '../../algos/trees/lowestCommonAncestor'

describe('lowestCommonAncestor', () => {
  test('first', () => {
    const p = new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5)))
    const q = new TreeNode(8, new TreeNode(7), new TreeNode(9))

    const bst = new TreeNode(6, p, q)

    expect(lowestCommonAncestor(bst, p, q)).toStrictEqual(bst)
  })

  test('second', () => {
    const q = new TreeNode(4, new TreeNode(3), new TreeNode(5))
    const p = new TreeNode(2, new TreeNode(0), q)

    const bst = new TreeNode(6, p, new TreeNode(8, new TreeNode(7), new TreeNode(9)))

    expect(lowestCommonAncestor(bst, p, q)).toStrictEqual(p)
  })
})
