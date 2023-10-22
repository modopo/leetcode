import ListNode from "./listNode.js";

let test = new ListNode(4, new ListNode(2, new ListNode(3, new ListNode(6))));

function pairSum(head) {
  let slow = head, fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  };


}