// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:
// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

const VOWELS = ['a', 'e', 'i', 'o', 'u']

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const wordVowels = getWordVowels(s);
    const newWord = replaceVowelsIntoWord(s, wordVowels)

    return newWord;
};


function getWordVowels(word) {
    const wordsVowels = []

    for (let letter of word) {
        if (VOWELS.includes(letter.toLowerCase())) {
            wordsVowels.push(letter)
        }
    }

    return wordsVowels;
}

function replaceVowelsIntoWord(word, vowels) {
    let newWord = "";

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        if (VOWELS.includes(letter.toLowerCase())) {
            const vowel = vowels.pop();
            newWord += vowel;
        }
        else {
            newWord += letter;
        }
    }

    return newWord;
}
