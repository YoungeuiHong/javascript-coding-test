/**
 * 정수 삼각형 (DP)
 * https://school.programmers.co.kr/learn/courses/30/lessons/43105
 */


// 이 방법은 위에서 아래로 내려가는 방법
function solution1(triangle) {
    const height = triangle.length;
    const dp = Array.from({length: height}, () => []);

    dp[0][0] = triangle[0][0];

    for (let i = 1; i < height; i++) {
        for (let j = 0; j < i + 1; j++) {
            let left = 0;
            let right = 0;
            const curr = triangle[i][j];

            if (j > 0) {
                left = dp[i - 1][j - 1] + curr;
            }
            if (j < i) {
                right = dp[i - 1][j] + curr;
            }

            dp[i][j] = Math.max(left, right);
        }
    }

    return Math.max(...dp[height - 1]);
}

// 이 방법은 아래에서 위로 올라가는 방법. 이게 더 효율적
function solution2(triangle) {
    const height = triangle.length;

    // 삼각형의 맨 아래부터 위로 올라가면서 최대값을 계산
    for (let i = height - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            // 현재 위치의 값에 그 아래의 두 값 중 큰 값을 더하여 업데이트
            triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }

    // 맨 꼭대기에 최댓값이 계산됨
    return triangle[0][0];
}
