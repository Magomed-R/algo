import TreeNode from "./entities/TreeNode"

export default function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    else if (root?.right && root?.left) return Math.max(maxDepth(root.right), maxDepth(root.left)) + 1
    else if (!root?.right && root?.left) return maxDepth(root.left) + 1
    else if (root?.right && !root?.left) return maxDepth(root.right) + 1
    else return 1
};

const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))

console.log(maxDepth(tree))