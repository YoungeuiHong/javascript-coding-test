/**
 * 15. 3Sum (Two Pointers)
 * https://leetcode.com/problems/3sum/description/
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    const answer = [];
    const length = nums.length;

    for (let start = 0; start < length - 1; start++) {
        if (start > 0 && nums[start] === nums[start - 1]) {
            continue;
        }

        let mid = start + 1;
        let end = length - 1;

        while (mid < end) {
            const threeSum = nums[start] + nums[mid] + nums[end];
            if (threeSum < 0) {
                mid++;
            } else if (threeSum > 0) {
                end--;
            } else {
                answer.push([nums[start], nums[mid], nums[end]]);
                while (mid < end && nums[mid] === nums[mid + 1]) {
                    mid++;
                }
                while (mid < end && nums[end] === nums[end - 1]) {
                    end--;
                }
                mid++;
                end--;
            }
        }
    }

    return answer;
};
