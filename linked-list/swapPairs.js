import LinkedList from "./linkedList.js";

const test = new LinkedList();

test.add(1);
test.add(2);
test.add(3);
test.add(4);
// test.add(5);
// test.add(6);
// test.add(7);

function swapPairs(head) {
  if (!head.head || !head.head.next) {
    return head;
  }

  let prev = null;
  let curr = head.head;

  let result = curr.next;

  while (curr && curr.next) {
    let nextNode = curr.next.next;
    
    prev = curr;
    curr.next.next = curr;
    curr.next = nextNode;
    curr = nextNode;
  }
  return result;
}

console.log(swapPairs(test));
