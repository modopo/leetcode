// Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

function connectedComponentsCount(graph) {
  let count = 0;
  let seen = new Set();

  let dfs = (graph, current, seen) => {
    if (seen.has(String(current))) {
      return false;
    }

    seen.add(String(current));

    for (let neighbor of graph[current]) {
      dfs(graph, neighbor, seen);
    }

    return true;
  }

  for (let node in graph) {
    if (dfs(graph, node, seen)) {
      count++;
    }
  }
  
  return count;
}

console.log(connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
})); 

//2