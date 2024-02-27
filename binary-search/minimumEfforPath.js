function minimumEffortPath(heights) {
  let inbound = (r, c) => {
    let rowInbound = 0 <= r && r < heights.length;
    let colInbound = 0 <= c && c < heights[0].length;

    return rowInbound && colInbound;
  };

  let check = (effort) => {
    let dir = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    let seen = [];
    let queue = [[0, 0]];

    for (let i = 0; i < heights.length; i++) {
      seen.push(new Array(heights[0].length).fill(false));
    }

    seen[0][0] = true;

    while (queue.length) {
      let [row, col] = queue.shift();
      if (row === heights.length - 1 && col === heights[0].length - 1) {
        return true;
      }

      for (let [dx, dy] of dir) {
        let nextR = row + dy,
          nextC = col + dx;
        if (inbound(nextR, nextC) && !seen[nextR][nextC]) {
          let diff = Math.abs(heights[nextR][nextC] - heights[row][col]);
          if (diff <= effort) {
            seen[nextR][nextC] = true;
            queue.push([nextR, nextC]);
          }
        }
      }
    }
    return false;
  };

  let left = 0,
    right = 0;

  for (let elem of heights) {
    right = Math.max(right, Math.max(...elem));
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
