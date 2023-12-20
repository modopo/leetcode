// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

// Example 1:

// Input: root = [1,3,2,5,3,null,9]
// Output: [1,3,9]
// Example 2:

// Input: root = [1,2,3]
// Output: [1,3]

// Constraints:

// The number of nodes in the tree will be in the range [0, 104].
// -231 <= Node.val <= 231 - 1

function largestValue(root) {  
  if (!root) {
    return [];
  }
  
  let queue = [root];
  let maxVal = [root.val];

  while (queue.length) {
    let len = queue.length;
    let next = [];
    let currMax = -Infinity;

    for (let i = 0; i < len; i++) {
      let node = queue[i];

      currMax = Math.max(node.val, currMax);
      if (node.left) {
        next.push(node.left);
      }

      if (node.right) {
        next.push(node.right);
      }
    }

    maxVal.push(currMax);
    queue = next;
  }

  return maxVal;
}