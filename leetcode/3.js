/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const map = new Map();
    const length = s.length;

    let startIdx = 0;
    let endIdx = 0;
    let longest = 0;

    while (endIdx < length) {
        const ch = s[endIdx];
        if (map.has(ch) && map.get(ch) >= startIdx) { // 중복이 있는 경우
            const repeatIdx = map.get(ch);
            longest = Math.max(longest, endIdx - startIdx)
            map.set(ch, endIdx++);
            startIdx = repeatIdx + 1;

        } else {
            map.set(ch, endIdx++);
        }
    }

    return Math.max(longest, endIdx - startIdx);
};
