/**
 * 가장 큰 수 (정렬)
 * https://school.programmers.co.kr/learn/courses/30/lessons/42746
 */

function solution(numbers) {
    const sortedNumbers = numbers
        .map(num => num.toString())
        .sort((a, b) => (b + a) - (a + b));
    const answer = sortedNumbers.join('');
    return answer[0] === '0' ? '0' : answer;
}
