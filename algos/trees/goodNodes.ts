import TreeNode from './entities/TreeNode'

export default function goodNodes(
  root: TreeNode | null,
  parentVal: number = -10000
): number {
  if (!root) return 0

  let current = 0

  if (root.val >= parentVal) {
    current++
    parentVal = root.val
  }

  return current + goodNodes(root.left, parentVal) + goodNodes(root.right, parentVal)
}