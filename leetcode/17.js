/**
 * 17. Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const output = [];
    const n = digits.length;

    if (n === 0) {
        return output;
    }

    const arr = [
        ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'],
        ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']
    ];

    function dfs(idx, acc) {
        if (idx === n) {
            output.push(acc);
            return;
        }

        const num = parseInt(digits[idx]);

        for (const c of arr[num - 2]) {
            dfs(idx + 1, acc + c);
        }
    }

    dfs(0, "")

    return output;
};
