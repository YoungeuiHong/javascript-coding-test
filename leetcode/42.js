/**
 * 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
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

// 아래가 더 간단한 코드
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let answer = 0;

    let s = 0;
    let e = height.length - 1;

    let left = -1;
    let right = -1;

    while (s < e) {
        left = Math.max(left, height[s]);
        right = Math.max(right, height[e]);
        answer += (left < right) ? left - height[s++] : right - height[e--];
    }

    return answer;
};
