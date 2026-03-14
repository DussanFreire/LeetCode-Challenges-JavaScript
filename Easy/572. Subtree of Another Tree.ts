// Example 1:
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Example 2:
// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false
 
// Constraints:
// The number of nodes in the root tree is in the range [1, 2000].
// The number of nodes in the subRoot tree is in the range [1, 1000].
// -104 <= root.val <= 104
// -104 <= subRoot.val <= 104

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) return false;

    if (isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(a: TreeNode | null, b: TreeNode | null): boolean {
    if (!a && !b) return true;
    if (!a || !b) return false;
    if (a.val !== b.val) return false;

    return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}
