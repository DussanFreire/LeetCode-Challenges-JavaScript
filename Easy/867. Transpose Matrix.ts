// Given a 2D integer array matrix, return the transpose of matrix.
// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// Example 2:
// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 1000
// 1 <= m * n <= 105
// -109 <= matrix[i][j] <= 109

function transpose(matrix: number[][]): number[][] {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // Initialize an empty matrix with swapped dimensions (cols x rows)
    const result: number[][] = Array.from({ length: cols }, () => new Array(rows));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // The element at [i][j] moves to [j][i]
            result[j][i] = matrix[i][j];
        }
    }

    return result;
}
