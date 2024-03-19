/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const map = new Map();
    inorder.forEach((val, idx) => {
        map.set(val, idx);
    });

    function dfs(preStart, inStart, inEnd) {
        if (preStart > preorder.length - 1 || inStart > inEnd) {
            return null;
        }

        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);

        const rootIndexInorder = map.get(rootVal);

        const leftSize = rootIndexInorder - inStart;

        root.left = dfs(preStart + 1, inStart, rootIndexInorder - 1);
        root.right = dfs(preStart + leftSize + 1, rootIndexInorder + 1, inEnd);

        return root;
    };

    return dfs(0, 0, inorder.length - 1);
};
