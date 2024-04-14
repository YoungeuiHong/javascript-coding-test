/**
 * 1492. The kth Factor of n
 * https://leetcode.com/problems/the-kth-factor-of-n/description/
 *
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && --k === 0) {
            return i;
        }
    }

    return -1;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    const factors = [];

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i !== Math.sqrt(n)) {
                factors.push(i);
            }
            if (--k === 0) {
                return i;
            }
        }
    }

    for (let i = factors.length - 1; i >= 0; i--) {
        if (--k === 0) {
            return n / factors[i];
        }
    }

    return -1;
};
