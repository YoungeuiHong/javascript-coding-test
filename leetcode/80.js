/**
 * 80. Remove Duplicates from Sorted Array II
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let k = 0;

    for (const n of nums) {
        if (k < 2 || n > nums[k - 2]) {
            nums[k++] = n;
        }
    }

    return k;
};
