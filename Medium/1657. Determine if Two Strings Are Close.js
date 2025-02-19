// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.
// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Example 1:
// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"

// Example 2:
// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

// Example 3:
// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"
 
// Constraints:
// 1 <= word1.length, word2.length <= 105
// word1 and word2 contain only lowercase English letters.

const NUMBER_OF_LETTERS = 26;
const FIRST_UNARY_CODE = 97;

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;

    let freq1 = getLetterFrequencie(word1);
    let freq2 = getLetterFrequencie(word2);

    return areTheSameLetters(freq1, freq2) && areEqualFrequencies(freq1, freq2);
};


function getLetterFrequencie(word) {
    let freq = new Array(NUMBER_OF_LETTERS).fill(0);

    for (let letter of word) {
        freq[letter.charCodeAt(0) - FIRST_UNARY_CODE]++;
    }

    return freq;
}

function areTheSameLetters(freq1, freq2) {
    for (let i = 0; i < NUMBER_OF_LETTERS; i++) {
        if ((freq1[i] === 0 && freq2[i] !== 0) || (freq1[i] !== 0 && freq2[i] === 0)) {
            return false;
        }
    }

    return true;
}

function areEqualFrequencies(freq1, freq2) {
    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    for (let i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) {
            return false;
        }
    }

    return true;
}
