import TreeNode from "./entities/TreeNode"
import maxDepth from './maxDepth'

function isBalanced(root: TreeNode | null): boolean {
    if (root === null) return true;
    else if (Math.abs(maxDepth(root?.right) - maxDepth(root?.left)) > 1) return false;
    else return isBalanced(root.left) && isBalanced(root.right);
};


const tree = new TreeNode(3, new TreeNode(7), new TreeNode(20, new TreeNode(15), new TreeNode(7)))

console.log(isBalanced(tree))
