// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 
// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const elementsQty = rows * cols;
    const res = [];

    let x = 0;
    let y = 0;
    let dx = 1;
    let dy = 0;

    for (let i = 0; i < elementsQty; i++) {
        const xVal = x + dx
        const yVal = y + dy

        res.push(matrix[y][x]);
        matrix[y][x] = VISITED_FLAG;

        if (!(verifyIsInTheRange(0, cols, xVal) && verifyIsInTheRange(0, rows, yVal)) || matrix[yVal][xVal] === VISITED_FLAG) {
            [dx, dy] = [-dy, dx];
        }

        x += dx;
        y += dy;
    }

    return res;
};

const VISITED_FLAG = ".";

function verifyIsInTheRange(minLimit, maxLimit, number) {
    return minLimit <= number && number < maxLimit
}
