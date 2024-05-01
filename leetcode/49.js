/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();

    for (const str of strs) {
        const sorted = str.split("").sort().join("");

        if (map.has(sorted)) {
            map.get(sorted).push(str);
        } else {
            map.set(sorted, [str]);
        }
    }

    return Array.from(map.values());
};
