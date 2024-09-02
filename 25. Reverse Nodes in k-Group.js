// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const res = new ListNode(-1, head);
    let pivot = res;

    while (head) {
        let groupStart = head;
        const groupEnd = getGroupEnd(head, k);

        if (!groupEnd)
            return res.next;

        pivot.next = reverseList(groupStart, groupEnd.next);
        pivot = groupStart;
        head = pivot.next;
    }
    return res.next;
}

function getGroupEnd(head, k) {
    while (head && k > 1) {
        head = head.next;
        k--;
    }
    return head;
}

function reverseList(head, stop) {
    let prev = stop;
    while (head !== stop) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
