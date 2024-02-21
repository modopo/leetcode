mport { MinPriorityQueue } from "@datastructures-js/priority-queue";

function findClosestElements(arr, k, x) {
  let minpq = new MinPriorityQueue({
    compare: (a, b) => {
      let diffA = Math.abs(a - x);
      let diffB = Math.abs(x - b);

      if (diffA === diffB) {
        return a > b;
      } else {
        return diffA > diffB; 
      }
    }
  });

  for (let num of arr) {
    minpq.enqueue(num);
  };
 
  let result = [];

  for (let i = 0; i < k; i++) {
    result.push(minpq.dequeue());
  };

  return result.sort((a, b) => a - b);
};
