/**
 * 29. Divide Two Integers
 * https://leetcode.com/problems/divide-two-integers/description/
 *
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const quotient = (dividend - dividend % divisor) / divisor;

    if (quotient > 2 ** 31 - 1) {
        return 2 ** 31 - 1;
    }

    if (quotient < -(2 ** 31)) {
        return -(2 ** 31);
    }

    return quotient;
};
