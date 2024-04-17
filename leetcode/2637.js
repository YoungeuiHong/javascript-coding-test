/**
 * 2637. Promise Time Limit
 * https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript
 *
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

    return async function (...args) {
        const requestedFnPromise = fn(...args);

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);
        });

        // Promise.race() 메소드는 Promise 객체를 반환합니다.
        // 이 프로미스 객체는 iterable 안에 있는 프로미스 중에 가장 먼저 완료된 것의 결과값으로 그대로 이행하거나 거부합니다.
        return Promise.race([requestedFnPromise, timeoutPromise]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
