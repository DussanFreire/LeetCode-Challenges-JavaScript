// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.
// You must write an algorithm that runs in linear time and uses linear extra space.

// Example 1:
// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

// Example 2:
// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.
 
// Constraints:
// 1 <= nums.length <= 105
// 0 <= nums[i] <= 109

function maximumGap(nums: number[]): number {
    const n = nums.length;
    if (n < 2) return 0;

    let minVal = Infinity;
    let maxVal = -Infinity;

    for (const num of nums) {
        minVal = Math.min(minVal, num);
        maxVal = Math.max(maxVal, num);
    }

    if (minVal === maxVal) return 0;

    const bucketSize = Math.max(1, Math.floor((maxVal - minVal) / (n - 1)));
    const bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;

    const minBucket = new Array<number>(bucketCount).fill(Infinity);
    const maxBucket = new Array<number>(bucketCount).fill(-Infinity);
    const hasValue = new Array<boolean>(bucketCount).fill(false);

    for (const num of nums) {
        const index = Math.floor((num - minVal) / bucketSize);

        minBucket[index] = Math.min(minBucket[index], num);
        maxBucket[index] = Math.max(maxBucket[index], num);
        hasValue[index] = true;
    }

    let maxGap = 0;
    let prevMax = minVal;

    for (let i = 0; i < bucketCount; i++) {
        if (!hasValue[i]) continue;

        maxGap = Math.max(maxGap, minBucket[i] - prevMax);
        prevMax = maxBucket[i];
    }

    return maxGap;
}
