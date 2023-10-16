import LinkedList from "./linkedList.js";

const test = new LinkedList();

test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);
test.add(6);

function reverseList(head) {
    let prev = null;
    let curr = head.head;

    console.log(curr);

    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
}

console.log(reverseList(test));