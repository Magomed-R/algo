import TreeNode from "./TreeNode"

export default class TreeNodeWithParent {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    parent?: TreeNodeWithParent | null
    dir?: 'left' | 'right' | null
  
    constructor(
      root?: TreeNode | null,
      parent?: TreeNodeWithParent | null,
      dir?: 'left' | 'right' | null
    ) {
      this.val = !root || root.val === undefined ? 0 : root.val;
      this.left = !root || root.left === undefined ? null : root.left;
      this.right = !root || root.right === undefined ? null : root.right;
      this.parent = parent === undefined ? null : parent
      this.dir = dir === undefined ? null : dir
    }
  }