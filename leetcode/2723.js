/**
 * 2723. Add Two Promises
 * https://leetcode.com/studyplan/30-days-of-javascript/
 *
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    // Promise.all(iterable);
    // 입력 값으로 들어온 프로미스 중 하나라도 거부 당하면 Promise.all()은 즉시 거부합니다.
    // 반면 Promise.allSettled()가 반환하는 프로미스는 이행/거부 여부에 관계없이 주어진 프로미스가 모두 완료될 때까지 기다립니다.
    const [val1, val2] = await Promise.all([promise1, promise2]);

    return val1 + val2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
