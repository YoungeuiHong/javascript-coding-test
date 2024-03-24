/**
 * 125. Valid Palindrome (Two Pointers)
 * https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const phrase = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let start = 0, end = phrase.length - 1;

    while (start < end) {
        if (phrase[start] !== phrase[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};
