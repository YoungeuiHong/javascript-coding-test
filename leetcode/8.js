/**
 * 8. String to Integer (atoi)
 * https://leetcode.com/problems/string-to-integer-atoi/description/
 *
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();
    if (s.length === 0) {
        return 0;
    }
    let num = 0;
    let i = 0;
    let sign = 1;
    if (s[i] === '+') {
        i++;
    } else if (s[i] === '-') {
        i++;
        sign = -1;
    }
    while (i < s.length && /^[0-9]$/.test(s[i])) {
        num = num * 10 + parseInt(s[i]);
        i++;
    }
    num *= sign;
    num = Math.max(Math.min(num, Math.pow(2, 31) - 1), -Math.pow(2, 31));
    return num;
}
