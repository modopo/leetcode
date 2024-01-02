// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

// test_00
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

function buildGraph(edges) {
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

function undirectedPath(edges, src, dst) {
  let graph = buildGraph(edges);

  return hasPath(graph, src, dst, new Set());
}

function hasPath(graph, src, dst, seen) {
  if (src === dst) {
    return true;
  }

  if (seen.has(src)) {
    return false;
  }

  seen.add(src);
  
  for (let neighbor of graph.get(src)) {
    if (hasPath(graph, neighbor, dst, seen)) {
      return true;
    }
  }

  return false;
}

console.log(undirectedPath(edges, "j", "m")); // -> true
