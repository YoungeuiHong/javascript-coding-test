/**
 * 124. Binary Tree Maximum Path Sum (DFS)
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 *
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var maxPathSum = function (root) {
    let maxSum = Number.MIN_SAFE_INTEGER;

    function dfs(node) {
        if (node === null) {
            return 0;
        }

        // 만약 하위 경로의 합이 음수라면 포함하지 않는 것이 나으므로 Math.max의 비교대상이 0
        const left = Math.max(0, dfs(node.left));
        const right = Math.max(0, dfs(node.right));

        // 현재 노드를 path의 루트 노드로 삼았을 때 sum이 최대값을 넘는다면 갱신
        maxSum = Math.max(maxSum, left + right + node.val);

        // 문제 조건 상 한 번 방문한 노드는 다시 방문할 수 없음
        // 따라서 상위 노드가 루트 노드가 된다면 left와 right 중 한 개의 노드만 방문할 수 있으므로
        return Math.max(left, right) + node.val;
    }

    dfs(root);

    return maxSum;
};
