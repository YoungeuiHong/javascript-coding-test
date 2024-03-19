/**
 * 433. Minimum Genetic Mutation (Graph BFS)
 * https://leetcode.com/problems/minimum-genetic-mutation/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
    if (startGene === endGene) {
        return 0;
    }

    function countDiff(a, b) {
        let diff = 0;
        for (let i = 0; i < 8; i++) {
            if (a[i] !== b[i]) {
                diff++;
            }
        }
        return diff;
    }

    const queue = [];
    const visited = new Array(bank.length).fill(false);
    let mutation = 1;

    for (let i = 0; i < bank.length; i++) {
        const gene = bank[i];
        if (countDiff(startGene, gene) === 1) {
            queue.push(gene);
            visited[i] = true;
        }
    }

    while (queue.length) {
        const currLen = queue.length;
        for (let j = 0; j < currLen; j++) {
            const popped = queue.shift();

            if (popped === endGene) {
                return mutation;
            }

            for (let i = 0; i < bank.length; i++) {
                if (!visited[i]) {
                    const gene = bank[i];
                    if (countDiff(popped, gene) === 1) {
                        queue.push(gene);
                        visited[i] = true;
                    }
                }
            }
        }
        mutation++;
    }

    return -1;
};
