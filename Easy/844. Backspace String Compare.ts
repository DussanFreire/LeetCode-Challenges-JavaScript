// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// Constraints:
// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.
// Follow up: Can you solve it in O(n) time and O(1) space?

function backspaceCompare(s: string, t: string): boolean {
  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
    i = getNextValidIndex(s, i);
    j = getNextValidIndex(t, j);

    const isSExhausted = i < 0;
    const isTExhausted = j < 0;

    if (isSExhausted && isTExhausted) return true;
    if (isSExhausted || isTExhausted || s[i] !== t[j]) return false;

    i--;
    j--;
  }

  return true;
}

function getNextValidIndex(str: string, index: number): number {
  let backspaceCount = 0;

  while (index >= 0) {
    if (str[index] === '#') {
      backspaceCount++;
      index--;
    } else if (backspaceCount > 0) {
      backspaceCount--;
      index--;
    } else {
      break;
    }
  }

  return index;
}
