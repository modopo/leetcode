// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]

import listNode from "./listNode.js";

let test = new listNode(
  1,
  new listNode(
    2,
    new listNode(
      3,
      new listNode(3, new listNode(4, new listNode(4, new listNode(5))))
    )
  )
);

function removeDuplicates(head) {
  let sent = new listNode(0, head);
  let curr = sent,
    prev = sent;

  while (curr.next && curr.next.next) {
    curr = curr.next;
    if (curr !== null && curr.val === curr.next.val) {
      while (curr.next && curr.val === curr.next.val) {
        curr = curr.next;
      }
      prev.next = curr.next;
    } else {
      prev = prev.next;
    }
  }

  return sent.next;
}

let result = removeDuplicates(test);

while (result) {
  console.log(result.val);
  result = result.next;
}
