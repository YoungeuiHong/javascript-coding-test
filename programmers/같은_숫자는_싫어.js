/**
 * 같은 숫자는 싫어 (스택/큐)
 * https://school.programmers.co.kr/learn/courses/30/lessons/12906
 */

function solution(arr) {
    return arr.reduce((answer, number) => {
        if (answer.length === 0 || answer[answer.length - 1] !== number) {
            answer.push(number);
        }
        return answer;
    }, []);
}
