
// Given a binary tree, determine if it is height-balanced.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

// Constraints:
// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104


function isBalanced(root: TreeNode | null): boolean {
  function checkBalance(node: TreeNode | null): number {
    if (!node) return 0;

    const leftHeight = checkBalance(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight = checkBalance(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  return checkBalance(root) !== -1;
}
