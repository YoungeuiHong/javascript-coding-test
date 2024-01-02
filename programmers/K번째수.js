/**
 * K번째수
 * 정렬
 * https://school.programmers.co.kr/learn/courses/30/lessons/42748
 */

function solution(array, commands) {
    const answer = [];

    for (const cmd of commands) {
        const [i, j, k] = cmd;
        const slicedArray = array.slice(i - 1, j).sort((a, b) => a - b);
        const kthElement = slicedArray[k - 1];
        answer.push(kthElement);
    }

    return answer;
}

