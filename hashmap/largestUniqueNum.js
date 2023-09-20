/*
Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

Example 1:

Input: nums = [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.
Example 2:

Input: nums = [9,9,8,8]
Output: -1
Explanation: There is no number that occurs only once.
*/

function largestUniqueNumber(nums) {
  let count = new Map();

  nums.forEach(number => {
    count.set(number, (count.get(number) || 0) + 1);
  })

  let result = -1;
  for (const key of count.keys()) {
    if (count.get(key) === 1) {
      result = Math.max(result, key);
    }
  }

  return result;
}

console.log(largestUniqueNumber([5,7,3,9,4,9,8,3,1]));