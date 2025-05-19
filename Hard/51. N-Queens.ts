// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

function solveNQueens(n: number): string[][] {
    const results: string[][] = [];
    const board: number[] = Array(n).fill(-1);
    const cols = new Set<number>();
    const diag1 = new Set<number>(); // row - col
    const diag2 = new Set<number>(); // row + col

    function backtrack(row: number) {
        if (row === n) {
            const solution: string[] = [];
            for (let r = 0; r < n; r++) {
                const line = Array(n).fill('.');
                line[board[r]] = 'Q';
                solution.push(line.join(''));
            }
            results.push(solution);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

            board[row] = col;
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            backtrack(row + 1);

            // backtrack
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0);
    return results;
}
