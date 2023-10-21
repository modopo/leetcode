// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]

import ListNode from './listNode.js';

let test = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

function swapNodes(head, k) {
  let sent = new ListNode(0, head);
  let p1 = sent, p2 = sent;

  let len = 0;
  while (p2) {
    len++;
    p2 = p2.next;
  }

  len -= k;
  p2 = sent;

  while (len > 0) {
    len--;
    p2 = p2.next;
  }

  while (k > 0) {
    k--;
    p1 = p1.next;
  }

  let temp = p1.val;

  p1.val = p2.val;
  p2.val = temp;

  return head;
}

let result = swapNodes(test, 2);

while (result) {
  console.log(result.val);
  result = result.next;
}
