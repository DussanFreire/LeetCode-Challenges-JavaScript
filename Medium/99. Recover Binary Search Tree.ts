// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

// Example 1:
// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.

// Example 2:
// Input: root = [3,1,4,null,null,2]
// Output: [2,1,4,null,null,3]
// Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.

// Constraints:
// The number of nodes in the tree is in the range [2, 1000].
// -231 <= Node.val <= 231 - 1
 
// Follow up: A solution using O(n) space is pretty straight-forward. Could you devise a constant O(1) space solution?


function recoverTree(root: TreeNode | null): void {
    let first: TreeNode | null = null;
    let second: TreeNode | null = null;
    let prev: TreeNode | null = null;

    let current: TreeNode | null = root;

    while (current) {
        if (!current.left) {
            if (prev && prev.val > current.val) {
                if (!first) first = prev;
                second = current;
            }
            prev = current;
            current = current.right;
        } else {
            let predecessor = current.left;
            while (predecessor.right && predecessor.right !== current) {
                predecessor = predecessor.right;
            }

            if (!predecessor.right) {
                predecessor.right = current;
                current = current.left;
            } else {
                predecessor.right = null;
                if (prev && prev.val > current.val) {
                    if (!first) first = prev;
                    second = current;
                }
                prev = current;
                current = current.right;
            }
        }
    }

    if (first && second) {
        [first.val, second.val] = [second.val, first.val];
    }
}
