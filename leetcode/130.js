/**
 * 130. Surrounded Regions (Union Find)
 * https://leetcode.com/problems/surrounded-regions/
 */
class UnionFind {
    constructor(size) {
        this.parent = new Array(size).fill(-1);
    }

    find(x) {
        if (this.parent[x] === -1) return x;
        return this.parent[x] = this.find(this.parent[x]);
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX !== rootY) this.parent[rootX] = rootY;
    }
}

const solve = function (board) {
    if (!board || !board.length || !board[0].length) return;

    const m = board.length;
    const n = board[0].length;
    const uf = new UnionFind(m * n + 1);

    const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];

    const virtualNode = m * n;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'X') continue;

            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                uf.union(i * n + j, virtualNode);
                continue;
            }

            for (const [dx, dy] of directions) {
                const ni = i + dx;
                const nj = j + dy;
                if (ni >= 0 && ni < m && nj >= 0 && nj < n && board[ni][nj] === 'O') {
                    uf.union(i * n + j, ni * n + nj);
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O' && uf.find(i * n + j) !== uf.find(virtualNode)) {
                board[i][j] = 'X';
            }
        }
    }
};
