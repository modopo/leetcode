import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function lastStoneWeight(stones) {
  let mpq = new MaxPriorityQueue();

  for (let stone of stones) {
    mpq.enqueue(stone);
  }

  while (mpq.size() > 1) {
    let s1 = mpq.dequeue();
    let s2 = mpq.dequeue();

    console.log(typeof s1);
    if (s1 !== s2) {
      mpq.enqueue(s1 - s2);
    }
  }

  return mpq.size() === 0 ? 0 : mpq.dequeue();
}

console.log(lastStoneWeight([4, 2, 3, 5]));
