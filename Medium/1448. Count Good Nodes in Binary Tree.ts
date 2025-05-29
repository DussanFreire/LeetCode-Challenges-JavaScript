// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.

// Example 1:
// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

function goodNodes(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, maxSoFar: number): number {
        if (!node) return 0;

        const {val,right,left} = node;
        let isGood = val >= maxSoFar ? 1 : 0;
        const newMax = Math.max(maxSoFar, val);

        return (isGood + dfs(left, newMax) + dfs(right, newMax));
    }

    if (!root) return 0;

    return dfs(root, root.val);
}
