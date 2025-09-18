// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false
 
// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?
function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;
    
    while (curr) {
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    let first: ListNode | null = head;
    let second: ListNode | null = prev;

    while (second) {
        if (first!.val !== second.val) return false;
        first = first!.next;
        second = second.next;
    }

    return true;
}
