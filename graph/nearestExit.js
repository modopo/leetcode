// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

// Example 1:

// Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
// Output: 1
// Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
// Initially, you are at the entrance cell [1,2].
// - You can reach [1,0] by moving 2 steps left.
// - You can reach [0,2] by moving 1 step up.
// It is impossible to reach [2,3] from the entrance.
// Thus, the nearest exit is [0,2], which is 1 step away.
// Example 2:

// Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
// Output: 2
// Explanation: There is 1 exit in this maze at [1,2].
// [1,0] does not count as an exit since it is the entrance cell.
// Initially, you are at the entrance cell [1,0].
// - You can reach [1,2] by moving 2 steps right.
// Thus, the nearest exit is [1,2], which is 2 steps away.
// Example 3:

// Input: maze = [[".","+"]], entrance = [0,0]
// Output: -1
// Explanation: There are no exits in this maze.

function nearestExit(maze, entrance) {
    let direction = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];

    let queue = [[entrance, 0]];
    let coord = entrance[0] + "," + entrance[1];
    let seen = new Set([coord]);

    let inBound = (r, c) => {
        return 0 <= r && r < maze.length && 0 <= c && c < maze[0].length;
    };

    while (queue.length) {
        let [current, dist] = queue.shift();

        for (let [dx, dy] of direction) {
            let nextRow = current[0] + dy,
                nextCol = current[1] + dx;
            coord = nextRow + "," + nextCol;

            if (inBound(nextRow, nextCol) && maze[nextRow][nextCol] === '.' && !seen.has(coord)) {
                if (
                    nextRow === 0 ||
                    nextCol === 0 ||
                    nextRow === maze.length - 1 ||
                    nextCol === maze[0].length - 1
                ) {
                    return dist + 1;
                }

                seen.add(coord);
                queue.push([[nextRow, nextCol], dist + 1]);
            }
        }
    }

    return -1;
};
let maze = [["+","+","+"],[".",".","."],["+","+","+"]],
    entrance = [1, 0];
console.log(nearestExit(maze, entrance));