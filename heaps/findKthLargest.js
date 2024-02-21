import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function findKthLargest(nums, k) {
  let maxpq = new MaxPriorityQueue();

  for (let num of nums) {
    maxpq.enqueue(num);
  }

  let result = 0;

  while (k > 0) {
    result = maxpq.dequeue().element;
    k--;
  }

  return result;
}
