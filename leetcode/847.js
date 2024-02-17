/**
 * 847. Shortest Path Visiting All Nodes
 * https://leetcode.com/problems/shortest-path-visiting-all-nodes/
 *
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function (graph) {
    const n = graph.length;
    const queue = [];

    for (let i = 0; i < n; i++) {
        queue.push([(1 << i), [i]]);
    }

    const dp = Array.from({length: n}, () => []);

    while (queue.length) {
        const [visited, path] = queue.shift();

        if (visitAllNodes(n, visited)) {
            return path.length - 1;
        }

        for (const neighbor of graph[path[path.length - 1]]) {
            const nextMask = visited | (1 << neighbor);
            if (dp[neighbor][nextMask] === undefined) {
                dp[neighbor][nextMask] = true;
                queue.push([nextMask, [...path, neighbor]]);
            }
        }
    }
};

const visitAllNodes = (n, visited) => {
    return visited === (1 << n) - 1;
}
