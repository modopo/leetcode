function minSpeedOnTime(dist, hour) {
  if (dist.length > Math.ceil(hour)) {
    return -1;
  }

  let check = (k) => {
    let time = 0;
    for (let d of dist) {
      time = Math.ceil(time);
      time += d / k;
    }

    return time <= hour;
  };

  let left = 1,
    right = Math.pow(10, 7);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
