/**
 * 367. Valid Perfect Square
 * https://leetcode.com/problems/valid-perfect-square/
 *
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 0, right = num;

    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2)
        if (mid ** 2 >= num) {
            right = mid
        } else {
            left = mid
        }
    }

    return right ** 2 === num
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    const x = num ** 0.5;

    return x % 1 === 0;
};
