const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

function minimumIsland(grid) {
  let result = Infinity;
  let seen = new Set();

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let size = dfs(grid, row, col, seen);

      if (size > 0) {
        result = Math.min(result, size);
      }
    }
  }

  return result;
}

let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

let dfs = (grid, r, c, seen) => {
  if (!isInbound(grid, r, c)) {
    return 0;
  }

  if (grid[r][c] === 'W') {
    return 0;
  }

  let pos = r + ',' + c;
  if (seen.has(pos)) {
    return 0;
  }
  seen.add(pos);

  let size = 1;
  for (let neighbor of directions) {
    size += dfs(grid, r + neighbor[0], c + neighbor[1], seen);
  }

  return size;
}

let isInbound = (grid, r, c) => {
  let rowInbound = 0 <= r && r < grid.length;
  let colInbound = 0 <= c && c < grid[0].length;

  return rowInbound && colInbound;
}

console.log(minimumIsland(grid));