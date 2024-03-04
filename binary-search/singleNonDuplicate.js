function singleNonDuplicate(nums) {
  let left = 0,
    right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (mid % 2 !== 0) mid--;

    let curr = nums[mid];

    if (curr !== nums[mid + 1] && curr !== nums[mid - 1]) {
      return curr;
    }

    if (curr === nums[mid - 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
}
