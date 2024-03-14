/**
 * 19. Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    function getLength(node, length) {
        if (node === null) {
            return length;
        }

        return getLength(node.next, length + 1);
    }

    const len = getLength(head, 0);

    let newHead = head;

    function dfs(prev, curr, index) {
        if (index === len - n) {
            if (prev === null) {
                newHead = curr.next;
            } else {
                prev.next = curr.next;
            }
            return;
        }

        dfs(curr, curr.next, index + 1);
    }

    dfs(null, newHead, 0);

    return newHead;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 이게 시간복잡도와 공간복잡도가 개선된 버전
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const start = new ListNode();
    start.next = head;
    let slow = start, fast = start;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    if (!fast) return head.next;

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return start.next;
};
