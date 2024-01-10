// Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

// You can return the answer in any order.

// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
// Output: [7,4,1]
// Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
// Example 2:

// Input: root = [1], target = 1, k = 3
// Output: []

function distanceK(root, target, k) {
  dfs(root, null);

  let queue = [[target, 0]];
  let seen = new Set([target]);
  let result = [];

  while (queue.length) {
    let [current, dist] = queue.shift();

    if (dist === k && current !== null) {
      result.push(current.val);
    }

    for (let neighbor of [current.left, current.right, current.parent]) {
      if (neighbor && !seen.has(neighbor)) {
        seen.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }

  return result;
}

function dfs(node, parent) {
  if (!node) {
    return;
  }

  node.parent = parent;
  dfs(node.left, node);
  dfs(node.right, node);
}
