/**
 * Two Sum (Hash Table)
 * https://leetcode.com/problems/two-sum/description/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const length = nums.length;
    const map = new Map();
    const answer = [];

    for (let i = 0; i < length; i++) {
        const left = target - nums[i];
        if (map.has(left)) {
            answer.push(map.get(left));
            answer.push(i);
            break;
        }
        map.set(nums[i], i);
    }

    return answer;
};
