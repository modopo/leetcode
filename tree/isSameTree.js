// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

function isSameTree(p, q) {
  if (!q && !p) {
    return true;
  }

  if (!p || !q || p.val !== q.val) {
    return false;
  };

  let left = isSameTree(p.left, q.left);
  let right = isSameTree(p.right, q.right);

  return left && right;

}