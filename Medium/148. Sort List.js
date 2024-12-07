// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:
// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -10^5 <= Node.val <= 10^5

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
var sortList = function (head) {
    const listValues = getValuesFromList(head);
    listValues.sort((a, b) => a - b)
    const answer = setValuesIntoList(listValues,head);

    return answer;
};

function getValuesFromList(root) {
    const values = [];
    let dummy = root;

    while (dummy) {
        values.push(dummy.val)
        dummy = dummy.next;
    }

    return values;
}

function setValuesIntoList(values,head) {
    const answer = new ListNode(-1, head)

    for (let i = 0; i < values.length; i++) {
        head.val = values[i];
        head = head.next;
    }

    return answer.next; 

}
