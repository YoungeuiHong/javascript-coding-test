/**
 * 10. Regular Expression Matching (DP)
 * https://leetcode.com/problems/regular-expression-matching/description/
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    // .은 문자 한 개. 어떤 문자든 가능
    // *은 선행 문자의 0번 이상의 반복
    // 이 문제를 DP를 사용하지 않고 풀기 어려운 이유는
    // *는 선행문자의 0번 이상의 반복인데 몇 번 반복이 될지 모르기 때문이다.
    const sLen = s.length;
    const pLen = p.length;

    // dp[i][j]: s의 i번째 문자, p의 j번째 패턴까지 고려했을 때 문자가 일치하는지
    const dp = Array.from({length: sLen + 1}, () => new Array(pLen + 1).fill(false));

    // empty string = empty pattern
    dp[0][0] = true;

    // ex. s = aab, p = c*a*b라면 true가 나와야 한다. *는 선행문자가 한 번도 안 나와도 되기 때문이다.
    // 따라서 #을 임의의 문자라 한다면 #*#*#*#*는 empty string ""와 부합한다.
    // *는 짝수 번째에 위치해야 한다.
    for (let j = 2; j < pLen + 1; j += 2) {
        if (p[j - 1] === "*" && dp[0][j - 2]) {
            dp[0][j] = true;
        }
    }

    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    // dp[i][j - 2] : * 앞의 문자가 0번 사용된 경우
                    // dp[i - 1][j - 2] : * 앞의 문자가 한 번만 사용된 경우
                    // dp[i - 1][j] : * 앞의 문자가 여러 번 사용된 경우
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }

    return dp[sLen][pLen];
};
