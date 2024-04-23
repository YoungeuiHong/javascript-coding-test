/**
 * 46. Permutations
 * https://leetcode.com/problems/permutations/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const permutations = [];

    function backtrack(perm, visited) {
        if (perm.length === nums.length) {
            permutations.push([...perm]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue;

            visited[i] = true;
            perm.push(nums[i]);
            backtrack(perm, visited);
            visited[i] = false;
            perm.pop();
        }
    }

    backtrack([], []);

    return permutations;
};
