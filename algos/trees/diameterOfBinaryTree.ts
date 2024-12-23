import TreeNode from "./entities/TreeNode";
import maxDepth from "./maxDepth";

export default function diameterOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0
    else return Math.max(maxDepth(root?.left!) + maxDepth(root?.right!), diameterOfBinaryTree(root?.left), diameterOfBinaryTree(root?.right))
}