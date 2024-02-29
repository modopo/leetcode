function guessNumber(n) {
  let left = 0,
    right = n;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (guess(mid) === 0) {
      return mid;
    }

    if (guess(mid) === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}
