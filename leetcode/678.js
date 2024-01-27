/**
 * 678. Valid Parenthesis String
 * https://leetcode.com/problems/valid-parenthesis-string/description/
 *
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let open_max = 0;
    let open_min = 0;

    for (const c of s) {
        if (c === ")") {
            open_max--;
            open_min--;
        } else if (c === "(") {
            open_max++;
            open_min++;
        } else if (c === "*") {
            open_max++;
            open_min--;
        }
        if (open_max < 0) {
            return false;
        }

        open_min = Math.max(open_min, 0);
    }

    return open_min === 0;
};
