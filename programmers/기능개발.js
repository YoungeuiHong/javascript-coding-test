/**
 * 기능개발 (스택/큐)
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586
 */

function solution(progresses, speeds) {
    const num_of_work = progresses.length;
    const work_days = [];
    const answer = [];

    for (let i = 0; i < num_of_work; i++) {
        work_days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }

    let deployed_index = 0;

    while (deployed_index < num_of_work) {
        let deploy_count = 0;

        // 현재 작업이 이전 작업보다 오래 걸리는 동안 반복
        const curr_day = work_days[deployed_index];
        while (deployed_index < num_of_work && work_days[deployed_index] <= curr_day) {
            deploy_count += 1;
            deployed_index += 1;
        }

        answer.push(deploy_count);
    }

    return answer;
}
