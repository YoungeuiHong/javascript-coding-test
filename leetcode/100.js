/**
 * 100. Same Tree
 * https://leetcode.com/problems/same-tree/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

    function dfs(pn, qn) {
        if (pn === null || qn === null) {
            return pn === null && qn === null;
        }

        if (pn.val !== qn.val) {
            return false;
        }

        return dfs(pn.left, qn.left) && dfs(pn.right, qn.right);
    }

    return dfs(p, q);
};
