/* Given a binary array nums, return the maximum number of consecutive 1's in the array.

Input: nums = [1,1,0,1,1,1]
Output: 3

counter to start counter when encountering a 1
+= 1 for every next 1,
compare to result, which will keep the highest consecutives
replace if higher,
reset counter when not encountering 1
*/

const findMaxConsOne = (arr) => {
  let result = 0;
  let counter = 0;

  arr.forEach(number => {
    if (number === 1) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > result) {
      result = counter;
    }
  })

  return result;
}

console.log(findMaxConsOne([1,1,0,1,1,1]));