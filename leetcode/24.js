/**
 * 24. Swap Nodes in Pairs
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
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
    if (!head || !head.next) {
        return head;
    }

    const dummy = new ListNode(0, head);

    function swap(first, second, third) {
        first.next = third;
        second.next = third.next;
        third.next = second;

        if (!second.next || !second.next.next) {
            return;
        }

        swap(second, second.next, second.next.next)
    }

    swap(dummy, dummy.next, dummy.next.next);

    return dummy.next;
};
