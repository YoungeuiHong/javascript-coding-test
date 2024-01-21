/**
 * 3014. Minimum Number of Pushes to Type Word I
 * https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/description/
 */

/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    const length = word.length;
    const fullGroups = Math.floor(length / 8);
    const remaining = length % 8;
    let answer = 0;

    for (let i = 1; i <= fullGroups; i++) {
        answer += 8 * i;
    }

    answer += remaining * (fullGroups + 1);

    return answer;
};
