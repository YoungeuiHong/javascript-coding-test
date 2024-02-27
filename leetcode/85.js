/**
 * 85. Maximal Rectangle (DP)
 * https://leetcode.com/problems/maximal-rectangle/
 *
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const columnLength = matrix[0].length;
    const rowLength = matrix.length;

    const heights = new Array(columnLength).fill(0);
    let maxArea = 0;

    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < columnLength; col++) {
            // 현재 row번째 행을 마지막 행으로 했을 때 col번째 컬럼에서 최대로 가능한 높이
            heights[col] = matrix[row][col] === '1' ? heights[col] + 1 : 0;
        }
        // 각각의 컬럼에서 최대로 가능한 높이의 배열인 heights를 바탕으로 이번 행에서 최대로 넓은 직사각형의 면적을 계산
        maxArea = Math.max(maxArea, calculateMaxRectangleArea(heights));
    }

    return maxArea;
};

function calculateMaxRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        // i가 heights.length일 때 currentHeight를 0으로 하는 이유는
        // 마지막 컬럼까지 직사각형이 유지됐기 때문에 stack에서 pop할 수 있도록 가장 작은 값인 0을 부여해주는 것이다.
        const currentHeight = i < heights.length ? heights[i] : 0;
        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            // 현재 컬럼에서 가능한 최대 높이가 이전 컬럼의 최대 높이보다 낮다면 스택에서 값을 꺼냄
            // => 스택에서 꺼내는 이유는 이전 컬럼의 높이로는 더 이상 직사각형이 만들어질 수 없기 때문이다.
            const prevColumnIdx = stack.pop();
            // 만약 스택이 비어있다면, 스택에는 높이를 기준으로 내림차순으로 저장되므로 이전 컬럼의 인덱스가 모두 현재 높이보다 높다는 것이다. 따라서 너비를 i로 한다.
            // 그렇지 않다면 (현재 컬럼 인덱스 - pop된 컬럼보다 높이가 낮거나 같은 컬럼의 인덱스  - 1)
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, heights[prevColumnIdx] * width);
        }
        // 이전 컬럼의 높이보다 현재 컬럼의 높이가 같거나 높다면 스택에 푸시한다.
        stack.push(i);
    }

    return maxArea;
}
