function answerQueries(nums, queries) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  for (let query of queries) {
    let index = binarySearch(nums, query);
    result.push(index);
  }
  return result;
}

function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid + 1;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return nums[left] > target ? left : left + 1;
}
