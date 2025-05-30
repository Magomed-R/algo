import TreeNode from "./entities/TreeNode";

export default function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false
    if (!root.left && !root.right) return root.val === targetSum ? true : false
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};