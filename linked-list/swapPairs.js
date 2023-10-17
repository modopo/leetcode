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

  let result = head.head.next;

  while (curr && curr.next) {
    let next = curr.next.next;

    prev = curr;
    curr = curr.next;

    curr.next = prev;
    prev.next = next;

    curr = next;
  }

  while (result) {
    console.log(result.val);
    result = result.next;
  }

  return result;
}

swapPairs(test);
