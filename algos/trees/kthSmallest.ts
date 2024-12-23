import TreeNode from './entities/TreeNode'

export function kthSmallest(root: TreeNode | null, k: number, count: { value: number } = { value: 1 }): number {
  if (!root) return -1
  const left = kthSmallest(root.left, k, count)
  if (root.val === k) return count.value
  count.value++
  kthSmallest(root.right, k, count)
  return count.value
}

const tree = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4))
const k = 1

kthSmallest(tree, k)