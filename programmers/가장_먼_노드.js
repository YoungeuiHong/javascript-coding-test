/**
 * 가장 먼 노드 (BFS)
 * https://school.programmers.co.kr/learn/courses/30/lessons/49189
 */
function solution(n, edges) {
    const graph = createGraph(n, edges);
    const distances = bfs(graph, n);

    const maxDistance = Math.max(...distances);
    return distances.filter(d => d === maxDistance).length;
}

function createGraph(n, edges) {
    const graph = Array.from({length: n}, () => []);
    for (const [start, end] of edges) {
        graph[start - 1].push(end - 1);
        graph[end - 1].push(start - 1);
    }
    return graph;
}

function bfs(graph, n) {
    const distances = Array.from({length: n}, () => -1);
    const queue = [0];

    distances[0] = 0;

    while (queue.length) {
        const current = queue.shift();

        for (const neighbor of graph[current]) {
            if (distances[neighbor] === -1) {
                queue.push(neighbor);
                distances[neighbor] = distances[current] + 1;
            }
        }
    }

    return distances;
}
