// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]

// Constraints:
// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (left === right) return head;
    if (!head) return head;
    const nodeRangeValues = []
    let res = new ListNode(-1, head)
    let startRange
    for (let i = 0; i < right ; i++) {
        if (i + 1 === left) {
            startRange = head;
        }
        if (i + 1 >= left) {
            nodeRangeValues.push(head.val);
        }
        head = head.next
    }

    for (let i = nodeRangeValues.length - 1; i >= 0; i--) {
        startRange.val = nodeRangeValues[i]
        startRange = startRange.next;
    }

    return res.next;
};
