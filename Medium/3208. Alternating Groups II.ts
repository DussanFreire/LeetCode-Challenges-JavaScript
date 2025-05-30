// There is a circle of red and blue tiles. You are given an array of integers colors and an integer k. The color of tile i is represented by colors[i]:

// colors[i] == 0 means that tile i is red.
// colors[i] == 1 means that tile i is blue.
// An alternating group is every k contiguous tiles in the circle with alternating colors (each tile in the group except the first and last one has a different color from its left and right tiles).

// Return the number of alternating groups.

// Note that since colors represents a circle, the first and the last tiles are considered to be next to each other.

// Example 1:
// Input: colors = [0,1,0,1,0], k = 3
// Output: 3

// Example 2:
// Input: colors = [0,1,0,0,1,0,1], k = 6
// Output: 2


// Example 3:
// Input: colors = [1,1,0,1], k = 4
// Output: 0

// Constraints:
// 3 <= colors.length <= 105
// 0 <= colors[i] <= 1
// 3 <= k <= colors.length


function numberOfAlternatingGroups(colors: number[], k: number): number {
    const n = colors.length;
    let groupsQty = 0;

    for (let l = 0, r = 1; r < n + k - 1; ++r) {
        if (colors[(r - 1) % n] === colors[r % n]) {
            l = r;
        }
        if (r - l >= k - 1) {
            groupsQty++;
            l++;
        }
    }

    return groupsQty;
}

using clean code:
function numberOfAlternatingGroups(colors: number[], k: number): number {
    const length = colors.length;
    let groupCount = 0;
    let left = 0;

    for (let right = 1; right < length + k - 1; right++) {
        const prevColor = colors[(right - 1) % length];
        const currColor = colors[right % length];

        if (prevColor === currColor) {
            left = right;
            continue;
        }

        if (right - left >= k - 1) {
            groupCount++;
            left++;
        }
    }

    return groupCount;
}
