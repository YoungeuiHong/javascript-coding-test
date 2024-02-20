/**
 * 101. Symmetric Tree
 * https://leetcode.com/problems/symmetric-tree/
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
var isSymmetric = function (root) {
    const queue = [root];

    while (queue.length) {
        const n = queue.length;

        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            if (node) {
                queue.push(node.left);
                queue.push(node.right);
            }
        }

        let left = 0, right = queue.length - 1;
        while (left < right) {
            const leftVal = queue[left] ? queue[left].val : null;
            const rightVal = queue[right] ? queue[right].val : null;

            if (leftVal !== rightVal) {
                return false;
            }

            left++;
            right--;
        }

    }

    return true;
};


/**
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
var isSymmetric = function (root) {
    function dfs(left, right) {
        if (left === right) {
            return true;
        }

        if (left === null || right === null) {
            return false;
        }

        if (left.val !== right.val) {
            return false;
        }

        return dfs(left.left, right.right) && dfs(left.right, right.left);
    }

    return root === null || dfs(root.left, root.right)
};
