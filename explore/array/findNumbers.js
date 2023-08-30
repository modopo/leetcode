/* Given an array nums of integers, return how many of them contain an even number of digits.

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.

forEach number in the array,

*/

function findNumber(arr) {
  let result = 0;

  arr.forEach(number => {
    let counter = 0;

    while (number >= 1) {
      number = number / 10;
      counter++
    }

    if (counter % 2 === 0) {
      result++;
    }
  });

  return result;
}

console.log(findNumber([555,901,482,1771]));
console.log(findNumber([12,345,2,6,7896]));