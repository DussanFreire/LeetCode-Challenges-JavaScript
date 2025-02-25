// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:
// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums.length) return 0;

    const numsUniqueValues = [...new Set(nums)];

    numsUniqueValues.sort((a, b) => a - b);

    let longestSequence = 1;
    let currentSequence = 1;

    for (let i = 0; i < numsUniqueValues.length - 1; i++) {
        if (numsUniqueValues[i] === numsUniqueValues[i + 1] - 1) {
            currentSequence++;
        } else {
            longestSequence = Math.max(longestSequence, currentSequence);
            currentSequence = 1;
        }
    }

    return Math.max(longestSequence, currentSequence)
};
