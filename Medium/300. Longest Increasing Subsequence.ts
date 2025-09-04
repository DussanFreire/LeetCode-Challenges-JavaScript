// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

function lengthOfLIS(nums: number[]): number {
    const sub: number[] = [];

    for (let num of nums) {
        let left = 0;
        let right = sub.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            
            if (sub[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        if (left < sub.length) {
            sub[left] = num;
        } else {
            sub.push(num);
        }
    }

    return sub.length;
}
