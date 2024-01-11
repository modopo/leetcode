// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

// Example 1:

// Input: grid = [[0,1],[1,0]]
// Output: 2
// Example 2:

// Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
// Output: 4
// Example 3:

// Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
// Output: -1

let shortestPathBinaryMatrix = (grid) => {
  if (grid[0][0] === 1) {
    return -1;
  }

  let seen = new Set();
  let queue = [[[0, 0], 1]];
  let directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [-1, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
  ];

  while (queue.length) {
    let [current, dist] = queue.shift();

    if (current[0] === grid.length - 1 && current[1] === grid.length - 1) {
      return dist;
    }

    for (let [dx, dy] of directions) {
      let nextR = current[0] + dy, nextC = current[1] + dx;
      if (inBound(grid, nextR, nextC)) {
        let coord = nextR + "," + nextC;
        if (!seen.has(coord)) {
          seen.add(coord);
          if (grid[nextR][nextC] === 0) {
            queue.push([[nextR, nextC], dist + 1]);
          }
        }
      }
    }
  }
};

let inBound = (grid, r, c) => {
  let rowInbound = 0 <= r && r < grid.length;
  let colInbound = 0 <= c && c < grid.length;

  return rowInbound && colInbound;
};

let grid = [
  [0, 1],
  [1, 0],
];


console.log(shortestPathBinaryMatrix(grid));
