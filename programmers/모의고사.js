/**
 * 모의고사 (완전탐색)
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840
 */

function solution(answers) {
    const count = [0, 0, 0];
    const total = answers.length;
    const res = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    const res_num = [5, 8, 10];

    for (let i = 0; i < total; i++) {
        for (let j = 0; j < 3; j++) {
            const index = (i % res_num[j]);
            if (res[j][index] === answers[i]) {
                count[j] += 1;
            }
        }
    }


    const max = Math.max(...count);

    return count.reduce((acc, element, index) => (
        element === max ? [...acc, index + 1] : acc
    ), []);
}
