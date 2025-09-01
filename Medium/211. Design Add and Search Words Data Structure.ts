// Design a data structure that supports adding new words and finding if a string matches any previously added string.
// Implement the WordDictionary class:
// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 
// Example:
// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True
 
// Constraints:
// 1 <= word.length <= 25
// word in addWord consists of lowercase English letters.
// word in search consist of '.' or lowercase English letters.
// There will be at most 2 dots in word for search queries.
// At most 104 calls will be made to addWord and search.


class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class WordDictionary {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let node = this.root;
        for (let char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.isEnd = true;
    }

    search(word: string): boolean {
        const dfs = (index: number, node: TrieNode): boolean => {
            if (index === word.length) return node.isEnd;

            let char = word[index];
            if (char === ".") {
                for (let child of node.children.values()) {
                    if (dfs(index + 1, child)) return true;
                }
                return false;
            } else {
                if (!node.children.has(char)) return false;
                return dfs(index + 1, node.children.get(char)!);
            }
        };

        return dfs(0, this.root);
    }
}
