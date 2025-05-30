import TreeNode from './entities/TreeNode'

export function kthSmallest(root: TreeNode | null, k: number, take: 'left' | 'right' = 'left', parent?: TreeNode | null): number {
  const transformBstToArray = (bst: TreeNode | null): number[] => {
    if (!bst) return []
    return [...transformBstToArray(bst.left), bst.val, ...transformBstToArray(bst.right)]
  }

  return transformBstToArray(root)[k - 1]
}
