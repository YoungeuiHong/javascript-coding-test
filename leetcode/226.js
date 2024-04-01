/**
 * 226. Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150
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
 * @return {TreeNode}
 */
var invertTree = function (root) {

    function dfs(node) {
        if (!node) {
            return node;
        }

        dfs(node.left);
        dfs(node.right);

        currNode = node.left
        node.left = node.right;
        node.right = currNode;

        return node;
    }

    return dfs(root);
};
