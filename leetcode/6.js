/**
 * 6. Zigzag Conversion
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
    if (numRows === 1) return s;

    const rows = Array.from({length: numRows}, () => "");
    let rowIdx = 0, step = 1;

    for (const char of s) {
        rows[rowIdx] += char;
        rowIdx += step;
        if (rowIdx === numRows - 1 || rowIdx === 0) step *= -1;
    }

    return rows.join('');
};
