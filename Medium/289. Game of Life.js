// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

// Example 1:
// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Example 2:
// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]

// Constraints:
// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.
 

// Follow up:
// Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const auxMat = createMatrix(board.length, board[0].length)

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const neighbors = countLiveNeighbors(i, j, board);

            if (board[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
                auxMat[i][j] = 0;
            }
            else if (board[i][j] === 0 && neighbors === 3) {
                auxMat[i][j] = 1;
            }
            else {
                auxMat[i][j] = board[i][j];

            }
        }
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            board[row][col] = auxMat[row][col]
        }
    }
};

function countLiveNeighbors(row, col, board) {
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];
    let count = 0;

    for (const [dr, dc] of directions) {
        const r = row + dr;
        const c = col + dc;

        if (r >= 0 && r < board.length && c >= 0 && c < board[0].length && Math.abs(board[r][c]) === 1) {
            count++;
        }
    }

    return count;
}
function createMatrix(n, m) {
    const result = []

    for (var i = 0; i < n; i++) {
        result.push(new Array(m).fill(1))
    }

    return result
}
