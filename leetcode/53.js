/**
 * 53. Maximum Subarray (DP)
 * https://leetcode.com/problems/maximum-subarray/
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const n = nums.length;
    let max = nums[0]; // 현재까지의 최대 부분합
    let sum = nums[0]; // 현재 요소를 포함한 부분합

    for (let i = 1; i < n; i++) {
        // 이전 부분합에 현재 요소를 더한 값과 현재 요소 중에서 큰 값을 취함
        sum = Math.max(nums[i], sum + nums[i]);
        // 최대 부분합 갱신
        max = Math.max(max, sum);
    }

    return max;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const n = nums.length;
    // dp[i] = i번째 요소를 마지막 요소로 하는 sub array 중 합이 가장 큰 것
    const dp = new Array(n);
    dp[0] = nums[0];

    let max = Math.max(...nums);

    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        max = Math.max(max, dp[i]);
    }

    return max;
};
