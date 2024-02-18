/**
 * 110. Balanced Binary Tree
 * https://leetcode.com/problems/balanced-binary-tree/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    const dfs = (node) => {
        if (node === null) {
            return [true, 0];
        }

        const [leftBalanced, leftHeight] = dfs(node.left);
        const [rightBalanced, rightHeight] = dfs(node.right);

        const balanced = Math.abs(leftHeight - rightHeight) < 2 && leftBalanced && rightBalanced;

        return [balanced, Math.max(leftHeight + 1, rightHeight + 1)];
    }

    return dfs(root)[0];
};
