import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function connectSticks(sticks) {
  let cost = 0;
  if (sticks.length === 1) {
    return cost;
  }

  let minpq = new MinPriorityQueue();

  for (let stick of sticks) {
    minpq.enqueue(stick);
  }

  while (minpq.size() !== 1) {
    let s1 = minpq.dequeue().element;
    let s2 = minpq.dequeue().element;

    cost += s1 + s2;

    minpq.enqueue(s1 + s2);
  }

  return cost;
}
