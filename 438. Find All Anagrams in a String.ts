// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// Example 1:
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Example 2:
// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Constraints:
// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

  function findAnagrams(s: string, p: string): number[] {
    const res: number[] = [];
    const sLen = s.length, pLen = p.length;

    if (sLen < pLen) return res;

    const pCount: number[] = new Array(26).fill(0);
    const sCount: number[] = new Array(26).fill(0);
    const idx = (ch: string) => ch.charCodeAt(0) - 'a'.charCodeAt(0);

    for (let i = 0; i < pLen; i++) {
        pCount[idx(p[i])]++;
        sCount[idx(s[i])]++;
    }

    if (arraysEqual(pCount, sCount)) res.push(0);

    for (let i = pLen; i < sLen; i++) {
        sCount[idx(s[i])]++;
        sCount[idx(s[i - pLen])]--;

        if (arraysEqual(pCount, sCount)) {
            res.push(i - pLen + 1);
        }
    }

    return res;
}

function arraysEqual(a: number[], b: number[]): boolean {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    
    return true;
}
