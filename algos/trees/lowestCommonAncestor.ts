import TreeNode from './entities/TreeNode'

export default function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root) return null

  if (root === p || root === q) return root
  if (root.val > p!.val && root.val < q!.val) return root
  if (root.val < p!.val && root.val > q!.val) return root

  if (root.val > p!.val && root.val > q!.val) return lowestCommonAncestor(root.left, p, q)
  if (root.val < p!.val && root.val < q!.val) return lowestCommonAncestor(root.right, p, q)

  return null
}
