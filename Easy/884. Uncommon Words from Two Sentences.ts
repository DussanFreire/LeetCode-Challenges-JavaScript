// A sentence is a string of single-space separated words where each word consists only of lowercase letters.
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

// Example 1:
// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Explanation:
// The word "sweet" appears only in s1, while the word "sour" appears only in s2.
// Example 2:
// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]

// Constraints:
// 1 <= s1.length, s2.length <= 200
// s1 and s2 consist of lowercase English letters and spaces.
// s1 and s2 do not have leading or trailing spaces.
// All the words in s1 and s2 are separated by a single space.

function uncommonFromSentences(s1: string, s2: string): string[] {
  const wordCounts = new Map<string, number>();
  const allWords = `${s1} ${s2}`.split(" ");

  for (const word of allWords) {
    const currentCount = wordCounts.get(word) || 0;
    wordCounts.set(word, currentCount + 1);
  }

  const uncommonWords: string[] = [];
  for (const [word, count] of wordCounts) {
    if (count === 1) {
      uncommonWords.push(word);
    }
  }

  return uncommonWords;
}
