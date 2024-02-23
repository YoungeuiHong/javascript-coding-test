/**
 * 4. Median of Two Sorted Arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const n1 = nums1.length, n2 = nums2.length;
    const n = n1 + n2;

    function dfs(k, start1, end1, start2, end2) {
        if (start1 > end1) {
            return nums2[k - start1];
        }
        if (start2 > end2) {
            return nums1[k - start2];
        }

        const idx1 = Math.floor((start1 + end1) / 2), idx2 = Math.floor((start2 + end2) / 2);
        const value1 = nums1[idx1], value2 = nums2[idx2];

        if (idx1 + idx2 < k) {
            if (value1 > value2) {
                return dfs(k, start1, end1, idx2 + 1, end2);
            } else {
                return dfs(k, idx1 + 1, end1, start2, end2);
            }
        } else {
            if (value1 > value2) {
                return dfs(k, start1, idx1 - 1, start2, end2);
            } else {
                return dfs(k, start1, end1, start2, idx2 - 1);
            }
        }
    }

    if (n % 2) {
        return dfs(Math.floor(n / 2), 0, n1 - 1, 0, n2 - 1);
    } else {
        return (dfs(Math.floor(n / 2) - 1, 0, n1 - 1, 0, n2 - 1) + dfs(Math.floor(n / 2), 0, n1 - 1, 0, n2 - 1)) / 2;
    }
};
