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


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const isMinus = x < 0;
    let reversed = 0, absolute = Math.abs(x);

    while (absolute > 0) {
        reversed = reversed * 10 + absolute % 10;
        absolute = Math.floor(absolute / 10);

        if (reversed < -1 * 2 ** 31 || reversed >= 2 ** 31) {
            return 0;
        }
    }

    return isMinus ? -1 * reversed : reversed;
};
