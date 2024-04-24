/**
 * 69. Sqrt(x)
 * https://leetcode.com/problems/sqrtx/description/
 *
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let i = 1, j = x, ans = 0;

    while (i <= j) {
        const mid = Math.floor((i + j) / 2);

        if (mid * mid <= x) {
            i = mid + 1;
            ans = mid;
        } else {
            j = mid - 1;
        }
    }

    return ans;
};
