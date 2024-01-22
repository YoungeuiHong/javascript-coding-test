/**
 * 200. Number of Islands (Union-Find)
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    function find_parent(parents, a) {
        if (parents[a] !== a) {
            parents[a] = find_parent(parents, parents[a]);
        }

        return parents[a];
    }

    function union_parent(parents, a, b) {
        a = find_parent(parents, a);
        b = find_parent(parents, b);

        if (a < b) {
            parents[b] = a;
        } else {
            parents[a] = b;
        }
    }

    const m = grid.length;
    const n = grid[0].length;

    const parents = Array.from({length: m * n}, (_, index) => index);

    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const index = i * n + j;

            if (grid[i][j] === "0") {
                parents[index] = -1;
            } else {
                // 상하좌우에 섬이 있으면 합치기
                for (let k = 0; k < 4; k++) {
                    const nx = i + dx[k];
                    const ny = j + dy[k];

                    if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === "1") {
                        const n_index = nx * n + ny;
                        union_parent(parents, index, n_index);
                    }
                }
            }
        }
    }

    const islands = new Set();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                const index = i * n + j;
                islands.add(find_parent(parents, index));
            }
        }
    }

    return islands.size;
};
