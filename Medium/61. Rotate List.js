// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Example 2:
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:
// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 10^9


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
var rotateRight = function (head, k) {
    if (!head) return head;
    if (head.next === null) return head;

    let listLength = getListLength(head);

    k = k % listLength;
    
    if (k === 0) return head;

    let node = head;
    for (let i = 0; i < listLength - k - 1; i++) {
        node = node.next;
    }

    let newHead = node.next;
    node.next = null;

    let tail = newHead;
    while (tail.next) {
        tail = tail.next;
    }
    tail.next = head;

    return newHead;
};

var getListLength = function (node) {
    let n = 0;
    while (node) {
        node = node.next;
        n++;
    }
    return n;
};
