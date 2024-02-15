/**
 * 5. Longest Palindromic Substring (Two Pointers)
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let max = 1, start = 0;
    const n = s.length;

    const findLongestPalindrome = (left, right) => {
        while (left >= 0 && right < n && s[left] === s[right]) {
            if (right - left + 1 > max) {
                max = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < n; i++) {
        findLongestPalindrome(i, i);
        findLongestPalindrome(i, i + 1);
    }

    return s.substring(start, start + max);
};


/**
 * 5. Longest Palindromic Substring (DP)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const n = s.length;
    const dp = Array.from({length: n}, () => new Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    let max = 0, left = 0, right = 0;
    for (let end = 0; end < n; end++) {
        for (let start = end - 1; start >= 0; start--) {
            if (s[start] === s[end]) {
                if (end - start === 1 || dp[start + 1][end - 1]) {
                    dp[start][end] = true;
                    if (end - start > max) {
                        left = start;
                        right = end;
                        max = end - start;
                    }
                }
            }
        }
    }

    return s.substring(left, right + 1);
};
