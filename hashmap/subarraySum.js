/*
Given an integer array nums and an integer k, find the number of subarrays whose sum is equal to k.
*/

function subarraySum(nums, k) {
  let current = 0, result = 0;
  let map = new Map([[0, 1]]);

  for (number of nums) {
    current += number;
    result += map.get(current - k) || 0;
    map.set(current, (map.get(current) || 0) + 1);
  }

  return result;
}

subarraySum([1,2,3], 5);