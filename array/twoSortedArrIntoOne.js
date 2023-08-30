//Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.
//Using two pointers

function mergeArr(arr1, arr2) {
  let result = [];
  
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++
  }

  return result;
};

let arr1 = [1];
let arr2 = [2, 3];

console.log(mergeArr(arr1, arr2));

arr1 = [3,4];
arr2 = [2];

console.log(mergeArr(arr1, arr2));