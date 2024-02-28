function maximizeSweetness(sweetness, k) {
  let total = sweetness.reduce((a, b) => a + b, 0);
  let left = 1;
  let right = Math.floor(total / (k + 1));

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let chunk = 0;
    let cut = 0;

    for (let piece of sweetness) {
      chunk += piece;
      if (chunk >= mid) {
        cut++;
        chunk = 0;
      }
    }
    if (cut > k) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
