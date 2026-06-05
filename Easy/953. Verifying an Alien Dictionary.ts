// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

// Example 1:
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:
// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:
// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.

function isAlienSorted(words: string[], order: string): boolean {
    const orderMap = new Int32Array(26);
    for (let i = 0; i < order.length; i++) {
        orderMap[order.charCodeAt(i) - 97] = i;
    }

    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];

        let j = 0;
        let sorted = false;

        while (j < word1.length && j < word2.length) {
            const char1 = word1.charCodeAt(j) - 97;
            const char2 = word2.charCodeAt(j) - 97;

            if (orderMap[char1] < orderMap[char2]) {
                sorted = true;
                break;
            } else if (orderMap[char1] > orderMap[char2]) {
                return false;
            }
            j++;
        }

        if (!sorted && word1.length > word2.length) {
            return false;
        }
    }

    return true;
}
