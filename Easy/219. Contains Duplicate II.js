// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Constraints:
// 1 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// 0 <= k <= 10^5

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    if (nums.length < 1) return false;
    if(new Set(nums).size === nums.length) return false;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= i + k; j++) {
            if (j === nums.length) break;

            if (nums[i] == nums[j]) {
                return true;
            }
        };
    };
    return false;
}
