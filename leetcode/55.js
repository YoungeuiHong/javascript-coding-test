/**
 * 55. Jump Game
 * https://leetcode.com/problems/jump-game/description/
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const n = nums.length;
    let last = n - 1;

    for (let i = n - 2; i >= 0; i--) {
        if (i + nums[i] >= last) {
            last = i;
        }
    }

    return last <= 0;
};
