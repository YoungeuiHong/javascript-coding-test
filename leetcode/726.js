/**
 * 726. Number of Atoms (Stack)
 * https://leetcode.com/problems/number-of-atoms/
 *
 * @param {string} formula
 * @return {string}
 */
const countOfAtoms = (formula) => {
    const map = new Map();
    const stack = [...formula];
    const queue = [];
    let atom = "";
    let count = "";
    let pow = 1;

    while (stack.length) {
        const popped = stack.pop();

        if (isNaN(popped)) { // 문자라면
            if (popped === ")") {
                pow *= Number(count === "" ? 1 : count);
                queue.push(Number(count === "" ? 1 : count));
                count = "";
            } else if (popped === "(") {
                const back = queue.pop() ?? 1;
                pow /= back;
            } else {
                if (popped === popped.toUpperCase()) { // 대문자라면 map에 넣기
                    const parsedCount = count === "" ? 1 : Number(count);
                    const poweredCount = parsedCount * pow;
                    atom = popped + atom;
                    map.set(atom, map.has(atom) ? map.get(atom) + poweredCount : poweredCount);
                    atom = "";
                    count = "";
                } else { // 소문자라면 atom에 붙이기
                    atom = popped + atom;
                }
            }
        } else { // 숫자라면
            count = popped + count;
        }
    }

    const sortedKeys = Array.from(map.keys()).sort();
    let output = "";

    sortedKeys.forEach((key) => {
        output += key;
        if (map.get(key) !== 1) {
            output += map.get(key);
        }
    });

    return output;
};
