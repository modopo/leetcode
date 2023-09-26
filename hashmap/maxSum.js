/*
Max Sum of a Pair With Equal Sum of Digits

Given an array of integers nums, find the maximum value of nums[i] + nums[j], where nums[i] and nums[j] have the same digit sum (the sum of their individual digits). Return -1 if there is no pair of numbers with the same digit sum.
*/

function maxSum(nums) {
  let sums = new Map();

  let getDigitSum = (num) => {
    let sum = 0;

    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    return sum;
  };

  let result = -1;

  for (number of nums) {
    let sum = getDigitSum(number);

    if (sums.has(sum)) {
      result = Math.max(result, number + sums.get(sum))
    }

    sums.set(sum, Math.max(sums.get(sum) || 0, number));
  }

  return result;
}