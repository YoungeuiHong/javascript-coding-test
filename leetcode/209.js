/**
 * 209. Minimum Size Subarray Sum (Sliding Window)
 * https://leetcode.com/problems/minimum-size-subarray-sum/description/
 *
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    const n = nums.length;
    let left = 0, right = 0, acc = 0;
    let min_length = n + 1;

    while (right < n) {
        while (acc < target) {
            acc += nums[right++];
        }
        min_length = Math.min(min_length, right - left + 1);

        while (acc >= target) {
            acc -= nums[left++];
            min_length = Math.min(min_length, right - left + 1);
        }
    }

    return min_length === n + 1 ? 0 : min_length;
};
