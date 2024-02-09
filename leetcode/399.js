/**
 * 399. Evaluate Division (Graph, 간선, 가중치)
 * https://leetcode.com/problems/evaluate-division/description/
 *
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    const graph = buildGraph(equations, values);
    const results = [];

    for (const [from, to] of queries) {
        results.push(dfs(from, to, new Set(), graph));
    }

    return results;
};

const buildGraph = (equations, values) => {
    const graph = new Map();

    for (let i = 0; i < equations.length; i++) {
        const [x, y] = equations[i];
        const value = values[i];

        if (!graph.has(x)) graph.set(x, new Map());
        if (!graph.has(y)) graph.set(y, new Map());

        graph.get(x).set(y, value);
        graph.get(y).set(x, 1 / value);
    }

    return graph;
};

const dfs = (current, target, visited, graph) => {
    if (!graph.has(current) || !graph.has(target)) return -1;
    if (current === target) return 1;

    visited.add(current);
    const neighbors = graph.get(current);

    for (const [node, weight] of neighbors) {
        if (visited.has(node)) continue;
        const acc = dfs(node, target, visited, graph);
        if (acc !== -1) return acc * weight;
    }

    return -1;
};
