/**
 * 16. 3Sum Closest
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let closest = nums[0] + nums[1] + nums[2];
    let first = 0;
    while (first < nums.length - 2) {
        let second = first + 1, third = nums.length - 1;
        while (second < third) {
            const sum = nums[first] + nums[second] + nums[third];
            if (sum === target) {
                return target;
            } else if (sum < target) {
                second++;
            } else if (sum > target) {
                third--;
            }

            if (Math.abs(closest - target) > Math.abs(sum - target)) {
                closest = sum;
            }
        }
        first++;
    }

    return closest;
};
