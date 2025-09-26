// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Example 3:
// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
// Output: [1,2]

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 
// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();

    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const buckets: number[][] = Array(nums.length + 1).fill(0).map(() => []);

    for (const [num, freq] of freqMap.entries()) {
        buckets[freq].push(num);
    }

    const result: number[] = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) return result;
        }
    }

    return result;
}
