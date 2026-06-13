// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Example 1:
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:
// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]
 
// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.

function commonChars(words: string[]): string[] {
    const globalMinFreq: number[] = new Array(26).fill(Infinity);

    for (const word of words) {
        const currentFreq: number[] = new Array(26).fill(0);
        
        for (let i = 0; i < word.length; i++) {
            const charCode = word.charCodeAt(i) - 97; // 97 is 'a'
            currentFreq[charCode]++;
        }

        for (let i = 0; i < 26; i++) {
            globalMinFreq[i] = Math.min(globalMinFreq[i], currentFreq[i]);
        }
    }

    const result: string[] = [];
    
    for (let i = 0; i < 26; i++) {
        while (globalMinFreq[i] > 0) {
            result.push(String.fromCharCode(i + 97));
            globalMinFreq[i]--;
        }
    }

    return result;
}
