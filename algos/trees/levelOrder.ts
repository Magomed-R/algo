import TreeNode from "./entities/TreeNode";

export default function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return []
    if (!root.left && !root.right) return [[root.val]]
    if (!root.left) return [[root.val], ...levelOrder(root.right)]
    if (!root.right) return [[root.val], ...levelOrder(root.left)]

    const levelOrderLeft = levelOrder(root?.left)
    const levelOrderRight = levelOrder(root?.right)

    const tail: number[][] = []

    for (let i = 0; levelOrderLeft[i] || levelOrderRight[i]; i++) {
        const elem = 
            levelOrderLeft[i] && levelOrderRight[i] ? [...levelOrderLeft[i], ...levelOrderRight[i]] : 
            levelOrderLeft[i] ? levelOrderLeft[i] :
            levelOrderRight[i] ? levelOrderRight[i] : 
            []

        tail.push(elem)
    }

    return [[root.val], ...tail]
};

//          3
//        /   \
//       9     20
//            /  \
//           15   7