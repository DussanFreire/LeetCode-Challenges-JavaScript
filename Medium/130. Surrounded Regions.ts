// You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:
// Connect: A cell is connected to adjacent cells horizontally or vertically.
// Region: To form a region connect every 'O' cell.
// Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
// To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.

// Example 1:
// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation:

// In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

// Example 2:
// Input: board = [["X"]]
// Output: [["X"]]

// Constraints:
// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] is 'X' or 'O'.

function solve(board: string[][]): void {
    const m = board.length;
    const n = board[0].length;
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    
    function dfs(r: number, c: number): void {
        if (r < 0 || c < 0 || r >= m || c >= n || board[r][c] !== 'O') return;
        board[r][c] = '#'; 
        for (const [dr, dc] of dirs) {
            dfs(r + dr, c + dc);
        }
    }

    for (let r = 0; r < m; r++) {
        if (board[r][0] === 'O') dfs(r, 0);
        if (board[r][n-1] === 'O') dfs(r, n-1);
    }
    for (let c = 0; c < n; c++) {
        if (board[0][c] === 'O') dfs(0, c);
        if (board[m-1][c] === 'O') dfs(m-1, c);
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X'; 
            } else if (board[r][c] === '#') {
                board[r][c] = 'O'; 
            }
        }
    }
}
