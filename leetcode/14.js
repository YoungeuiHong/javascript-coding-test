/**
 * 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let common = strs[0];

    for (const str of strs) {
        while (!str.startsWith(common)) {
            common = common.slice(0, -1);
        }
    }

    return common;
};
