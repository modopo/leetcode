let updateMatrix = (mat) => {
    let directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    let seen = [];
    let queue = [];
    let matrix = mat;

    let inBound = (r, c) => {
        let rowIn = 0 <= r && r < mat.length;
        let colIn = 0 <= c && c < mat[0].length;

        return rowIn && colIn;
    };

    for (let i = 0; i < mat.length; i++) {
      seen.push(new Array(mat[0].length).fill(false));
  }

    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[0].length; col++) {
            if (matrix[row][col] === 0) {
                queue.push([[row, col], 0]);
                seen[row][col] = true;
            }
        }
    }

    while (queue.length) {
        let [current, dist] = queue.shift();

        for (let [dx, dy] of directions) {
            let nextRow = current[0] + dy,
                nextCol = current[1] + dx;
            coord = nextRow + "," + nextCol;
            if (inBound(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                seen[nextRow][nextCol] = true;
                queue.push([[nextRow, nextCol], dist + 1]);
                matrix[nextRow][nextCol] = dist + 1;
            }
        }
    }

    return matrix;
};
