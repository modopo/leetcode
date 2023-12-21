// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

function zigzagLevelOrder(root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  let result = [];
  let leftToRight = true;

  while (queue.length) {
    let current = queue.length;
    let currentLevel = [];
    let next = [];

    for (let i = 0; i < current; i++) {
      let node = queue[i];

      currentLevel.push(node.val);
      if (node.left) {
        next.push(node.left);
      }

      if (node.right) {
        next.push(node.right);
      }
    }

    if (!leftToRight) {
      currentLevel.reverse();
    }

    result.push(currentLevel);

    leftToRight = !leftToRight;
    queue = next;
  }

  return result;
}