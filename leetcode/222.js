/**
 * 222. Count Complete Tree Nodes
 * https://leetcode.com/problems/count-complete-tree-nodes/description/?envType=study-plan-v2&envId=top-interview-150
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
var countNodes = function (root) {
    function dfs(node) {
        if (!node) {
            return 0;
        }

        return dfs(node.left) + dfs(node.right) + 1;
    }

    return dfs(root);
};


/**
 * 아래 코드가 시간복잡도, 공간복잡도 측면에서 더 좋음
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
var countNodes = function (root) {
    function dfs(node) {
        if (!node) {
            return 0;
        } else if (!node.right) {
            return dfs(node.left) + 1;
        } else if (!node.left) {
            return dfs(node.right) + 1;
        } else {
            return dfs(node.left) + dfs(node.right) + 1;
        }
    }

    return dfs(root);
};
