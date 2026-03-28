// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

// Example 1:
// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true

// Example 2:
// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -104 <= Node.val <= 104
// root is guaranteed to be a valid binary search tree.
// -105 <= k <= 105

function findTarget(root: TreeNode | null, k: number): boolean {
    const seenValues = new Set<number>();
    
    const traverse = (node: TreeNode | null): boolean => {
        if (!node) return false;
        
        const complement = k - node.val;
        
        if (seenValues.has(complement)) {
            return true;
        }
        
        seenValues.add(node.val);
        
        return traverse(node.left) || traverse(node.right);
    };
    
    return traverse(root);
}
