/**
 * 25. Reverse Nodes in k-Group
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/?source=submission-ac
 *
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
    const dummy = new ListNode();
    dummy.next = head;

    function dfs(node) {
        const queue = [];

        if (!node) {
            return
        }

        let curr = node;

        while (queue.length < k) {
            if (!curr.next) {
                return;
            }
            queue.push(curr.next);
            curr = curr.next;
        }

        const nextHead = queue[queue.length - 1].next;
        let prev = node;

        while (queue.length) {
            prev.next = queue.pop();
            prev = prev.next;
        }

        prev.next = nextHead;

        dfs(prev);
    }

    dfs(dummy);

    return dummy.next
};
