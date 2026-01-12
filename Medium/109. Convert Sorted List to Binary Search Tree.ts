// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Example 1:
// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
  
// Example 2:
// Input: head = []
// Output: []
 
// Constraints:
// The number of nodes in head is in the range [0, 2 * 104].
// -105 <= Node.val <= 105
 function sortedListToBST(head: ListNode | null): TreeNode | null {
    const size = getListSize(head);
    let current = head;

    function buildBST(left: number, right: number): TreeNode | null {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);

        const leftChild = buildBST(left, mid - 1);

        const node = new TreeNode(current!.val);
        node.left = leftChild;

        current = current!.next;

        node.right = buildBST(mid + 1, right);

        return node;
    }

    return buildBST(0, size - 1);
}

function getListSize(head: ListNode | null): number {
    let count = 0;
    while (head) {
        count++;
        head = head.next;
    }
    return count;
}

