/**
 * 34. Find First and Last Position of Element in Sorted Array
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function find_first_occurence(nums, target) {
    let start = -1;
    let end = nums.length;

    // 가장 처음으로 target이 되는 인덱스를 찾기
    while (start + 1 < end) {
        const mid = Math.ceil((start + end) / 2);

        if (nums[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }

    return end;
}

function find_last_occurence(nums, target) {
    let start = -1;
    let end = nums.length;

    // 가장 마지막으로 target이 되는 인덱스를 찾기
    while (start + 1 < end) {
        const mid = Math.ceil((start + end) / 2);

        if (nums[mid] <= target) {
            start = mid;
        } else {
            end = mid;
        }
    }

    return start;
}

var searchRange = function (nums, target) {
    if (!nums.length || !nums.includes(target)) {
        return [-1, -1];
    }

    const first = find_first_occurence(nums, target);
    const last = find_last_occurence(nums, target);

    return [first, last];
};
