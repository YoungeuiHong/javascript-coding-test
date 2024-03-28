/**
 * 228. Summary Ranges
 * https://leetcode.com/problems/summary-ranges/description/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const result = [];
    let left = nums[0];

    for (let i = 1; i <= nums.length; i++) {
        if ((nums[i - 1] + 1) !== nums[i]) {
            left === nums[i - 1] ? result.push(`${left}`) : result.push(`${left}->${nums[i - 1]}`);
            left = nums[i];
        }

    }
    return result;
};
