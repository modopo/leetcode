import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function KthLargest(k, nums) {
  this.minpq = new MinPriorityQueue();
  this.k = k;

  for (let num of nums) {
    this.minpq.enqueue(num);
  }

  while (this.minpq.size() > k) this.minpq.dequeue();
}

KthLargest.prototype.add = function (val) {
  this.minpq.enqueue(val);
  if (this.minpq.size() > this.k) this.minpq.dequeue();

  return this.minpq.front().element;
};
