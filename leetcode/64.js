/**
 * 64. Minimum Path Sum
 * https://leetcode.com/problems/minimum-path-sum/description/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length, n = grid[0].length;

    for (let r = 1; r < m; r++) {
        grid[r][0] += grid[r - 1][0];
    }

    for (let c = 1; c < n; c++) {
        grid[0][c] += grid[0][c - 1];
    }

    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            grid[r][c] += Math.min(grid[r - 1][c], grid[r][c - 1]);
        }
    }

    return grid[m - 1][n - 1];
};
