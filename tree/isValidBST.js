// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left 
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

function isValidBST(root) {
  let dfs = (node, low, high) => {
    if (!node) {
      return true;
    }

    if (node.val <= low || node.val >= high) {
      return false;
    }

    let left = dfs(node.left, low, node.val);
    let right = dfs(node.right, node.val, high);

    return left && right;
  }

  return dfs(root, -Infinity, Infinity);
}