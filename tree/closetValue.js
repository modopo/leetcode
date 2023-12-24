// Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target. If there are multiple answers, print the smallest.

// Example 1:

// Input: root = [4,2,5,1,3], target = 3.714286
// Output: 4
// Example 2:

// Input: root = [1], target = 4.428571
// Output: 1

function closetValue(root, target) {
  let min = Infinity;
  let closest = [];

  let dfs = (node) => {
    if (!node) {
      return;
    }

    if (Math.abs(node.val - target) <= min) {
      min = Math.abs(node.val - target);
      closest.push({ value: node.val, diff: min });
    }

    if (target < node.val) {
      dfs(node.left);
    } else {
      dfs(node.right);
    }
  };

  dfs(root);

  closest.sort((a, b) => {
    if (a.diff === b.diff) {
      return a.value - b.value;
    } else {
      return a.diff - b.diff;
    }
  });

  return closest[0].value;
}
