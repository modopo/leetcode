// Given the root of a binary tree, return the sum of values of its deepest leaves.

// Example 1:

// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
// Example 2:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19

function deepestLeavesSum(root) {
  if (!root) {
    return 0;
  }
  
  let queue = [root];
  let sum = 0;

  while (queue.length) {
    let len = queue.length;
    let next = [];
    sum = 0;

    for (let i = 0; i < len; i++) {
      let node = queue[i];
      sum += node.val;

      if (node.left) {
        next.push(node.left);
      }

      if (node.right) {
        next.push(node.right);
      }
    }

    queue = next;
  }

  return sum;
}