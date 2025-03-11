// Given a string s consisting only of characters a, b and c.
// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

// Example 1:
// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 

// Example 2:
// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 

// Example 3:
// Input: s = "abc"
// Output: 1

// Constraints:
// 3 <= s.length <= 5 x 10^4
// s only consists of a, b or c characters.

type CharTypeIndex = 0 | 1 | 2;

function numberOfSubstrings(s: string): number {
    const lastPosition: number[] = [-1, -1, -1];
    let totalSubstrings = 0;

    for (let i = 0; i < s.length; i++) {
        const charIndex: CharTypeIndex = (s.charCodeAt(i) - 97) as CharTypeIndex;
        lastPosition[charIndex] = i;
        totalSubstrings += 1 + Math.min(...lastPosition);
    }

    return totalSubstrings;
}
