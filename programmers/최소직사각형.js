/**
 * 최소 직사각형 (완전탐색)
 * https://school.programmers.co.kr/learn/courses/30/lessons/86491
 */

function solution(sizes) {
    const width = Math.max(...sizes.flat());
    const height = Math.max(...sizes.map(size => Math.min(...size)));

    return width * height;
}
