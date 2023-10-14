// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

;
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

import LinkedList from "./linkedList.js";

const test = new LinkedList();
test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);


function middleNode(head) {
  let slow = head.head;
  let fast = head.head;

  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next
  }
  return slow;
}

console.log(middleNode(test));

