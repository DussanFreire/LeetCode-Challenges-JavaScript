// 1309. Decrypt String from Alphabet to Integer Mapping
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// The test cases are generated so that a unique mapping will always exist.

 

// Example 1:

// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
// Example 2:

// Input: s = "1326#"
// Output: "acz"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of digits and the '#' letter.
// s will be a valid string such that mapping is always possible.

function freqAlphabets(s: string): string {
    const result: string[] = [];
    let i = s.length - 1;

    while (i >= 0) {
        if (s[i] === '#') {
            const num = parseInt(s.substring(i - 2, i), 10);
            result.push(String.fromCharCode(96 + num));
            i -= 3;
        } else {
            const num = parseInt(s[i], 10);
            result.push(String.fromCharCode(96 + num));
            i -= 1;
        }
    }

    return result.reverse().join('');
}
