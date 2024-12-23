import TreeNode from "./entities/TreeNode";

export default function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true;
    else if (!p || !q) return false;
    else if (p.val === q.val) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    else return false
}
