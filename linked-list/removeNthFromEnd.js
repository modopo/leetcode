// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

import ListNode from './listNode.js';


let test = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

function removeNthFromEnd(head, n) {
  let pre = new ListNode(0, head);
  let pt1 = pre, pt2 = head;

  let len = 0;
  while (pt2) {
    len++;
    pt2 = pt2.next;
  }

  len -= n;

  while (len > 0) {
    len--;
    pt1 = pt1.next;
  }

  pt1.next = pt1.next.next;
  return pre;
}

let result = removeNthFromEnd(test, 2);

while (result) {
  console.log(result.val);
  result = result.next;
}

