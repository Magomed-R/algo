import TreeNodeWithParent from './entities/TreeNodeWithParent'

export default function isValidBST(
  root: TreeNodeWithParent | null,
): boolean {
  if (!root) return true

  for (let parent = root.parent, dir = root.dir; parent; dir = parent.dir, parent = parent.parent) {
    if (
      (dir === 'left' && root.val >= parent.val) ||
      (dir === 'right' && root.val <= parent.val)
    ) return false
  }

  return (
    isValidBST(
      root.left && new TreeNodeWithParent(
        root.left,
        root,
        'left'
      )
    ) &&
    isValidBST(
      root.right && new TreeNodeWithParent(
        root.right,
        root,
        'right'
      )
    ) 
  )
}