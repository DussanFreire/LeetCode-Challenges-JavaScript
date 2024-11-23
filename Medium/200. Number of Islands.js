// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const islands = countIslands(grid);

    return islands;
};

const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

function countIslands(grid) {
    let islands = 0;
    const rowsLength = grid.length;
    const colsLength = grid[0].length;
    const visitedCells = new Set();


    for (let r = 0; r < rowsLength; r++) {
        for (let c = 0; c < colsLength; c++) {
            if (isNewLand(r, c, visitedCells, grid)) {
                islands++;
                markLands(r, c, visitedCells, grid);
            }
        }

    }
    return islands;
}

function isNewLand(r, c, visitedCells, grid) {
    return grid[r]?.[c] !== undefined && grid[r][c] === "1" && !visitedCells.has(transformToSetFormat(r, c))
}

function markLands(row, column, visitedCells, grid) {
    const queue = [[row, column]];
    visitedCells.add(transformToSetFormat(row, column));

    while (queue.length > 0) {
        const [currentRow, currentCol] = queue.shift();
        markNeighbors(visitedCells, grid, queue, currentRow, currentCol)
    }
}

function markNeighbors(visitedCells, grid, queue, currentRow, currentCol) {
    for (const [dr, dc] of DIRECTIONS) {
        const neighborRow = currentRow + dr;
        const neighborCol = currentCol + dc;

        if (isNewLand(neighborRow, neighborCol, visitedCells, grid)) {
            queue.push([neighborRow, neighborCol]);
            visitedCells.add(transformToSetFormat(neighborRow, neighborCol));
        }
    }
}

function transformToSetFormat(row, column) {
    return `${row},${column}`
}
