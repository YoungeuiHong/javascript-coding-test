/**
 * 210. Course Schedule II
 * https://leetcode.com/problems/course-schedule-ii/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const order = [];
    const indegree = new Array(numCourses).fill(0);
    const graph = Array.from({length: numCourses}, () => []);

    for (const [after, before] of prerequisites) {
        indegree[after]++;
        graph[before].push(after);
    }

    const queue = [];

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length) {
        const current = queue.shift();
        order.push(current);

        for (const after of graph[current]) {
            indegree[after]--;
            if (indegree[after] === 0) {
                queue.push(after);
            }
        }
    }

    return order.length === numCourses ? order : [];
};
