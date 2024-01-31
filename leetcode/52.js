/**
 * 52. N-Queens II
 * https://leetcode.com/problems/n-queens-ii/description/
 *
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let answer = 0;
    const cols = new Array(n).fill(false);
    const diags = new Array(2 * n - 1).fill(false);
    const antiDiags = new Array(2 * n - 1).fill(false);

    function backtrack(row) {
        if (row === n) {
            answer++;
            return;
        }

        for (let col = 0; col < n; col++) {
            const diagIdx = row + col;
            const antiDiagIdx = n + row - col - 1;

            if (!cols[col] && !diags[diagIdx] && !antiDiags[antiDiagIdx]) {
                cols[col] = true;
                diags[diagIdx] = true;
                antiDiags[antiDiagIdx] = true;
                backtrack(row + 1);
                cols[col] = false;
                diags[diagIdx] = false;
                antiDiags[antiDiagIdx] = false;
            }
        }
    }

    backtrack(0);

    return answer;
};
