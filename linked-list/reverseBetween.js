// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

import LinkedList from "./linkedList.js";

let test = new LinkedList();

test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);

function reverseBetween(head, left, right) {

  let curr = head.head;
  let prev = null;

  while (left > 1) {
    prev = curr;
    curr = curr.next;
    left--;
    right--;
  }

  let front = prev, tail = curr;

  let temp = null;
  while (right > 0) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    right--;
  }

  if (front !== null) {
    front.next = prev;
  } else {
    head = prev;
  }

  tail.next = curr;

  return head;
  
}
