// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Example 1:
// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// Example 2:
// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// Constraints:
// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

function canPartition(nums: number[]): boolean {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    
    if (totalSum % 2 !== 0) return false;

    const target = totalSum / 2;
    const reachableSums = Array(target + 1).fill(false);
    reachableSums[0] = true;

    for (const num of nums) {
        for (let sum = target; sum >= num; sum--) {
            if (reachableSums[sum - num]) {
                reachableSums[sum] = true;
            }
        }

        if (reachableSums[target]) return true;
    }

    return reachableSums[target];
}
