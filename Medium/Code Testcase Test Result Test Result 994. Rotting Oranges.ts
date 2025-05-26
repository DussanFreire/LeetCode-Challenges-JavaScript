// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const queue: [number, number][] = [];
  let fresh = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        fresh++;
      }
    }
  }

  if (fresh === 0) return 0;

  const directions = [
    [0, 1], [1, 0], [0, -1], [-1, 0]
  ];
  let minutes = 0;

  while (queue.length > 0) {
    const size = queue.length;
    let infected = false;

    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift()!;

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 && ny >= 0 &&
          nx < rows && ny < cols &&
          grid[nx][ny] === 1
        ) {
          grid[nx][ny] = 2;
          queue.push([nx, ny]);
          fresh--;
          infected = true;
        }
      }
    }

    if (infected) minutes++;
  }

  return fresh === 0 ? minutes : -1;
}
