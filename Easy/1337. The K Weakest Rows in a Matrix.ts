// 1337. The K Weakest Rows in a Matrix
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

 

// Example 1:

// Input: mat = 
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]], 
// k = 3
// Output: [2,0,3]
// Explanation: 
// The number of soldiers in each row is: 
// - Row 0: 2 
// - Row 1: 4 
// - Row 2: 1 
// - Row 3: 2 
// - Row 4: 5 
// The rows ordered from weakest to strongest are [2,0,3,1,4].
// Example 2:

// Input: mat = 
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]], 
// k = 2
// Output: [0,2]
// Explanation: 
// The number of soldiers in each row is: 
// - Row 0: 1 
// - Row 1: 4 
// - Row 2: 1 
// - Row 3: 1 
// The rows ordered from weakest to strongest are [0,2,3,1].
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 2 <= n, m <= 100
// 1 <= k <= m
// matrix[i][j] is either 0 or 1.

function kWeakestRows(mat: number[][], k: number): number[] {
    const rowStrengths: { index: number; count: number }[] = [];

    for (let i = 0; i < mat.length; i++) {
        let low = 0;
        let high = mat[i].length;
        
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (mat[i][mid] === 1) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        
        rowStrengths.push({ index: i, count: low });
    }

    rowStrengths.sort((a, b) => {
        if (a.count !== b.count) {
            return a.count - b.count;
        }
        return a.index - b.index;
    });

    return rowStrengths.slice(0, k).map(row => row.index);
}
