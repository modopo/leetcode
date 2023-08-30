function reverseArr(arr) {
  let s = 0;
  let t = arr.lenght - 1;

  while (s < t) {
    let temp = arr[s];
    arr[s] = arr[t];
    arr[t] = temp;

    s++;
    t--;
  }

  return arr;
}

let test = ['a', 'b', 'c', 'd', 'e'];

console.log(reverseArr(test));