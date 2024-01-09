/**
 * 디스크 컨트롤러 (우선순위 큐)
 * https://school.programmers.co.kr/learn/courses/30/lessons/42627
 */

function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]); // 작업이 요청된 시간순으로 정렬

    let totalTime = 0; // 전체 소요 시간
    let currentTime = 0; // 현재 시간
    let index = 0; // 현재 처리 중인 작업의 인덱스
    let heap = []; // 우선순위 큐

    while (index < jobs.length || heap.length > 0) {
        while (index < jobs.length && jobs[index][0] <= currentTime) {
            heap.push(jobs[index++]);
        }

        if (heap.length === 0) {
            currentTime = jobs[index][0];
        } else {
            heap.sort((a, b) => a[1] - b[1]); // 소요 시간이 짧은 순으로 정렬
            const [requestTime, processingTime] = heap.shift();
            totalTime += currentTime - requestTime + processingTime;
            currentTime += processingTime;
        }
    }

    // 평균시간 반환
    return Math.floor(totalTime / jobs.length);
}
