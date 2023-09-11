// Given a 2D array nums that contains n arrays of distinct integers, return a sorted array containing all the numbers that appear in all n arrays.

// For example, given nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]], return [3, 4]. 3 and 4 are the only numbers that are in all arrays.

function intersection(nums) {
  let count = new Map();
  let result = [];

  for (let arr of nums) {
    for (let number of arr) {
      count.set(number, (count.get(number) || 0) + 1);
    }
  }

  for (let entry of count.entries()) {
    let [key, value] = entry;

    if (value === nums.length) {
      result.push(key);
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(
  intersection([
    [1, 2, 3],
    [2, 3],
    [2, 3, 5],
  ])
);

console.log(
  intersectionEvery([
    [1, 2, 3],
    [2, 3],
    [2, 3, 5],
  ])
);

function intersectionEvery(nums) {
  let result = [];

  for (let i = 0; i < nums[0].length; i++) {
    if (nums.every(arr => arr.includes(nums[0][i]))) {
      result.push(nums[0][i]);
    }
  }

  return result.sort((a, b) => a - b);
};