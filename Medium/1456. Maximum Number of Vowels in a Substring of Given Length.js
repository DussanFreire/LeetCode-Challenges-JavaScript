// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

// Constraints:
// 1 <= s.length <= 105
// s consists of lowercase English letters.
// 1 <= k <= s.length

const VOWELS = ["a", "e", "i", "o", "u"];

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let maxVowelsQtyInKChar = s.slice(0, k).split("").reduce((prev, curr) => prev + getVowelValue(curr), 0);
    let vowelsQtyInKChar = maxVowelsQtyInKChar;

    for (let i = k; i < s.length; i++) {
        const firstLetter = s[i - k];
        const newLetter = s[i];

        vowelsQtyInKChar += getVowelValue(newLetter) - getVowelValue(firstLetter);
        maxVowelsQtyInKChar = Math.max(maxVowelsQtyInKChar, vowelsQtyInKChar);
    }

    return maxVowelsQtyInKChar;
};

function getVowelValue(letter) {
    return VOWELS.includes(letter) ? 1 : 0;
}
