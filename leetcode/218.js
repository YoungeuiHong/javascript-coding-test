/**
 * 218. The Skyline Problem
 * https://leetcode.com/problems/the-skyline-problem/description/
 *
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
    const data = [];

    for (const [left, right, height] of buildings) {
        data.push([left, height], [right, -height]);
    }

    // x 좌표를 기준으로 오름차순 정렬한 다음, 높이를 기준으로 내림차순 정렬
    data.sort(([x1, h1], [x2, h2]) => x1 - x2 || h2 - h1);

    // 오름차순으로 높이 데이터 넣기
    const heights = [];

    const addHeight = (heights, h) => {
        let left = -1;
        let right = heights.length;

        while (left + 1 < right) {
            const mid = Math.floor((left + right) / 2);

            if (heights[mid] >= h) {
                right = mid;
            } else {
                left = mid;
            }
        }

        heights.splice(right, 0, h);
    }

    const removeHeight = (heights, h) => {
        let left = -1;
        let right = heights.length;

        while (left + 1 < right) {
            const mid = Math.floor((left + right) / 2);

            if (heights[mid] >= h) {
                right = mid;
            } else {
                left = mid;
            }
        }

        heights.splice(right, 1);
    }

    const skyline = [];

    let previousHeight = 0;

    for (const [x, h] of data) {
        if (h > 0) { // 왼쪽 좌표라면 추가
            addHeight(heights, h);
        } else { // 오른쪽 좌표라면 삭제
            removeHeight(heights, -h);
        }

        // 좌표를 추가 또는 삭제한 다음 현재 높이 계산
        // 현재 높이는 heights 배열에 있는 높이 중 가장 높은 좌표
        let currentHeight = heights[heights.length - 1] || 0;

        // 만약 높이가 달라졌다면 스카이라인에 추가
        if (currentHeight !== previousHeight) {
            skyline.push([x, currentHeight]);
            previousHeight = currentHeight;
        }
    }

    return skyline;
};
