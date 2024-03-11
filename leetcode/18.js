/**
 * 18. 4Sum
 * https://leetcode.com/problems/4sum/description/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const answer = [];
    nums.sort((a, b) => a - b);
    const n = nums.length;

    for (let a = 0; a < n - 3; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) continue; // 중복 방지
        for (let b = a + 1; b < n - 2; b++) {
            if (b > a + 1 && nums[b] === nums[b - 1]) continue; // 중복 방지
            let c = b + 1, d = n - 1;
            while (c < d) {
                const sum = nums[a] + nums[b] + nums[c] + nums[d];
                if (sum === target) {
                    answer.push([nums[a], nums[b], nums[c], nums[d]]);
                    // 중복 방지
                    const curr_c = nums[c], curr_d = nums[d];
                    while (nums[c] === curr_c) {
                        c++;
                    }
                    while (nums[d] === curr_d) {
                        d--;
                    }
                } else if (sum < target) {
                    c++;
                } else if (sum > target) {
                    d--;
                }
            }
        }
    }


    return answer;
};
