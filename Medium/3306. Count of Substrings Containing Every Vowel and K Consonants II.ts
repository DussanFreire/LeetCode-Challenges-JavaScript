// You are given a string word and a non-negative integer k.
// Return the total number of substrings of word that contain every vowel ('a', 'e', 'i', 'o', and 'u') at least once and exactly k consonants.

// Example 1:
// Input: word = "aeioqq", k = 1
// Output: 0
// Explanation:
// There is no substring with every vowel.

// Example 2:
// Input: word = "aeiou", k = 0
// Output: 1
// Explanation:
// The only substring with every vowel and zero consonants is word[0..4], which is "aeiou".

// Example 3:
// Input: word = "ieaouqqieaouqq", k = 1
// Output: 3
// Explanation:

// The substrings with every vowel and one consonant are:
// word[0..5], which is "ieaouq".
// word[6..11], which is "qieaou".
// word[7..12], which is "ieaouq".

// Constraints:
// 5 <= word.length <= 2 * 10^5
// word consists only of lowercase English letters.
// 0 <= k <= word.length - 5

const VOWELS = ["a", "e", "i", "o", "u"];

function countOfSubstrings(word: string, k: number): number {
    return atLeastK(word, k) - atLeastK(word, k + 1);
}

function atLeastK(word: string, k: number): number {
    const vowelSet = new Set(VOWELS);
    let vowelCount = new Map<string, number>();
    let consonants = 0, validSubstrings = 0;
    let left = 0;

    for (let right = 0; right < word.length; right++) {
        const char = word[right];

        if (vowelSet.has(char)) {
            vowelCount.set(char, (vowelCount.get(char) || 0) + 1);
        } else {
            consonants++;
        }

        while (consonants >= k && vowelCount.size === 5) {
            validSubstrings += word.length - right;

            const leftChar = word[left];

            if (vowelSet.has(leftChar)) {
                vowelCount.set(leftChar, vowelCount.get(leftChar)! - 1);
                if (vowelCount.get(leftChar) === 0) {
                    vowelCount.delete(leftChar);
                }
            } else {
                consonants--;
            }

            left++;
        }
    }

    return validSubstrings;
}
