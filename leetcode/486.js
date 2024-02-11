/**
 * 486. Predict the Winner (DFS)
 * https://leetcode.com/problems/predict-the-winner/description/
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {
    const memo = Array.from({length: nums.length}, () => new Array(nums.length).fill(-1));

    const dfs = (nums, start, end) => {
        if (start === end) {
            return nums[start];
        }

        if (start > end) {
            return 0;
        }

        if (memo[start][end] !== -1) {
            return memo[start][end];
        }

        // Math.min()을 하는 이유
        // => 두 번째 플레이어가 본인에게 유리한 선택을 할 것이므로, 첫 번째 플레이어는 둘 중 최소값을 가질 수 있음
        const first = nums[start] + Math.min(dfs(nums, start + 2, end), dfs(nums, start + 1, end - 1));
        const last = nums[end] + Math.min(dfs(nums, start, end - 2), dfs(nums, start + 1, end - 1));

        return memo[start][end] = Math.max(first, last);
    }

    const player_1 = dfs(nums, 0, nums.length - 1);
    const player_2 = nums.reduce((acc, curr) => acc + curr, 0) - player_1;

    return player_1 >= player_2;
};


/**
 * 486. Predict the Winner (DP)
 * https://leetcode.com/problems/predict-the-winner/description/
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {
    const n = nums.length;
    // dp[i][j] = 배열의 i ~ j번째 요소를 고려했을 때 먼저 움직인 플레이어가 몇 점 더 얻을 수 있는지 나타내는 배열
    const dp = Array.from({length: n}, () => new Array(n).fill(-1));

    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }

    for (let size = 1; size < n; size++) {
        for (let i = 0; i < n - size; i++) {
            const j = i + size;
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }

    return dp[0][n - 1] >= 0;
};

