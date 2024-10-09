// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [1]
// Output: [1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const dummy = new ListNode(-1, head);
    let prev = dummy, first = head;

    while (first && first.next) {
        const second = first.next;
        const third = second.next;

        second.next = first;
        first.next = third;
        prev.next = second;

        prev = first;
        first = third;
    }

    return dummy.next;
};

// Second option
// var swapPairs= function (head) {
//     let dummy = new ListNode(-1);
//     const res = dummy;

//     while (head) {
//         if (head.next) {
//             dummy.next = new ListNode(head.next.val, new ListNode(head.val, null))
//             dummy = dummy.next
//             head = head.next
//         } else {
//             dummy.next = new ListNode(head.val, null)
//         }
//         dummy = dummy.next
//         head = head.next
//     }

//     return res.next;
// };


//Not valid because it changes the values
// var swapPairs= function(head) {
//     let dummy = new ListNode(-1,head);
//     const res = dummy;
//     while(head){
//         if(head.next){
//             const aux = head.val
//             head.val = head.next.val
//             head.next.val = aux
//         }
//         head = head.next?.next
//     }

//     return res.next;
// };
