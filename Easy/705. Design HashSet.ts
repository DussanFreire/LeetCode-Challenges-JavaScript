// Design a HashSet without using any built-in hash table libraries.
// Implement MyHashSet class:
// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 
// Example 1:
// Input
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// Output
// [null, null, null, true, false, null, true, null, false]

// Explanation
// MyHashSet myHashSet = new MyHashSet();
// myHashSet.add(1);      // set = [1]
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(1); // return True
// myHashSet.contains(3); // return False, (not found)
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(2); // return True
// myHashSet.remove(2);   // set = [1]
// myHashSet.contains(2); // return False, (already removed)
 
// Constraints:
// 0 <= key <= 106
// At most 104 calls will be made to add, remove, and contains.

class MyHashSet {
    private readonly size: number;
    private buckets: number[][];

    constructor() {
        this.size = 1009;
        this.buckets = Array.from({ length: this.size }, () => []);
    }

    private getHash(key: number): number {
        return key % this.size;
    }

    add(key: number): void {
        const index = this.getHash(key);
        if (!this.contains(key)) {
            this.buckets[index].push(key);
        }
    }

    remove(key: number): void {
        const index = this.getHash(key);
        const bucket = this.buckets[index];
        const keyIndex = bucket.indexOf(key);

        if (keyIndex !== -1) {
            bucket.splice(keyIndex, 1);
        }
    }

    contains(key: number): boolean {
        const index = this.getHash(key);
        return this.buckets[index].includes(key);
    }
}
