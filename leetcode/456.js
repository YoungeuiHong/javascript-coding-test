/**
 * 456. 132 pattern
 * https://leetcode.com/problems/132-pattern/description/
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    const stack = [];
    // 132 패턴에서 2의 위치에 들어가는 숫자
    let two = -Math.pow(10, 9) - 1
    const n = nums.length;

    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < two) {
            // 132 패턴에서 1의 위치에 들어갈 숫자로 nums[i]를 찾은 것
            return true;
        }

        // 스택 끝의 값이 현재 nums[i]보다 작을 때까지
        // 계속 스택에서 pop하고, pop된 값을 two 값으로 함
        // => 그러면 two는 무조건 스택에 있는 값보다 작은 값이 된다.
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            two = stack.pop();
        }

        // stack에 있는 값은 132 패턴에서 3 위치에 들어갈 수 있는 숫자들
        stack.push(nums[i]);
    }

    return false;
};
