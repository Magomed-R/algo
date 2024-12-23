import { expect, test } from "@jest/globals";
import isSubtree from "../../algos/trees/isSubtree";
import TreeNode from "../../algos/trees/entities/TreeNode";

test("First", () => {
    const root = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5));
    const subTree = new TreeNode(4, new TreeNode(1), new TreeNode(2));

    expect(isSubtree(root, subTree)).toBe(true);
});

test("Second", () => {
    const root = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))), new TreeNode(5));
    const subTree = new TreeNode(4, new TreeNode(1), new TreeNode(2));

    expect(isSubtree(root, subTree)).toBe(false);
});
