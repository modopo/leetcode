import LinkedList from "./linkedList.js";

let test = new LinkedList();

test.add(4);
test.add(2);
test.add(3);
test.add(5);

function pairSum(head) {

  let front = head.head;
  let slow = front;
  let fast = front;
  let middle = 0;

  while (fast && fast.next) {
    middle++;
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  while (slow) {
    let nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode; 
  }

  let result = 0;
  while (middle) {
    result = Math.max(front.val + prev.val, result);
    front = front.next;
    prev = prev.next;
    middle--;
  }

  return result;
}

console.log(pairSum(test));