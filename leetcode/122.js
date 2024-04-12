/**
 * 122. Best Time to Buy and Sell Stock II
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length;
    // 감소하고 있는 추세에서 가격이 가장 낮은 날이 사는 날
    // 증가하고 있는 추세에서 가격이 가장 높은 날이 사는 날

    let i = 0, buy, sell, profit = 0;
    while (i < n) {
        buy = prices[i];
        while (i < n && prices[i + 1] < buy) {
            buy = prices[++i];
        }

        if (i === n - 1) {
            break;
        }

        i++;
        sell = prices[i];

        while (i < n && prices[i + 1] > sell) {
            sell = prices[++i];
        }

        profit += sell - buy;
    }

    return profit;
};


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        // 주식 가격이 상승하는 경우에만 이익을 계산하여 누적
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }

    return profit;
};

