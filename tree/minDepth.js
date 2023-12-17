// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

function minDepth(root) {
  let dfs = node => {
    if (!node) {
      return 0;
    }

    if(!node.left) {
      return 1 + dfs(node.right);
    }

    if(!node.right) {
      return 1 + dfs(node.left);
    }

    return 1 + Math.min(dfs(node.left), dfs(node.right));

  }

  return dfs(root);
}