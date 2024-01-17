/**
 * N으로 표현 (DP)
 * https://school.programmers.co.kr/learn/courses/30/lessons/42895
 */

function solution(N, number) {
    const dp = Array.from({length: 9}, () => new Set());

    for (let i = 1; i <= 8; i++) {
        dp[i].add('1'.repeat(i) * N);

        for (let j = 1; j < i; j++) {
            for (const arg1 of dp[j]) {
                for (const arg2 of dp[i - j]) {
                    dp[i].add(arg1 + arg2);
                    dp[i].add(arg1 - arg2);
                    dp[i].add(arg1 * arg2);
                    if (arg2 !== 0) {
                        dp[i].add(Math.floor(arg1 / arg2));
                    }
                }
            }
        }

        if (dp[i].has(number)) {
            return i;
        }
    }

    return -1;
}
