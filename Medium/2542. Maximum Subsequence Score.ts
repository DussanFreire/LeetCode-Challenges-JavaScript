// You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k. You must choose a subsequence of indices from nums1 of length k.
// For chosen indices i0, i1, ..., ik - 1, your score is defined as:
// The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.
// It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
// Return the maximum possible score.
// A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.

// Example 1:
// Input: nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
// Output: 12
// Explanation: 
// The four possible subsequence scores are:
// - We choose the indices 0, 1, and 2 with score = (1+3+3) * min(2,1,3) = 7.
// - We choose the indices 0, 1, and 3 with score = (1+3+2) * min(2,1,4) = 6. 
// - We choose the indices 0, 2, and 3 with score = (1+3+2) * min(2,3,4) = 12. 
// - We choose the indices 1, 2, and 3 with score = (3+3+2) * min(1,3,4) = 8.
// Therefore, we return the max score, which is 12.

// Example 2:
// Input: nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
// Output: 30
// Explanation: 
// Choosing index 2 is optimal: nums1[2] * nums2[2] = 3 * 10 = 30 is the maximum possible score.

// Constraints:
// n == nums1.length == nums2.length
// 1 <= n <= 105
// 0 <= nums1[i], nums2[j] <= 105
// 1 <= k <= n

function maxScore(nums1: number[], nums2: number[], k: number): number {
  const n = nums1.length;
  const pairs: [number, number][] = [];

  for (let i = 0; i < n; i++) {
    pairs.push([nums1[i], nums2[i]]);
  }

  pairs.sort((a, b) => b[1] - a[1]);

  const minHeap: number[] = [];
  let sum = 0;
  let result = 0;

  for (let [val1, val2] of pairs) {
    insertHeap(minHeap, val1);
    sum += val1;

    if (minHeap.length > k) {
      const removed = removeMin(minHeap);
      sum -= removed;
    }

    if (minHeap.length === k) {
      result = Math.max(result, sum * val2);
    }
  }

  return result;

  function insertHeap(heap: number[], val: number) {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (heap[parent] <= heap[i]) break;
      [heap[parent], heap[i]] = [heap[i], heap[parent]];
      i = parent;
    }
  }

  function removeMin(heap: number[]): number {
    const min = heap[0];
    const last = heap.pop()!;
    if (heap.length === 0) return min;
    heap[0] = last;
    let i = 0;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;
      if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
      if (right < heap.length && heap[right] < heap[smallest]) smallest = right;
      if (smallest === i) break;
      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      i = smallest;
    }
    return min;
  }
}
