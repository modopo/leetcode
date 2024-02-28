function smallestDivisor(nums, threshold) {
  let divSum = (nums, divisor) => {
    let result = 0;
    for (let num of nums) {
      result += Math.ceil((1.0 * num) / divisor);
    }
    return result;
  };

  let left = 1,
    right = 1,
    ans = -1;
  for (let num of nums) {
    right = Math.max(right, num);
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let result = divSum(nums, mid);

    if (result <= threshold) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}
