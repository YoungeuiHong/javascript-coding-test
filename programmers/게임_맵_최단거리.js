function solution(maps) {
    const n = maps[0].length;
    const m = maps.length;
    return bfs(0, 0, n, m, maps);
}

function bfs(startX, startY, n, m, maps) {
    // 상하좌우
    const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];
    // 이동 경로의 queue
    const queue = [];
    queue.push([startX, startY]);
    while (queue.length) {
        const [x, y] = queue.shift();
        // 상하좌우로 이동했을 때 다음 x 좌표와 y 좌표 구하기
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // 게임 맵을 벗어났거나, 벽이 있는 자리이거나, 이미 방문한 자리라면 무시
            if (nx < 0 || nx >= n || ny < 0 || ny >= m || maps[ny][nx] !== 1) {
                continue;
            }

            // 이동경로에 현재 위치를 추가하고, 현재 위치까지 이동한 칸 수를 기록
            maps[ny][nx] = maps[y][x] + 1;
            queue.push([nx, ny]);

            // 만약 (n, m) 좌표에 이르면 현재까지 이동한 칸 수를 리턴
            if (nx === n - 1 && ny === m - 1) {
                return maps[ny][nx];
            }
        }
    }

    // (n, m) 좌표에 이르지 못하면 -1 리턴
    return -1;
}
