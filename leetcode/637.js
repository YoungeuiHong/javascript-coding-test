/**
 * 637. Average of Levels in Binary Tree
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150
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
var averageOfLevels = function (root) {
    const avgs = [];
    const queue = [root];

    while (queue.length) {
        const size = queue.length;
        let total = 0;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            total += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        avgs.push(total / size);
    }


    return avgs;
};


// DFS
var averageOfLevels = function (root) {
    const sum = [];
    const count = []
    const traverse = (node, i) => {
        if (sum[i] === undefined) sum[i] = 0;
        if (count[i] === undefined) count[i] = 0;
        sum[i] += node.val;
        count[i]++;
        if (node.left) traverse(node.left, i + 1);
        if (node.right) traverse(node.right, i + 1)
    }
    traverse(root, 0)
    for (let i = 0; i < sum.length; i++) {
        sum[i] = sum[i] / count[i]
    }
    return sum;
};
