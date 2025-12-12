// Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.
// Note that the same word in the dictionary may be reused multiple times in the segmentation. 

// Example 1:
// Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// Output: ["cats and dog","cat sand dog"]

// Example 2:
// Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
// Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// Explanation: Note that you are allowed to reuse a dictionary word.
  
// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: []
 
// Constraints:
// 1 <= s.length <= 20
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 10

function wordBreak(s: string, wordDict: string[]): string[] {
    const dict = new Set(wordDict);
    const memo = new Map<string, string[]>();

    function backtrack(str: string): string[] {
        if (memo.has(str)) return memo.get(str)!;
        if (str.length === 0) return [""];

        const sentences: string[] = [];

        for (const word of dict) {
            if (!str.startsWith(word)) continue;

            const remainder = str.slice(word.length);
            const tails = backtrack(remainder);

            for (const tail of tails) {
                const sentence = tail.length > 0 ? `${word} ${tail}` : word;
                sentences.push(sentence);
            }
        }

        memo.set(str, sentences);
        return sentences;
    }

    return backtrack(s);
}
