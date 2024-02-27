function minEatingSpeed(piles, h) {
  let left = 1,
    right = 1;

  for (let pile of piles) {
    right = Math.max(pile, right);
  }

  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    let timeSpent = 0;

    for (let pile of piles) {
      timeSpent += Math.ceil(pile / mid);
    }

    if (timeSpent <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
