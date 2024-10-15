// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constraints:
// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -2^31 <= matrix[i][j] <= 2^31 - 1

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const auxMat = createMatrix(matrix.length, matrix[0].length)
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                serRowAndCol(row, col, auxMat)
            }
        }
    }
     for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (auxMat[row][col] === 0) {
                matrix[row][col] = auxMat[row][col]
            }
        }
    }

};


function serRowAndCol(row, col, matrix) {
    for (let r = 0; r < matrix.length; r++) {
        matrix[r][col] = 0
    }

    for (let c = 0; c < matrix[row].length; c++) {
        matrix[row][c] = 0
    }
}
function createMatrix(n, m) {
    const result = []

    for (var i = 0; i < n; i++) {
        result.push(new Array(m).fill(1))
    }

    return result
}
