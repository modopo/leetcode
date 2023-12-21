// Given the root of a binary tree, imagine yourself standing on the right side of it. Return the values of the nodes you can see ordered from top to bottom.


function rightSideView(root) {
  let queue = [root];
  let ans = [];
  
  while (queue.length) {
    let currentLen = queue.length;
    let next = [];

    ans.push(queue[queue.length - 1].val);

    for (let i = 0; i < currentLen; i++) {
      let node = queue[i];
      if (node.left) {
        next.push(node.left);
      }  
      
      // do not use else if or it'll push right first
      if (node.right) {
        next.push(node.right);
      }
    }

    queue = next;
  }

  return ans;
}