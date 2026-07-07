// 1128. Number of Equivalent Domino Pairs
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

// Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

 

// Example 1:

// Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
// Output: 1
// Example 2:

// Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
// Output: 3
 

// Constraints:

// 1 <= dominoes.length <= 4 * 104
// dominoes[i].length == 2
// 1 <= dominoes[i][j] <= 9

function numEquivDominoPairs(dominoes: number[][]): number {
    let pairCount = 0;
    const frequencies = new Int32Array(100);

    for (const [a, b] of dominoes) {
        const min = a < b ? a : b;
        const max = a < b ? b : a;
        const key = min * 10 + max;

        pairCount += frequencies[key];
        frequencies[key]++;
    }

    return pairCount;
}
