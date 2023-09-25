/*
Minimum Consecutive Cards to Pick Up

Given an integer array cards, find the length of the shortest subarray that contains at least one duplicate. If the array has no duplicates, return -1.
*/

function minCardPickup(cards) {
  let distance = new Map();

  for (let i = 0; i < cards.length; i++) {
    if (!distance.has(cards[i])) {
      distance.set(cards[i], []);
    }

    distance.get(cards[i]).push(i);
  }

  let result = Infinity;

  for (const [key, arr] of distance) {
    console.log(key);
    console.log(arr);
    for (let i = 0; i < arr.length - 1; i++) {
      result = Math.min(result, arr[i + 1] - arr[i] + 1);
    }
  }

  return result;
}

console.log(minCardPickup([1, 2, 6, 2, 1]));