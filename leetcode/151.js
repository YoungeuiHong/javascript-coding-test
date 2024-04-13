/**
 * 151. Reverse Words in a String
 * https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const words = s.trim().split(" ").filter(word => word !== "");

    return words.reverse().join(" ");
};
