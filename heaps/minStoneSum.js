import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function minStoneSum(piles, k) {
  let maxpq = new MaxPriorityQueue();

  for (let stone of piles) {
    maxpq.enqueue(stone);
  }
  let sum = 0;

  while (k) {
    let high = Math.ceil(maxpq.dequeue().element / 2);
    maxpq.enqueue(high);
    k--;
  }

  maxpq.toArray().forEach((elem) => {
    sum += elem.element;
  });

  return sum;
}
