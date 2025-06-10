// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Can you solve it without sorting?

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

function findKthLargest(nums: number[], k: number): number {
  const minHeap: number[] = [];

  for (const num of nums) {
    if (minHeap.length < k) {
      insert(minHeap, num);
    } else if (num > minHeap[0]) {
      extractMin(minHeap);
      insert(minHeap, num);
    }
  }

  return minHeap[0]; 
}

function insert(heap: number[], val: number) {
  heap.push(val);
  let i = heap.length - 1;
  while (i > 0) {
    const parent = Math.floor((i - 1) / 2);
    if (heap[parent] <= heap[i]) break;
    [heap[i], heap[parent]] = [heap[parent], heap[i]];
    i = parent;
  }
}

function extractMin(heap: number[]): number {
  const min = heap[0];
  const end = heap.pop()!;
  if (heap.length > 0) {
    heap[0] = end;
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
  }
  return min;
}
