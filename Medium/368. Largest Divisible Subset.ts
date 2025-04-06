// Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:
// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0
// If there are multiple solutions, return any of them.

// Example 1:
// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.

// Example 2:
// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]

// Constraints:
// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 2 * 109
// All the integers in nums are unique.

function largestDivisibleSubset(nums: number[]): number[] {
    if (nums.length === 0) return [];

    nums.sort((a, b) => a - b);
    const length = nums.length;
    const dp = new Array(length).fill(1);
    const previous = new Array(length).fill(-1);
    const result: number[] = [];

    let maxLength = 1;
    let lastIndex = 0;

    for (let i = 1; i < length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                previous[i] = j;
            }
        }

        if (dp[i] > maxLength) {
            maxLength = dp[i];
            lastIndex = i;
        }
    }

    while (lastIndex !== -1) {
        result.push(nums[lastIndex]);
        lastIndex = previous[lastIndex];
    }

    return result.reverse();
}
