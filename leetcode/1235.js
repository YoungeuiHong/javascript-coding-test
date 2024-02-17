/**
 * 1235. Maximum Profit in Job Scheduling (DP, Binary Search)
 * https://leetcode.com/problems/maximum-profit-in-job-scheduling/description/
 *
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
    const n = profit.length;
    const jobs = new Array(n);

    for (let i = 0; i < n; i++) {
        jobs[i] = [startTime[i], endTime[i], profit[i]];
    }

    jobs.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        }

        return a[1] - b[1];
    })


    const dp = new Array(n + 1).fill(0);

    for (let i = 0; i < n; ++i) {
        // 1. 현재 startTime보다 endTime이 이전인 것 중에 profit이 가장 큰 것을 찾아야 한다.
        // 2. 현재 endTime보다 endTime이 이전인 것 중에 profit이 가잔 큰 것을 찾아야 한다.
        // 현재 jobs는 endTime을 기준으로 정렬되어 있으므로 2는 그냥 dp[i - 1]을 찾으면 된다.

        const [start, end, money] = jobs[i];
        const prevIdx = binarySearch(i, start, jobs);
        dp[i + 1] = Math.max(dp[prevIdx] + money, dp[i]);
    }

    return dp[n];
};

function binarySearch(endIndex, startTime, jobs) {
    let low = 0;
    let high = endIndex;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (jobs[mid][1] <= startTime) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};
