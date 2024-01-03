// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

function shortestPath(edges, nodeA, nodeB) {
  let seen = new Set(nodeA);
  let graph = createGraph(edges);
  let queue = [[nodeA, 0]];

  while (queue.length) {
    let [current, dist] = queue.shift();
    
    if (current === nodeB) {
      return dist;
    }

    for (let neighbor of graph.get(current)) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }

  return -1;
};

function createGraph(edges) {
  let graph = new Map();

  for (let edge of edges) {
    let [a, b] = edge;

    if (!graph.has(a)) {
      graph.set(a, []);
    }
    if (!graph.has(b)) {
      graph.set(b, []);
    }

    graph.get(a).push(b);
    graph.get(b).push(a);
  }

  return graph;
}
