function successfulPairs(spells, potions, success) {
  let result = [];
  potions.sort((a, b) => a - b);

  for (let spell of spells) {
    let low = 0,
      high = potions.length - 1,
      mid = 0;

    let min = Math.ceil(success / spell);
    if (min > potions[high]) {
      result.push(0);
      continue;
    }

    while (low < high) {
      mid = Math.floor((low + high) / 2);

      if (potions[mid] * spell < success) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    result.push(potions.length - low);
  }
  return result;
}
