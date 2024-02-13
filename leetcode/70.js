/**
 * 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // dp[n] = dp[n - 1] + dp[n - 2];
    const dp = [];

    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    if (dp <= n) {
        return dp[n];
    }

    let curr = 3;
    while (curr <= n) {
        dp[curr] = dp[curr - 1] + dp[curr - 2];
        curr++;
    }

    return dp[n];
};

