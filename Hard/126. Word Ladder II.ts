// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].

// Example 1:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
// Explanation: There are 2 shortest transformation sequences:
// "hit" -> "hot" -> "dot" -> "dog" -> "cog"
// "hit" -> "hot" -> "lot" -> "log" -> "cog"

// Example 2:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: []
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

// Constraints:
// 1 <= beginWord.length <= 5
// endWord.length == beginWord.length
// 1 <= wordList.length <= 500
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.
// The sum of all shortest transformation sequences does not exceed 105.

function findLadders(
    beginWord: string,
    endWord: string,
    wordList: string[]
): string[][] {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];

    const distance = new Map<string, number>();
    const parents = new Map<string, string[]>();
    const results: string[][] = [];

    bfs(beginWord, endWord, wordSet, distance, parents);
    dfs(endWord, beginWord, parents, [], results);

    return results;
}

function bfs(
    beginWord: string,
    endWord: string,
    wordSet: Set<string>,
    distance: Map<string, number>,
    parents: Map<string, string[]>
): void {
    const queue: string[] = [beginWord];
    distance.set(beginWord, 0);

    while (queue.length > 0) {
        const current = queue.shift()!;
        const currentDistance = distance.get(current)!;

        for (const next of getNeighbors(current, wordSet)) {
            if (!distance.has(next)) {
                distance.set(next, currentDistance + 1);
                parents.set(next, [current]);
                queue.push(next);
            } else if (distance.get(next) === currentDistance + 1) {
                parents.get(next)!.push(current);
            }
        }
    }
}

function dfs(
    current: string,
    beginWord: string,
    parents: Map<string, string[]>,
    path: string[],
    results: string[][]
): void {
    path.push(current);

    if (current === beginWord) {
        results.push([...path].reverse());
    } else if (parents.has(current)) {
        for (const parent of parents.get(current)!) {
            dfs(parent, beginWord, parents, path, results);
        }
    }

    path.pop();
}

function getNeighbors(word: string, wordSet: Set<string>): string[] {
    const neighbors: string[] = [];
    const chars = word.split("");

    for (let i = 0; i < chars.length; i++) {
        const original = chars[i];

        for (let c = 97; c <= 122; c++) {
            const letter = String.fromCharCode(c);
            if (letter === original) continue;

            chars[i] = letter;
            const newWord = chars.join("");

            if (wordSet.has(newWord)) {
                neighbors.push(newWord);
            }
        }

        chars[i] = original;
    }

    return neighbors;
}

