// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:
// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false

// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 
// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < board.length; i++) {
        const col = board.map(line => line[i]);
        const row = board[i];
        if (areRepeatedNumbers(col)) {
            return false;
        }
        if (areRepeatedNumbers(row)) {
            return false;
        }
    }
    for (let x = 0; x < board.length; x += 3) {
        for (let y = 0; y < board.length; y += 3) {
            const sectore = areRepeatedNumbers(getSectore(x, y, board))
            if (sectore) {
                return false;
            }
        }
    }

    return true;
};

const EMPTY_SPACE = ".";

function getSectore(x, y, board) {
    return [board[x][y], board[x][y + 1], board[x][y + 2],
    board[x + 1][y], board[x + 1][y + 1], board[x + 1][y + 2],
    board[x + 2][y], board[x + 2][y + 1], board[x + 2][y + 2]]
}

function areRepeatedNumbers(nums) {
    const filteredNums = nums.filter(num => num !== EMPTY_SPACE)
    const set = new Set(filteredNums)
    if (set.size !== filteredNums.length) {
        console.log(filteredNums)
        return true
    };
}
