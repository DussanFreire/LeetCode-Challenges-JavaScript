// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:

// n == height.length
// 1 <= n <= 2 * 10^4
// 0 <= height[i] <= 10^5

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxLHeight = height[left];
    let maxRHeight = height[right];
    let water = 0;

    while (left < right) {
        if (maxLHeight < maxRHeight) {
            left++;
            maxLHeight = Math.max(maxLHeight, height[left]);
            water += maxLHeight - height[left];
        } else {
            right--;
            maxRHeight = Math.max(maxRHeight, height[right]);
            water += maxRHeight - height[right];
        }
    }
    return water;
};
