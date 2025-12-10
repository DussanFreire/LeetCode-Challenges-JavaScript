// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Example 2:
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5
 
// Constraints:
// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000

function minDepth(root: TreeNode | null): number {
    if (!root) return 0;

    const queue: Array<{ node: TreeNode; depth: number }> = [
        { node: root, depth: 1 }
    ];

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!;

        const isLeaf = !node.left && !node.right;
        if (isLeaf) return depth;

        if (node.left) queue.push({ node: node.left, depth: depth + 1 });
        if (node.right) queue.push({ node: node.right, depth: depth + 1 });
    }

    return 0;
}
