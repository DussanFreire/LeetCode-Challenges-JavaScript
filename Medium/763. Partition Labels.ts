// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.
// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
// Return a list of integers representing the size of these parts.

// Example 1:
// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

// Example 2:
// Input: s = "eccbbbbdec"
// Output: [10]

// Constraints:
// 1 <= s.length <= 500
// s consists of lowercase English letters.

function partitionLabels(s: string): number[] {
    const lastIndex = new Map<string, number>();
    const result: number[] = [];
    let size = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        lastIndex.set(s[i], i);
    }

    for (let i = 0; i < s.length; i++) {
        size++;
        end = Math.max(end, lastIndex.get(s[i])!);

        if (i === end) {
            result.push(size);
            size = 0;
        }
    }

    return result;
}
