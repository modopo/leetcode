// Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

let direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];


function islandCount(grid) {
  let count = 0;
  let seen = new Set();

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (dfs(grid, row, col, seen)) {
        count++;
      };
    }
  }

  return count;
};

let dfs = (grid, r, c, seen) => {
  if (!inBound(grid, r, c)) {
    return false;
  }

  if (grid[r][c] === 'W') {
    return false;
  }

  let pos = r + ',' + c;
  if (seen.has(pos)) {
    return false;
  }

  seen.add(pos);

  for (let neighbor of direction) {
    dfs(grid, r + neighbor[0], c + neighbor[1], seen);
  }

  return true;
}

let inBound = (grid, row, col) => {
  let rowInbound = 0 <= row && row < grid.length;
  let colInbound = 0 <= col && col < grid[0].length;

  return rowInbound && colInbound;
}

console.log(islandCount(grid));