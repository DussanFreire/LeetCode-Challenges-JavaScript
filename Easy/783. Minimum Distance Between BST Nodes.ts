// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

// Example 1:
// Input: root = [4,2,6,1,3]
// Output: 1

// Example 2:
// Input: root = [1,0,48,null,null,12,49]
// Output: 1

// Constraints:
// The number of nodes in the tree is in the range [2, 100].
// 0 <= Node.val <= 105

function minDiffInBST(root: TreeNode | null): number {
    let minDiff = Infinity;
    let prevValue: number | null = null;

    const inorder = (node: TreeNode | null): void => {
        if (!node) return;

        // Visit left subtree
        inorder(node.left);

        // Process current node
        if (prevValue !== null) {
            minDiff = Math.min(minDiff, node.val - prevValue);
        }
        prevValue = node.val;

        // Visit right subtree
        inorder(node.right);
    };

    inorder(root);
    return minDiff;
}
