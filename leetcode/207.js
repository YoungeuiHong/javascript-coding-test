/**
 * 207. Course Schedule
 * https://leetcode.com/problems/course-schedule/description/
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const graph = Array.from({length: numCourses}, () => new Array());
    const indegree = new Array(numCourses).fill(0);
    const sorted = [];
    const queue = [];

    for (const [after, before] of prerequisites) {
        graph[before].push(after);
        indegree[after]++;
    }

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }


    while (queue.length) {
        const popped = queue.shift();
        sorted.push(popped);

        for (const node of graph[popped]) {
            indegree[node]--;
            if (indegree[node] === 0) {
                queue.push(node);
            }
        }
    }

    return numCourses === sorted.length;
};
