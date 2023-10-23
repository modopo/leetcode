// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

import ListNode from "./listNode.js";

let test = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(4, new ListNode(2)))));

function removeElements(head, val) {
  let sent = new ListNode(0, head);
  let prev = sent, curr = head;

  while (curr){
    let nextNode = curr.next;
    
    if (curr.val === val) {
      prev.next = nextNode;
      curr = curr.next;
    } else {
      curr = curr.next;
      prev = prev.next;
    }
  }

  head = sent.next;
  return head;
}

let result = removeElements(test, 2);

while (result) {
  console.log(result.val);
  result = result.next;
}