function maxDistance(nums1, nums2) {
  let m = nums1.length,
    n = nums2.length;
  let ans = 0;

  for (let i = 0; i < m; i++) {
    let k = bSearch(nums2, nums1[i]);
    if (k > i) {
      ans = Math.max(ans, k - i);
    }
  }
  return ans;
}

function bSearch(arr, num) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < num) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left - 1;
}
