// Given a binary array nums, you should delete one element from it.
// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Example 1:
// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

// Example 2:
// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

// Example 3:
// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.

// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    const n = nums.length;
    let startWindowIndex = 0;
    let zerosQty = 0;
    let endWindowIndex = 0;

    while (endWindowIndex < n) {
        const currentNumber = nums[endWindowIndex];
        const leftNumber = nums[startWindowIndex];

        if (currentNumber === 0) {
            zerosQty++;
        }
        if (zerosQty > 1) {
            if (leftNumber === 0) {
                zerosQty--;
            }
            startWindowIndex++;
        }
        endWindowIndex++;
    }

    const subArray = endWindowIndex - startWindowIndex - 1;

    return subArray;
};
