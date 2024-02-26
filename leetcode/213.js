/**
 * 213. House Robber II
 * https://leetcode.com/problems/house-robber-ii/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    if (nums.length == 2) {
        return Math.max(nums[0], nums[1]);
    }

    // dp[i] = dp[i - 2] + nums[i] => i 인덱스까지를 고려했을 때 최대값
    const dp = [];
    const n = nums.length;

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n - 1; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }

    // 첫 번째 집을 고려했을 때
    const first = dp[n - 2];

    dp[1] = nums[1];
    dp[2] = Math.max(nums[1], nums[2]);

    for (let i = 3; i < n; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }

    // 마지막 집을 고려했을 때
    const last = dp[n - 1];

    return Math.max(first, last);
};
