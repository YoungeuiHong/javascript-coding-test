/**
 * 66. Plus One
 * https://leetcode.com/problems/plus-one/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // digits 배열의 끝에서부터 시작하여 탐색
    for (let i = digits.length - 1; i >= 0; i--) {
        // 현재 자릿수가 9라면
        if (digits[i] === 9) {
            // 현재 자릿수를 0으로 변경
            digits[i] = 0;
        } else {
            // 9가 아니라면 1을 더하고 반복문 종료
            digits[i]++;
            return digits;
        }
    }

    // 반복문을 빠져나왔다면 모든 자릿수가 9였음을 의미하므로,
    // 맨 앞에 1을 추가해주고 나머지는 모두 0으로 초기화
    return [1, ...digits];
};
