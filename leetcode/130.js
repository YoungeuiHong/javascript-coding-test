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


/**
 * 130. Surrounded Regions (DFS)
 * https://leetcode.com/problems/surrounded-regions/
 *
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const m = board.length;
    const n = board[0].length;

    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') return;

        board[i][j] = '#';
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    }

    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') {
            dfs(i, 0);
        }

        if (board[i][n - 1] === 'O') {
            dfs(i, n - 1);
        }
    }

    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') {
            dfs(0, j);
        }

        if (board[m - 1][j] === 'O') {
            dfs(m - 1, j);
        }
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === '#') {
                board[i][j] = 'O';
            }
        }
    }

    return board;
};
