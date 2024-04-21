/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const sorted_s = s.split("").sort().join("");
    const sorted_t = t.split("").sort().join("");

    return sorted_s === sorted_t;
};
