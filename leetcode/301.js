/**
 * 301. Remove Invalid Parentheses
 * https://leetcode.com/problems/remove-invalid-parentheses/description/
 *
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    const n = s.length;
    let set = new Set();
    let max = 0;

    function dfs(acc, idx, openCount, closeCount) {
        if (idx === n) {
            if (openCount === closeCount) {
                if (acc.length > max) {
                    set.clear();
                    max = acc.length;
                }
                if (acc.length === max) {
                    set.add(acc);
                }
            }
            return;
        }

        if (s[idx] === "(") {
            dfs(acc + s[idx], idx + 1, openCount + 1, closeCount);
            dfs(acc, idx + 1, openCount, closeCount);
        } else if (s[idx] === ")") {
            if (openCount > closeCount) {
                dfs(acc + s[idx], idx + 1, openCount, closeCount + 1);
            }
            dfs(acc, idx + 1, openCount, closeCount);
        } else {
            dfs(acc + s[idx], idx + 1, openCount, closeCount);
        }
    }

    dfs("", 0, 0, 0);

    return Array.from(set);
};
