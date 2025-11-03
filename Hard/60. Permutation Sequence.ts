// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Example 1:
// Input: n = 3, k = 3
// Output: "213"

// Example 2:
// Input: n = 4, k = 9
// Output: "2314"

// Example 3:
// Input: n = 3, k = 1
// Output: "123"

// Constraints:
// 1 <= n <= 9
// 1 <= k <= n!

function getPermutation(n: number, k: number): string {
    const fact: number[] = [1];

    for (let i = 1; i <= n; i++) {
        fact[i] = fact[i - 1] * i;
    }

    const numbers: number[] = Array.from({ length: n }, (_, i) => i + 1);
    let permutation = "";
    
    k--;

    for (let i = n; i > 0; i--) {
        const idx = Math.floor(k / fact[i - 1]);
        permutation += numbers[idx];
        numbers.splice(idx, 1);
        k %= fact[i - 1];
    }

    return permutation;
}
