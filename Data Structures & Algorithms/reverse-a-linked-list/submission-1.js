/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    // reverseList(head) {
    //     let prev = null, curr = head

    //     while (curr) {
    //         let next = curr.next;
    //         curr.next = prev;
    //         prev = curr;
    //         curr = next
    //     }
    //     return prev;
    // }

 reverseList(head) {
  if (!head || !head.next) return head;

  const newHead = this.reverseList(head.next); // recurse until last node

  head.next.next = head; // reverse pointer
  head.next = null;      // break original link

  return newHead;        // always return the new head
}
}
