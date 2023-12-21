//BFS (breadth-first search) of a binary tree

function bfs(root) {
  let queue = [root];
  while (queue.length) {
    let current = queue.length;
    let nextQueue = [];

    for (let i = 0; i < current; i++) {
      let node = queue[i];

      //do some logic before add the childs to the queue;
      console.log(node.val);

      if (node.left) {
        queue.push(node.left);
      } else if (node.right) {
        nextQueue.push(node.right);
      }

    }

    queue = nextQueue;
  }
}