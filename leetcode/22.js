/**
 * 22. Generate Parentheses
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const answer = [];

    function backtrack(s, left, right) {
        if (s.length === n * 2) {
            answer.push(s)
            return;
        }

        if (left < n) {
            backtrack(s + "(", left + 1, right);
        }
        if (right < left) {
            backtrack(s + ")", left, right + 1);
        }
    }

    backtrack('', 0, 0);

    return answer;
};
