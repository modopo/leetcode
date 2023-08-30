/*
Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.
*/

function minStartValue(nums) {
  let total = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[0];
    result = Math.min(result, total);
  }

  return -result + 1;

  
}