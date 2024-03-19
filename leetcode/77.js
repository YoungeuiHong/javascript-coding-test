/**
 * 77. Combinations (Backtrack)
 * https://leetcode.com/problems/combinations/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [];

    function backtrack(start, current) {
        if (current.length === k) {
            result.push([...current]);
            return;
        }

        for (let i = start; i <= n; i++) {
            current.push(i);
            backtrack(i + 1, current);
            current.pop();
        }
    }

    backtrack(1, []);
    return result;
}
