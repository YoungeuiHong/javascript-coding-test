/**
 * 1750. Minimum Length of String After Deleting Similar Ends
 * https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description/?envType=daily-question&envId=2024-03-05
 *
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    let start = 0;
    let end = s.length - 1;

    while (s[start] === s[end] && start < end) {
        const common = s[start];
        while (s[start] === common) {
            start++;
        }
        while (s[end] === common) {
            end--;
        }
    }

    return Math.max(0, end - start + 1);
};
