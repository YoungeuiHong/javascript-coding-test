/**
 * 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let oneIdx = m - 1;
    let twoIdx = n - 1;
    let sumIdx = m + n - 1;

    while (oneIdx >= 0 && twoIdx >= 0) {
        if (nums1[oneIdx] > nums2[twoIdx]) {
            nums1[sumIdx--] = nums1[oneIdx--];
        } else {
            nums1[sumIdx--] = nums2[twoIdx--];
        }
    }

    while (twoIdx >= 0) {
        nums1[sumIdx--] = nums2[twoIdx--];
    }
}
