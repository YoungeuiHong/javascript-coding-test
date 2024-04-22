/**
 * 141. Linked List Cycle
 * https://leetcode.com/problems/linked-list-cycle/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slow = null;
    let fast = head;

    while (fast && fast.next) {
        if (slow) {
            slow = slow.next;
        } else {
            slow = head.next;
        }
        fast = fast.next.next;
        if (slow === fast) return true;
    }

    return false;
};
