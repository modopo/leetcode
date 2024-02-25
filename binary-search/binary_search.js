function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      console.log("target hit");
      return mid;
    }

    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
