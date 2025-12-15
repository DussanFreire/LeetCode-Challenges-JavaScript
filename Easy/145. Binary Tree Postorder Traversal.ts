// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Explanation:

// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,6,7,5,2,9,8,3,1]
// Explanation:

// Example 3:
// Input: root = []
// Output: []

// Example 4:
// Input: root = [1]
// Output: [1]

// Constraints:
// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 
// Follow up: Recursive solution is trivial, could you do it iteratively?

function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];

    const result: number[] = [];
    const stack: TreeNode[] = [];
    let lastVisited: TreeNode | null = null;
    let current: TreeNode | null = root;

    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        const node = stack[stack.length - 1];

        if (node.right && lastVisited !== node.right) {
            current = node.right;
        } else {
            result.push(node.val);
            lastVisited = stack.pop()!;
        }
    }

    return result;
}
