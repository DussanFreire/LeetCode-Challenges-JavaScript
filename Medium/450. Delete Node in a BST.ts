// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
// Basically, the deletion can be divided into two stages:
// Search for a node to remove.
// If the node is found, delete the node.

// Example 1:
// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) {
        return null;
    }

    const getMin = (node: TreeNode): TreeNode => {
        while (node.left) node = node.left;
        return node;
    };

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else if (!root.left) {
        return root.right;
    } else if (!root.right) {
        return root.left;
    } else {
        const successor = getMin(root.right);
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }

    return root;
}
