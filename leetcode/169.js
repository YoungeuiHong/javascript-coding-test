/**
 * 169. Majority Element (Boyer-Moore 투표 알고리즘)
 * https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let candidate = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};
