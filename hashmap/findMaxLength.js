// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

function findMaxLength(nums) {
  const map = new Map();
  map.set(0, -1);

  let maxLen = 0, count = 0;

  for (let i = 0; i < nums.length; i++) {
    count = count + (nums[i] === 1 ? 1 : -1);
    if (map.has(count)) {
      maxLen = Math.max(maxLen, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }

  return maxLen;
}

console.log(findMaxLength([0, 1, 0, 0, 1, 0]));

