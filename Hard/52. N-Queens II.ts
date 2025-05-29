// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

// Example 1:
// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown.

// Example 2:
// Input: n = 1
// Output: 1

// Constraints:
// 1 <= n <= 9

function totalNQueens(n: number): number {
  let count = 0;
  const cols: number[] = [];

  function isValid(row: number, col: number): boolean {
    for (let i = 0; i < row; i++) {
      const prevCol = cols[i];

      if (prevCol === col || Math.abs(prevCol - col) === row - i) {
        return false;
      }
    }
    return true;
  }

  function backtrack(row: number) {
    if (row === n) {
      count++;

      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        cols[row] = col;
        backtrack(row + 1);
      }
    }
  }

  backtrack(0);
  
  return count;
}
