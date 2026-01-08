// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

// Example 1:
// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.

// Example 2:

// Input: matrix = [["0"]]
// Output: 0
// Example 3:

// Input: matrix = [["1"]]
// Output: 1
 

// Constraints:

// rows == matrix.length
// cols == matrix[i].length
// 1 <= rows, cols <= 200
// matrix[i][j] is '0' or '1'.
function maximalRectangle(matrix: string[][]): number {
  if (matrix.length === 0) return 0;

  const rows = matrix.length;
  const cols = matrix[0].length;
  const heights = new Array<number>(cols).fill(0);
  let maxArea = 0;

  for (let r = 0; r < rows; r++) {
    // Build histogram for current row
    for (let c = 0; c < cols; c++) {
      heights[c] = matrix[r][c] === "1" ? heights[c] + 1 : 0;
    }

    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }

  return maxArea;
}

function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];
  let maxArea = 0;
  const extendedHeights = [...heights, 0];

  for (let i = 0; i < extendedHeights.length; i++) {
    while (
      stack.length > 0 &&
      extendedHeights[i] < extendedHeights[stack[stack.length - 1]]
    ) {
      const height = extendedHeights[stack.pop()!];
      const width =
        stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
}
