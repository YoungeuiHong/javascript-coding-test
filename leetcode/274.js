/**
 * 274. H-Index (Counting Sort)
 * https://leetcode.com/problems/h-index/
 *
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    const n = citations.length;
    // bucket[i] = 인용횟수가 i인 논문의 개수
    const bucket = new Array(n + 1).fill(0);

    for (const c of citations) {
        if (c >= n) { //
            bucket[n] += 1;
        } else {
            bucket[c] += 1;
        }
    }

    // 가장 처음으로 논문의 개수가 현재 인덱스보다 크거나 같아지는 순간에 그 인덱스를 리턴
    let acc = 0;
    for (let i = n; i >= 0; i--) {
        acc += bucket[i];

        if (acc >= i) {
            return i;
        }
    }

    return 0;
};
