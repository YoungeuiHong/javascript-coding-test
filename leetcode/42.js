/**
 * 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let answer = 0;
    const stack = [];
    let curr_height = 0;

    for (const h of height) {
        if (stack.length === 0 || stack[0] > h) {
            stack.push(h);
        } else {
            curr_height = Math.min(stack[0], h);
            while (stack.length) {
                const popped = stack.pop();
                answer += (curr_height - popped);
            }
            stack.push(h)
        }
    }

    let right = stack.pop();
    while (stack.length) {
        while (stack[stack.length - 1] < right) {
            answer += (right - stack.pop())
        }
        right = stack.pop();
    }

    return answer;
};
