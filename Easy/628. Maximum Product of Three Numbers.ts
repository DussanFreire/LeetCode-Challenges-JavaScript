// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 24

// Example 3:
// Input: nums = [-1,-2,-3]
// Output: -6

// Constraints:
// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

function maximumProduct(nums: number[]): number {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    let min1 = Infinity;
    let min2 = Infinity;

    for (const n of nums) {
        if (n > max1) {
            [max1, max2, max3] = [n, max1, max2];
        } else if (n > max2) {
            [max2, max3] = [n, max2];
        } else if (n > max3) {
            max3 = n;
        }

        if (n < min1) {
            [min1, min2] = [n, min1];
        } else if (n < min2) {
            min2 = n;
        }
    }

    return Math.max(max1 * max2 * max3, min1 * min2 * max1);
}
