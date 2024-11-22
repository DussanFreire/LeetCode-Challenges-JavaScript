// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Constraints:
// The number of nodes in the tree is n.
// 1 <= k <= n <= 10^4
// 0 <= Node.val <= 10^4

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const stack = []
    let current = root

    for (let n = 1; current || stack.length > 0; n++) {
        const leftNodes = GetAllLeftNodes(current)
        stack.push(...leftNodes);
        current = stack.pop();
        if (n === k) return current.val
        else current = current.right
    }
    // while (current || stack.length > 0) {
    //     const leftNodes = GetAllLeftNodes(current)
    //     stack.push(...leftNodes);
    //     current = stack.pop();
    //     n++;
    //     if (n === k) return current.val
    //     else current = current.right
    // }
};

function GetAllLeftNodes(root) {
    const leftNodes = []
    while (root) {
        leftNodes.push(root)
        root = root.left
    }
    return leftNodes;
}
