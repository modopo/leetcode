function closestNodes(root, queries) {
  let arr = [];
  const traverse = (node) => {
    if (!node) return null;

    traverse(node.left);
    arr.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  let result = [];
  for (let elem of queries) {
    let min = arr[0] > elem ? -1 : findMin(arr, elem);
    let max = arr[arr.length - 1] < elem ? -1 : findMax(arr, elem);

    result.push([min, max]);
  }

  return result;
}

function findMin(arr, target) {
  let left = 0,
    right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return arr[mid];

    if (arr[mid] < target) {
      result = arr[mid];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

function findMax(arr, target) {
  let left = 0,
    right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return arr[mid];

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      result = arr[mid];
      right = mid - 1;
    }
  }
  return result;
}
