/**
 * 785. Is Graph Bipartite? (BFS)
 * https://leetcode.com/problems/is-graph-bipartite/description/
 *
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    const n = graph.length;
    const group = new Array(n).fill(0);
    const queue = [];

    for (let i = 0; i < n; i++) {
        if (group[i]) continue;
        group[i] = 1;
        queue.push(i);
        while (queue.length) {
            const i = queue.shift();
            for (const node of graph[i]) {
                if (!group[node]) {
                    group[node] = group[i] * -1;
                    queue.push(node);
                } else if (group[node] === group[i]) {
                    return false;
                }
            }
        }
    }

    return true;
};


/**
 * 785. Is Graph Bipartite? (DFS)
 * https://leetcode.com/problems/is-graph-bipartite/description/
 *
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    const n = graph.length;
    const group = new Array(n).fill(0);
    const queue = [];

    function dfs(i) {
        for (const node of graph[i]) {
            if (group[node]) {
                if (group[node] === group[i]) {
                    return false;
                }

            } else {
                group[node] = group[i] * -1;
                if (!dfs(node)) {
                    return false;
                }
            }
        }

        return true;
    }

    for (let i = 0; i < n; i++) {
        if (group[i]) continue;
        group[i] = 1;
        if (!dfs(i)) {
            return false;
        }
    }

    return true;
};
