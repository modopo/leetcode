// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.

// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

// Example 1:

// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2
// Example 2:

// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.

let validPath = function(n, edges, source, destination) {
    let seen = new Set();
    let graph = createGraph(edges);

    let dfs = (graph, src, dst, seen) => {
      if (src === dst) return true;

      if (seen.has(src)) return false;

      seen.add(src);

      for (let neighbor of graph.get(src)) {
        if (dfs(graph, neighbor, dst, seen)) {
          return true;
        };
      }

      return false;
    }

    return dfs(graph, source, destination, seen);
};

let createGraph = (edges) => {
  let graph = new Map();

  for (let edge of edges) {
    if (!graph.has(edge[0])) {
      graph.set(edge[0], []);
    }

    if (!graph.has(edge[1])) {
      graph.set(edge[1], []);
    }

    graph.get(edge[0]).push(edge[1]);
    graph.get(edge[1]).push(edge[0]);
  }

  return graph;
};

let edges = [[0,1],[1,2],[2,0]];
