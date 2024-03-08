/**
 * 12. Integer to Roman
 * https://leetcode.com/problems/integer-to-roman/description/
 *
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    let hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let thousands = ["", "M", "MM", "MMM"];

    return thousands[Math.floor(num / 1000)] + hundreds[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[Math.floor(num % 10)]
};
