/*
Given an integer array nums, find the number of ways to split the array into two parts so that the first section has a sum greater than or equal to the sum of the second section. The second section should have at least one number.
*/

function waysToSplitArray(nums) {
  let prefix = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }

  let result = 0;

  for (let i = 0; i < prefix.length - 1; i++) {
    let left = prefix[i];
    let right = prefix[prefix.length - 1] - prefix[i];
    if (left >= right) {
      result++;
    }
  }

  return result;
}

console.log(waysToSplitArray([10, 4, -8, 7]));