// Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
// If the tree has more than one mode, return them in any order.
// Assume a BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
 
// Example 1:
// Input: root = [1,null,2,2]
// Output: [2]

// Example 2:
// Input: root = [0]
// Output: [0]
 
// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105
function findMode(root: TreeNode | null): number[] {
    const modes: number[] = [];

    let currentValue: number | null = null;
    let currentCount = 0;
    let maxCount = 0;

    function inorder(node: TreeNode | null): void {
        if (!node) return;

        inorder(node.left);

        if (currentValue === node.val) {
            currentCount++;
        } else {
            currentValue = node.val;
            currentCount = 1;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            modes.length = 0;
            modes.push(node.val);
        } else if (currentCount === maxCount) {
            modes.push(node.val);
        }

        inorder(node.right);
    }

    inorder(root);
    return modes;
}
