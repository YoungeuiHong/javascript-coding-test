/**
 * 746. Min Cost Climbing Stairs (DP)
 * https://leetcode.com/problems/min-cost-climbing-stairs/description/
 *
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // dp[i] = i번째 인덱스를 마지막 방문 인덱스로 했을 때 필요한 최소 비용
    // dp[i] = 현재 칸의 비용 + Math.min(dp[i - 1], dp[i - 2])
    const n = cost.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp[n - 1], dp[n - 2]);
};


/**
 * 배열을 사용하지 않는 방법
 *
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // 최소 총 비용 = 현재 칸의 비용 + Math.min(이전, 전전)
    const n = cost.length;
    let prevPrev = cost[0], prev = cost[1]

    for (let i = 2; i < n; i++) {
        const curr = cost[i] + Math.min(prevPrev, prev);
        prevPrev = prev;
        prev = curr;
    }

    return Math.min(prevPrev, prev);
};
