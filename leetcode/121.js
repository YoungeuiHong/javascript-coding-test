/**
 * 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    /**
     * Kadane`s Algorithm
     * 배열에서 가장 큰 연속하는 하위 배열의 합을 찾는 알고리즘
     * 배열을 한 번만 훑으면서 각 단계에서 현재 요소를 끝으로 하는 가장 큰 하위 배열의 합을 업데이트함
     * 현재 요소를 끝으로 하는 가장 큰 하위 배열의 합이 음수가 되면 0으로 업데이트를 함
     */
    let currMax = 0, maxSoFar = 0;
    const n = prices.length;

    for (let i = 1; i < n; i++) {
        // profit이므로 prices[i]를 더하는 것이 아니라, prices[i] - prices[i - 1]을 더함
        currMax = Math.max(0, currMax += prices[i] - prices[i - 1]);
        maxSoFar = Math.max(currMax, maxSoFar);
    }

    return maxSoFar;
};
