/**
 * 56. Merge Intervals
 * https://leetcode.com/problems/merge-intervals/
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const answer = [];
    const length = intervals.length;

    if (length === 1) {
        return intervals;
    }

    intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    })

    for (const interval of intervals) {
        const lastElem = answer[answer.length - 1];
        if (!answer.length || interval[0] > lastElem[1]) { // 배열이 비었거나, 안 겹치는 경우
            answer.push(interval);
        } else { // 겹치는 경우
            answer[answer.length - 1][1] = Math.max(lastElem[1], interval[1]);
        }
    }

    return answer;
};
