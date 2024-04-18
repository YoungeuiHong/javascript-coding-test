/**
 * 2627. Debounce
 * https://leetcode.com/problems/debounce/description/?envType=study-plan-v2&envId=30-days-of-javascript
 *
 * 디바운스는 짧은 시간 간격으로 이벤트가 연속해서 발생하면 이벤트 핸들러를 호출하지 않다가
 * 일정 시간이 경과한 이후에 이벤트 핸들러가 한 번만 호출되도록 한다.
 *
 * 디바운스는 resize 이벤트 처리나 input 요소에 입력된 값으로 ajax 요청을 하는 자동완성 UI 구현, 버튼 중복 클릭 방지 처리 등에 사용된다.
 *
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timerId;

    // 디바운스는 함수는 timerId를 기억하는 클로저를 반환한다.
    return function (...args) {
        // 딜레이 t가 경과하기 전에 이벤트가 발생하면 이전 타이머를 취소하고 새로운 타이머를 설정한다.
        // 따라서 딜레이보다 짧은 간격으로 이벤트가 발생하면 콜백함수 fn은 호출되지 않는다.
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(fn, t, ...args);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
