// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

import ListNode from "./listNode.js";

let test = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))

function oddEvenList(head) {
  let evenHead = new ListNode(0), oddHead = new ListNode(0);
  let even = evenHead, odd = oddHead;
  let curr = head;

  let counter = 1;

  while (curr) {
    if (counter % 2 === 1) {
      odd.next = curr;
      odd = curr;;
    } else {
      even.next = curr;
      even = curr;
    }
    curr = curr.next;
    counter++;
  }

  if (!odd.next) {
    even.next = null;
  }

  odd.next = evenHead.next;

  return oddHead.next;
}

let result = oddEvenList(test);

while (result) {
  console.log(result.val);
  result = result.next;
}