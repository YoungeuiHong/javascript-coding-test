/**
 * 129. Sum Root to Leaf Numbers
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/description/?envType=study-plan-v2&envId=top-interview-150
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
 * @return {number}
 */
var sumNumbers = function (root) {
    let total = 0;

    function dfs(node, curr) {
        if (node.left === null && node.right === null) {
            total += curr * 10 + node.val;
            return;
        }

        if (node.left) dfs(node.left, curr * 10 + node.val);
        if (node.right) dfs(node.right, curr * 10 + node.val);
    }

    dfs(root, 0);

    return total;
};
