/**
 * 300. Longest Increasing Subsequence (DP)
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // dp[i] = nums[i]를 가장 마지막 요소로 포함했을 때 가장 긴 subsequence의 길이
    const n = nums.length;
    const dp = new Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && dp[j] >= dp[i]) {
                dp[i] = dp[j] + 1;
            }
        }
    }

    return Math.max(...dp);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const stack = [];

    for (const num of nums) {
        if (!stack.length || stack[stack.length - 1] < num) {
            stack.push(num);
        } else if (stack[stack.length - 1] > num) {
            let idx = 0;
            while (stack[idx] < num) {
                idx++;
            }
            stack[idx] = num;
        }
    }

    return stack.length;
};
