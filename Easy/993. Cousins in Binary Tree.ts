// Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.
// Two nodes of a binary tree are cousins if they have the same depth with different parents.
// Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.

// Example 1:
// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false
// Example 2:
// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true
// Example 3:
// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    if (!root) return false;

    const queue: [TreeNode, TreeNode | null][] = [[root, null]];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let parentX: TreeNode | null = null;
        let parentY: TreeNode | null = null;

        for (let i = 0; i < levelSize; i++) {
            const [node, parent] = queue.shift()!;

            if (node.val === x) parentX = parent;
            if (node.val === y) parentY = parent;

            if (node.left) queue.push([node.left, node]);
            if (node.right) queue.push([node.right, node]);
        }

        if (parentX !== null && parentY !== null) {
            return parentX !== parentY;
        }

        if ((parentX !== null && parentY === null) || (parentX === null && parentY !== null)) {
            return false;
        }
    }

    return false;
}
