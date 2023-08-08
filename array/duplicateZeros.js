function duplicateZeros(arr) {
    for (var idx = 0; idx < arr.length; idx++) {
        if (arr[idx] === 0) {
            arr.splice(idx, 0, 0);
        }
    }
    return arr;
}
console.log(duplicateZeros([0, 1]));
