// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;

  const searchFrom = (row: number, col: number, index: number): boolean => {
    if (index === word.length) return true;
    if (
      row < 0 || col < 0 ||
      row >= rows || col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const currentChar = board[row][col];
    board[row][col] = '#'; // mark as visited

    const found =
      searchFrom(row + 1, col, index + 1) ||
      searchFrom(row - 1, col, index + 1) ||
      searchFrom(row, col + 1, index + 1) ||
      searchFrom(row, col - 1, index + 1);

    board[row][col] = currentChar; 

    return found;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (searchFrom(row, col, 0)) return true;
    }
  }

  return false;
}
