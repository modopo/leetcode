/*
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
*/

function findMaxAvg(arr, k) {
  let curr = 0;
  for (let i = 0; i < k; i++) {
    curr += arr[i];
  }

  let result = curr;

  for (let i = k; i < arr.length; i++) {
    curr += arr[i] - arr[i - k];
    result = Math.max(curr, result);
  }

  return result/k;
}

console.log(findMaxAvg([1, 12, -5, -6, 50, 3], 4));