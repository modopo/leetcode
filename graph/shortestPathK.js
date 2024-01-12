// You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

// Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible to find such walk return -1.

// Example 1:

// Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
// Output: 6
// Explanation:
// The shortest path without eliminating any obstacle is 10.
// The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).
// Example 2:

// Input: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
// Output: -1
// Explanation: We need to eliminate at least two obstacles to find such a walk.

let shortestPath = (grid, k) => {
    let direction = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    let seen = new Map();
    let queue = [[[0, 0], 0, k]];

    let inBound = (r, c) => {
        return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length;
    };

    while (queue.length) {
        let [current, dist, remain] = queue.shift();
        let coord = current[0] + "," + current[1];

        if (
            current[0] === grid.length - 1 &&
            current[1] === grid[0].length - 1
        ) {
            return dist;
        }

        for (let [dx, dy] of direction) {
            let nextRow = current[0] + dy,
                nextCol = current[1] + dx;
            coord = nextRow + "," + nextCol;
            if ((!seen.has(coord) || seen.get(coord) < remain) && inBound(nextRow, nextCol)) {
                seen.set(coord, remain);

                if (grid[nextRow][nextCol] === 1 && remain > 0) {
                    queue.push([[nextRow, nextCol], dist + 1, remain - 1]);
                }

                if (grid[nextRow][nextCol] === 0) {
                    queue.push([[nextRow, nextCol], dist + 1, remain]);
                }
            }
        }
    }

    return -1;
};

let grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];

console.log(shortestPath(grid, 1));
