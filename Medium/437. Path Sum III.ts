// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.
// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

// Example 1:
// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.

// Example 2:
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: 3

// Constraints:
// The number of nodes in the tree is in the range [0, 1000].

function pathSum(root: TreeNode | null, targetSum: number): number {
  const prefixSum = new Map<number, number>();
  prefixSum.set(0, 1);

  function dfs(node: TreeNode | null, currentSum: number): number {
    if (!node) return 0;

    currentSum += node.val;
    const needed = currentSum - targetSum;
    let count = prefixSum.get(needed) ?? 0;

    prefixSum.set(currentSum, (prefixSum.get(currentSum) ?? 0) + 1);

    count += dfs(node.left, currentSum);
    count += dfs(node.right, currentSum);

    prefixSum.set(currentSum, prefixSum.get(currentSum)! - 1); // backtrack

    return count;
  }

  return dfs(root, 0);
}
