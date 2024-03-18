/**
 * 체육법 (탐욕법, Greedy)
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862
 *
 * @param n
 * @param lost
 * @param reserve
 * @returns {number}
 */
function solution(n, lost, reserve) {
    const students = new Array(n).fill(1);

    lost.forEach((num) => {
        students[num - 1]--;
    });

    reserve.forEach((num) => {
        students[num - 1]++;
    });

    students.forEach((num, idx) => {
        if (num === 0) {
            if (students[idx - 1] > 1) {
                students[idx - 1]--;
                students[idx]++;
            } else if (students[idx + 1] > 1) {
                students[idx + 1]--;
                students[idx]++;
            }
        }
    })

    return students.filter((num) => num > 0).length;
}
