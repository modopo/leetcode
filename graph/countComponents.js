// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.

// Example 1:

// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2

var countComponents = function(n, edges) {
  if (n === 0) {
    return 0;
  }

  let graph = createGraph(n, edges);
  console.log(graph);
  let seen = new Set();
  let count = 0;

  let dfs = (graph, current, seen) => {
    if (seen.has(current)) {
      return false;
    }

    seen.add(current);

    for (let neighbor of graph.get(current)) {
      dfs(graph, neighbor, seen);
    }

    return true;
  }

  for (let node of graph.keys()) {
    if (dfs(graph, node, seen)) {
      count++
    }
  }

  return count;

};

let createGraph = (n, edges) => {
  let graph = new Map();

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let i = 0; i < edges.length; i++) {
    graph.get(edges[i][0]).push(edges[i][1]);
    graph.get(edges[i][1]).push(edges[i][0]);
  }

  return graph;
}

let edges = [[0,1],[1,2],[3,4]];

console.log(countComponents(5, edges));