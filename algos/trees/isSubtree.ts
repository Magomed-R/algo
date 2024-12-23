import TreeNode from "./entities/TreeNode";
import isSameTree from "./isSameTree";

export default function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) return false
    else if (isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)) return true
    else return false
};