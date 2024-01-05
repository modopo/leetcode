// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

// Example 1:

// Input:
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

let grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

function maxAreaOfIsland(grid) {
  let result = 0;
  let seen = new Set();

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      result = Math.max(explore(grid, row, col, seen), result);
    }
  }

  return result;
}

let directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function explore(grid, row, col, seen) {
  if (!isInbound(grid, row, col)) {
    return 0;
  }

  if (grid[row][col] === 0) {
    return 0;
  }

  let coord = row + "," + col;
  if (seen.has(coord)) {
    return 0;
  }

  seen.add(coord);

  let size = 1;

  for (let neighbor of directions) {
    size += explore(grid, row + neighbor[0], col + neighbor[1], seen);
  }

  return size;
}

function isInbound(grid, row, col) {
  let rowInbound = row >= 0 && row < grid.length;
  let colInbound = col >= 0 && col < grid[0].length;

  return rowInbound && colInbound;
}

console.log(maxAreaOfIsland(grid));
