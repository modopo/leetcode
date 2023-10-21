import ListNode from './listNode.js';

let test = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));

function isPalindrome(head) {
  let p1 = head, p2 = head;
  
  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  let reversed = reverse(p1);

  while (head && reversed) {
    if (head.val !== reversed.val) {
      return false;
    }
    head = head.next;
    reversed = reversed.next;
  }

  return true;
}

function reverse(head) {
  let prev = null, curr = head;

  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
}


console.log(isPalindrome(test));