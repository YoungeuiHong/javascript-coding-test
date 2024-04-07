/**
 * 199. Binary Tree Right Side View
 * https://leetcode.com/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=top-interview-150
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];

    const answer = [];
    const queue = [root];

    while (queue.length) {
        const count = queue.length;
        let right = null;
        for (let i = 0; i < count; i++) {
            right = queue.shift();
            if (right.left) queue.push(right.left);
            if (right.right) queue.push(right.right);
        }
        answer.push(right.val);
    }

    return answer;
};
