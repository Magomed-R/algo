import TreeNode from './entities/TreeNode'

export default function rightSideView(
  root: TreeNode | null,
  result: number[] = [],
  depth: number = 0
): number[] {
  if (!root) return result;
  result[depth] = root.val;
  rightSideView(root.left, result, depth + 1);
  return rightSideView(root.right, result, depth + 1);
};

/* 

      1
    |  \
   2   3
  |
 4

*/