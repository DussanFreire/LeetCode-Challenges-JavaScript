// 1189. Maximum Number of Balloons
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0
 

// Constraints:

// 1 <= text.length <= 104
// text consists of lower case English letters only.

function maxNumberOfBalloons(text: string): number {
    const counts = { b: 0, a: 0, l: 0, o: 0, n: 0 };

    for (const char of text) {
        if (char in counts) {
            counts[char as keyof typeof counts]++;
        }
    }

    return Math.min(
        counts.b,
        counts.a,
        Math.floor(counts.l / 2),
        Math.floor(counts.o / 2),
        counts.n
    );
}
