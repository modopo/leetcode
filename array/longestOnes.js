/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
*/

function longestOnes(arr, k) {
  let right = 0,
    left = 0;

  for (right = 0; right < arr.length; right++) {
    if (arr[right] === 0) {
      k--;
    }

    if (k < 0) {
      k += 1 - arr[left];
      left++;
    }
  }

  return right - left;
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));