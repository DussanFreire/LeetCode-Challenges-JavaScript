// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:
// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.

// Example 2:
// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 
// Constraints:
// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.

function findShortestSubArray(nums: number[]): number {
    const counts = new Map<number, number>();
    const firstSeen = new Map<number, number>();
    const lastSeen = new Map<number, number>();

    let degree = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!firstSeen.has(num)) {
            firstSeen.set(num, i);
        }
        lastSeen.set(num, i);

        const count = (counts.get(num) || 0) + 1;
        counts.set(num, count);

        degree = Math.max(degree, count);
    }

    let minLength = nums.length;

    for (const [num, count] of counts) {
        if (count === degree) {
            const first = firstSeen.get(num)!;
            const last = lastSeen.get(num)!;
            const currentSpan = last - first + 1;

            minLength = Math.min(minLength, currentSpan);
        }
    }

    return minLength;
}
