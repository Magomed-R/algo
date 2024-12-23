import TreeNode from './entities/TreeNode'

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root?.left?.left === null) return new TreeNode(root.val, root.right, root.left)
    else return new TreeNode(root?.val, invertTree(root?.right!), invertTree(root?.left!))
};

const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)))

console.log(JSON.stringify(invertTree(tree), null, 4))
