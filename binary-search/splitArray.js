function minSubarrayReq(nums, max) {
  let currentSum = 0;
  let splitReq = 0;

  for (let num of nums) {
    if (currentSum + num <= max) {
      currentSum += num;
    } else {
      currentSum = num;
      splitReq++;
    }
  }

  return splitReq + 1;
}

function splitArray(nums, k) {
  let sum = 0;
  let max = -Infinity;
  for (let num of nums) {
    sum += num;
    max = Math.max(max, num);
  }

  let left = max;
  let right = sum;
  let minLargestSplitSum = 0;

  while (left <= right) {
    let maxSumAllowed = Math.floor(left + (right - left) / 2);

    if (minSubarrayReq(nums, maxSumAllowed) <= k) {
      right = maxSumAllowed - 1;
      minLargestSplitSum = maxSumAllowed;
    } else {
      left = maxSumAllowed + 1;
    }
  }
  return minLargestSplitSum;
}
