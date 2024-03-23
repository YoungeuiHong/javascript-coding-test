/**
 * 58. Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length;
};
