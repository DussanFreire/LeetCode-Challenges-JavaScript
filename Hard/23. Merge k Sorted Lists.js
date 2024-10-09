// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    let step = 1;
    while (step < lists.length) {
        for (let i = 0; i < lists.length - step; i += step * 2) {
            lists[i] = merge2Lists(lists[i], lists[i + step]); 
        }
        step *= 2;
    }
    return lists[0]; 
};


function merge2Lists(head1, head2) {
    const dummy = new ListNode(-1);
    let prev = dummy;

    while (head1 && head2) {
        if (head1.val <= head2.val) {
            prev.next = head1;
            head1 = head1.next;
        } else {
            prev.next = head2;
            head2 = head2.next;
        }
        prev = prev.next;
    }

    if (head1) prev.next = head1;
    else prev.next = head2;

    return dummy.next;
}
