// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

// Example 1:
// Input: n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

// Example 2:
// Input: n = 1
// Output: [[1]]

// Constraints:
// 1 <= n <= 8

function generateTrees(n: number): Array<TreeNode | null> {
    if (n === 0) return [];

    const buildTrees = (start: number, end: number): Array<TreeNode | null> => {
        const res: Array<TreeNode | null> = [];
        if (start > end) {
            res.push(null);
            return res;
        }

        for (let i = start; i <= end; i++) {
            const leftTrees = buildTrees(start, i - 1);
            const rightTrees = buildTrees(i + 1, end);

            for (const left of leftTrees) {
                for (const right of rightTrees) {
                    const root = new TreeNode(i);
                    root.left = left;
                    root.right = right;
                    res.push(root);
                }
            }
        }

        return res;
    };

    return buildTrees(1, n);
}
