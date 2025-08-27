// You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.
// Define a pair (u, v) which consists of one element from the first array and one element from the second array.
// Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

// Example 1:
// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]]
// Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

// Example 2:
// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [[1,1],[1,1]]
// Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 
// Constraints:
// 1 <= nums1.length, nums2.length <= 105
// -109 <= nums1[i], nums2[i] <= 109
// nums1 and nums2 both are sorted in non-decreasing order.
// 1 <= k <= 104
// k <= nums1.length * nums2.length

class MinHeap<T> {
    private data: T[];
    private comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.data = [];
        this.comparator = comparator;
    }

    size(): number {
        return this.data.length;
    }

    push(item: T): void {
        this.data.push(item);
        this.bubbleUp();
    }

    pop(): T | undefined {
        if (this.size() === 0) return undefined;

        const top = this.data[0];
        const end = this.data.pop()!;

        if (this.size() > 0) {
            this.data[0] = end;
            this.bubbleDown();
        }
        
        return top;
    }

    private bubbleUp(): void {
        let idx = this.size() - 1;
        const element = this.data[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.data[parentIdx];
            if (this.comparator(element, parent) >= 0) break;
            this.data[idx] = parent;
            idx = parentIdx;
        }
        this.data[idx] = element;
    }

    private bubbleDown(): void {
        let idx = 0;
        const length = this.size();
        const element = this.data[0];

        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let swapIdx = -1;

            if (leftIdx < length) {
                if (this.comparator(this.data[leftIdx], element) < 0) {
                    swapIdx = leftIdx;
                }
            }

            if (rightIdx < length) {
                if (
                    (swapIdx === -1 && this.comparator(this.data[rightIdx], element) < 0) ||
                    (swapIdx !== -1 && this.comparator(this.data[rightIdx], this.data[leftIdx]) < 0)
                ) {
                    swapIdx = rightIdx;
                }
            }

            if (swapIdx === -1) break;
            this.data[idx] = this.data[swapIdx];
            idx = swapIdx;
        }
        this.data[idx] = element;
    }
}

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const result: number[][] = [];
    if (nums1.length === 0 || nums2.length === 0 || k === 0) return result;

    const heap = new MinHeap<[number, number, number]>(
        (a, b) => (a[0] + a[1]) - (b[0] + b[1])
    );


    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        heap.push([nums1[i], nums2[0], 0]); nums2)
    }

    while (k > 0 && heap.size() > 0) {
        const [u, v, idx] = heap.pop()!;
        result.push([u, v]);
        k--;

        if (idx + 1 < nums2.length) {
            heap.push([u, nums2[idx + 1], idx + 1]);
        }
    }

    return result;
}
