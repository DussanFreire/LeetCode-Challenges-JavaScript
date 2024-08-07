// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"


function isPalindrom(s, left, right, allEqual, palindrom) {
    if (!s[left] && s[right] && allEqual && s[right] === s[right - 1]) {
        return isPalindrom(s, left, right + 1, allEqual, palindrom + s[right] )
    }
    else if (s[left] && !s[right] && allEqual && s[left] === s.at(left - 1)) {
        return isPalindrom(s, left - 1, right, allEqual, s[left] + palindrom)
    }
    else if (s[left] && s[right] && s[left] === s[right]) {
        return isPalindrom(s, left - 1, right + 1, allEqual ? s[right] === s.at(right - 1) : false, s[left] + palindrom + s[right] )
    }
    else {
        return palindrom
    }
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 1) return s;
    let letter = null, lastLetter = null, nextLetter, palindrom = s[0];
    for (let i = 0; i < s.length; i++) {
        lastLetter = letter;
        letter = s[i];
        nextLetter = s[i + 1];

        if (lastLetter && nextLetter && nextLetter === lastLetter) {
            const newPalindrom = isPalindrom(s, i - 2, i + 2, nextLetter === letter, lastLetter + letter + nextLetter, 1)
            palindrom = newPalindrom.length > palindrom.length ? newPalindrom : palindrom
        }
        if (nextLetter && nextLetter === letter) {
            const newPalindrom = isPalindrom(s, i - 1, i + 2, true, letter + nextLetter, 1)
            palindrom = newPalindrom.length > palindrom.length ? newPalindrom : palindrom
        }
    }
    return palindrom;
};

