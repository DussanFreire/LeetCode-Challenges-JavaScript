// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return []

    const queue = [root]
    const valuesInZigZagOrder = []
    let normalOrder = true;

    while (queue.length) {
        const levelLength = queue.length;
        const levelValues = getLevelValues(queue, levelLength)
        if (!normalOrder) {
            levelValues.reverse()
        }
        valuesInZigZagOrder.push(levelValues)
        addNextLevelToQueue(queue, levelLength, normalOrder);
        normalOrder = !normalOrder;
    }
    return valuesInZigZagOrder;
};

function getLevelValues(queue, levelLength) {
    const levelValues = []

    for (let i = 0; i < levelLength; i++) {
        levelValues.push(queue[i].val)
    }
    return levelValues;
}

function addNextLevelToQueue(queue, levelLength, normalOrder) {
    for (let i = 0; i < levelLength; i++) {
        const curr = queue.shift();

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }
}

