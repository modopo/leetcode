import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function kClosest(points, k) {
  let minpq = new MinPriorityQueue();

  for (let point of points) {
    let dist = Math.sqrt(point[0] ** 2 + point[1] ** 2);
    minpq.enqueue(point, dist);
  }
  let result = [];

  while (result.length < k) {
    result.push(minpq.dequeue().element);
  }

  return result;
}
