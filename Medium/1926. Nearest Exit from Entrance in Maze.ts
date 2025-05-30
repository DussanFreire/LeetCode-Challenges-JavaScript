// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.
// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.
// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

// Example 1:
// Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
// Output: 1
// Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
// Initially, you are at the entrance cell [1,2].
// - You can reach [1,0] by moving 2 steps left.
// - You can reach [0,2] by moving 1 step up.
// It is impossible to reach [2,3] from the entrance.
// Thus, the nearest exit is [0,2], which is 1 step away.

function nearestExit(maze: string[][], entrance: number[]): number {
    const m = maze.length;
    const n = maze[0].length;
    const directions = [
        [0, 1],  
        [1, 0],  
        [0, -1], 
        [-1, 0], 
    ];

    const queue: [number, number, number][] = [[entrance[0], entrance[1], 0]];
    maze[entrance[0]][entrance[1]] = '+'; 
    while (queue.length > 0) {
        const [row, col, steps] = queue.shift()!;

        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            if (
                newRow >= 0 && newRow < m &&
                newCol >= 0 && newCol < n &&
                maze[newRow][newCol] === '.'
            ) {
                if (
                    newRow === 0 || newRow === m - 1 ||
                    newCol === 0 || newCol === n - 1
                ) {
                    return steps + 1;
                }

                maze[newRow][newCol] = '+';
                queue.push([newRow, newCol, steps + 1]);
            }
        }
    }

    return -1; 
}
