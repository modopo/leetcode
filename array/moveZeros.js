/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

function moveZeros(nums) {
  let right = 0, left = 0;

  while (left < nums.length) {
    if (nums[left] !== 0) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;

      right++;
    }

    left++;
  }

  return nums;
}

function moveZerosByDestructuring(nums) {
  let right = 0, left = 0;

  while (left < nums.length) {
    if (nums[left] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right++;
    }

    left++;
  }

  return nums;
}

console.log(moveZeros([0,1,2,0,14]));
console.log(moveZerosByDestructuring([0,0,2,5,0,15,0]));