/**
 * 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let s = 0, e = numbers.length - 1;

    while (s < e) {
        const sum = numbers[s] + numbers[e];

        if (sum === target) {
            return [s + 1, e + 1];
        } else if (sum < target) {
            s++;
        } else {
            e--;
        }
    }
};
