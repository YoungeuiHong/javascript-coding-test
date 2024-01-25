/**
 * 9. Palindrome Number
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    const str = new String(x);
    const length = str.length;

    let start = 0;
    let end = length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true
};
