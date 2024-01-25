/**
 * 7. Reverse Integer
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const reversed = x.toString().split("").reverse().join('');
    const reversed_num = parseInt(reversed);
    const limit = Math.pow(2, 31);
    if (reversed_num >= limit || reversed_num < -limit) {
        return 0;
    }

    return x > 0 ? reversed_num : -reversed_num;
};
