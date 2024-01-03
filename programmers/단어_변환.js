/**
 * 단어 변환 (DFS / BFS)
 * https://school.programmers.co.kr/learn/courses/30/lessons/43163
 */

function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }

    const len = words.length;
    const visited = new Array(len).fill(0);

    const queue = []
    queue.push([begin, 0]);

    while (queue.length) {
        const [popped, count] = queue.shift();

        if (popped === target) {
            return count;
        }

        for (let i = 0; i < len; i++) {
            if (isOneWordDifferent(popped, words[i]) && !visited[i]) {
                queue.push([words[i], count + 1]);
                visited[i] = 1;
            }
        }
    }

    return 0;
}

function isOneWordDifferent(a, b) {
    let diff = 0;
    const len = a.length;

    for (let i = 0; i < len && diff <= 1; i++) {
        if (a[i] !== b[i]) {
            diff++;
        }
    }

    return diff === 1;
}
