/**
 * 올바른 괄호 (스택/큐)
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */

function solution(s) {
    const stack = [];

    for (const c of s) {
        if (c === "(") {
            stack.push(c);
        } else {
            // 스택이 비어있을 때 ')'가 나온 경우
            if (stack.length === 0) {
                return false;
            }
            // 스택에서 '(' 제거
            stack.pop();
        }
    }

    // 스택이 비어있으면 모든 괄호가 쌍을 이루고 있음
    return stack.length === 0;
}
