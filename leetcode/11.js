/**
 * 11. Container With Most Water (Two Pointers)
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max_water = 0;
    let left = 0, right = height.length - 1;

    while (left < right) {
        const w = right - left;
        const h = Math.min(height[left], height[right]);
        max_water = Math.max(max_water, w * h);
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return max_water;
};
