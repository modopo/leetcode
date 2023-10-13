// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

var sumOfUnique = function(nums) {
  let count = new Map();

  for (const number of nums) {
    count.set(number, (count.get(number) || 0) + 1);
  }

  let result = 0;

  for (const [key, value] of count.entries()) {
    if (value === 1) {
      result += key;
    }
  }

  return result;
}

console.log(sumOfUnique([1,2,3,2]));