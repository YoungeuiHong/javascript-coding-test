/**
 * 282. Expression Add Operators (Backtrack, DFS)
 * https://leetcode.com/problems/expression-add-operators/description/
 *
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
const addOperators = function (num, target) {
    const length = num.length;
    const answer = new Set();

    function backtrack(acc, prev, idx, operation) {
        if (idx === length) {
            if (acc === target) {
                answer.add(operation);
            }
            console.log('----- return => acc: ', acc, ', prev: ', prev, ', idx: ', idx, ', operation: ', operation)
            return;
        }

        for (let i = idx; i < length; i++) {

            if (i !== idx && num[idx] === '0') {
                console.log('***** break => i: ', i, 'idx: ', idx);
                break;
            }

            const curr = Number(num.substring(idx, i + 1));
            console.log('acc: ', acc, ', prev: ', prev, ', idx: ', idx, ', i: ', i,', operation: ', operation, 'curr: ', curr)

            if (idx === 0) {
                backtrack(acc + curr, curr, i + 1, operation + curr);
            } else {
                // 덧셈
                backtrack(acc + curr, curr, i + 1, operation + "+" + curr);
                // 뺄셈
                backtrack(acc - curr, -1 * curr, i + 1, operation + "-" + curr);
                // 곱셈
                backtrack(acc - prev + prev * curr, prev * curr, i + 1, operation + "*" + curr)
            }
        }
    }

    backtrack(0, 0, 0, "");

    return [...answer];
};

// addOperators("105", 6);
addOperators("985", 6);
