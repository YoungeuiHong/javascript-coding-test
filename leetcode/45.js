/**
 * 45. Jump Game II
 * https://leetcode.com/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const n = nums.length;
    let jumps = 0; // 점프 횟수
    let currFarthest = 0; // 이전 점프 횟수에서 최대로 갈 수 있는 지점
    let farthest = 0; // 곧 다가올 점프에 최대로 갈 수 있는 지점

    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === currFarthest) { // 이전 점프 횟수에서 최대로 갈 수 있는 지점에 도달하면
            jumps++; // 점프하고
            currFarthest = farthest; // 현재까지의 점프로 최대한 갈 수 있는 지점을 갱신
        }
    }

    return jumps;
};
