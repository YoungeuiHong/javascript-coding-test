/**
 * 여행경로 (DFS)
 * https://school.programmers.co.kr/learn/courses/30/lessons/43164
 */

function solution(tickets) {
    const answer = [];
    const graph = {};

    tickets.sort(); // 알파벳 순으로 정렬하기 위해 미리 정렬

    // 그래프 생성
    for (const ticket of tickets) {
        const [from, to] = ticket;
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    }

    function dfs(node) {
        const destinations = graph[node];
        if (destinations && destinations.length > 0) {
            for (let i = 0; i < destinations.length; i++) {
                const nextNode = destinations.splice(i, 1)[0];
                answer.push(nextNode);
                dfs(nextNode);
                if (answer.length === tickets.length + 1) {
                    return;
                }
                answer.pop();
                destinations.splice(i, 0, nextNode);
            }
        }
    }

    answer.push("ICN"); // 출발지 추가
    dfs("ICN");

    return answer;
}
