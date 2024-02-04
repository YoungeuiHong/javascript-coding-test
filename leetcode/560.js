/**
 * 560. Subarray Sum Equals K
 * https://leetcode.com/problems/subarray-sum-equals-k/description/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const map = new Map([[0, 1]]); // 누적 합과 그 빈도를 저장하는 Map을 생성

    let answer = 0;
    let acc = 0;

    for (const num of nums) {
        acc += num;

        // sum(i, j) = sum(0, j) - sum(0, i) 이므로
        // 이전에 등장한 acc - k의 빈도를 더함
        if (map.has(acc - k)) {
            answer += map.get(acc - k);
        }

        // 현재 누적 합을 Map에 추가
        map.set(acc, (map.get(acc) || 0) + 1);
    }

    return answer;
};
