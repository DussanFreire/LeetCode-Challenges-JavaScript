// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:
// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// Example 1:
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
  
// Example 2:
// Input: s = "aa", p = "*"
// Output: true
// Explanation: '*' matches any sequence.
  
// Example 3:
// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
 
// Constraints:
// 0 <= s.length, p.length <= 2000
// s contains only lowercase English letters.
// p contains only lowercase English letters, '?' or '*'.

function isMatch(s: string, p: string): boolean {
    let sIndex = 0;
    let pIndex = 0;
    let starIndex = -1;
    let matchIndex = 0;

    while (sIndex < s.length) {
        if (pIndex < p.length &&
            (p[pIndex] === s[sIndex] || p[pIndex] === '?')) {
            sIndex++;
            pIndex++;
            continue;
        }

        if (pIndex < p.length && p[pIndex] === '*') {
            starIndex = pIndex;
            matchIndex = sIndex;
            pIndex++;
            continue;
        }

        if (starIndex !== -1) {
            pIndex = starIndex + 1;
            matchIndex++;
            sIndex = matchIndex;
            continue;
        }

        return false;
    }

    while (pIndex < p.length && p[pIndex] === '*') {
        pIndex++;
    }

    return pIndex === p.length;
}
