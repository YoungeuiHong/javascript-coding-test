/**
 * 폰켓몬 (해시)
 * https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript
 */

function solution(nums) {
    const nums_set = new Set(nums);
    const half = Math.floor(nums.length / 2);
    return Math.min(nums_set.size, half);
}
