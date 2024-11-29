// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

// Constraints:
// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums is sorted in a strictly increasing order.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    function generateTree(startIndex, endIndex) {
        if (startIndex > endIndex) return null;

        const midIndex = Math.ceil((startIndex + endIndex) / 2);
        const currentVal = nums[midIndex];
        const left = generateTree(startIndex, midIndex - 1);
        const right = generateTree(midIndex + 1, endIndex);
        const root = new TreeNode(currentVal, left, right);

        return root;
    };

    return generateTree(0, nums.length - 1);
};
