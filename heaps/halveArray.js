import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function halveArray(nums) {
  let maxHeap = new MaxPriorityQueue();

  let sum = 0;

  for (let num of nums) {
    maxHeap.enqueue(num);
    sum += num;
  }

  let curr = sum;
  let steps = 0;

  while (curr > sum / 2) {
    let highest = maxHeap.dequeue().element / 2;
    steps++;

    curr -= highest;
    maxHeap.enqueue(highest);
  }

  return steps;
}
