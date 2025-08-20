// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]

// Example 2:
// Input: inorder = [-1], postorder = [-1]
// Output: [-1]
 
// Constraints:
// 1 <= inorder.length <= 3000
// postorder.length == inorder.length
// -3000 <= inorder[i], postorder[i] <= 3000
// inorder and postorder consist of unique values.
// Each value of postorder also appears in inorder.
// inorder is guaranteed to be the inorder traversal of the tree.
// postorder is guaranteed to be the postorder traversal of the tree.

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (inorder.length === 0 || postorder.length === 0) return null;

    const inorderIndexMap = new Map<number, number>();
    inorder.forEach((val, idx) => inorderIndexMap.set(val, idx));

    let postIndex = postorder.length - 1;

    function helper(left: number, right: number): TreeNode | null {
        if (left > right) return null;

        const rootVal = postorder[postIndex--];
        const root = new TreeNode(rootVal);
        const inorderIndex = inorderIndexMap.get(rootVal)!;

        root.right = helper(inorderIndex + 1, right);
        root.left = helper(left, inorderIndex - 1);

        return root;
    }

    return helper(0, inorder.length - 1);
}
