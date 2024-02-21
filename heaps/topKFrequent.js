import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function topKFrequent(nums, k) {
  let minpq = new MinPriorityQueue();
  let map = new Map();
  let result = [];

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [num, freq] of map) {
    minpq.enqueue(num, freq);
  }

  while (minpq.size() > k) {
    minpq.dequeue();
  }

  for (let i = 0; i < k; i++) {
    result.push(minpq.dequeue().element);
  }

  return result;
}
