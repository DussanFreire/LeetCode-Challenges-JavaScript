// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].
  
// Example 2:
// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]

// Constraints:
// The number of nodes in the tree is in the range [1, 10^4].
// -2^31 <= Node.val <= 2^31 - 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    const queue = [root];
    const avrPerLevel = [];

    while (queue.length) {
        const levelLength = queue.length;
        const levelAverage = getLevelAverage(queue, levelLength);

        avrPerLevel.push(levelAverage)
        addNextLevelToQueue(queue, levelLength);
    }

    return avrPerLevel
};

function getLevelAverage(queue, levelLength) {
    let totalLevelValue = 0;
    
    for (let i = 0; i < levelLength; i++) {
        totalLevelValue += queue[i].val;
    }

    return totalLevelValue / levelLength
}

function addNextLevelToQueue(queue, levelLength) {
    for (let i = 0; i < levelLength; i++) {
        const curr = queue.shift();

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }
}
