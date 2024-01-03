// Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.


function largestComponent(graph) {
  let result = 0;
  let seen = new Set();

  let dfs = (graph, current, seen, total) => {
    if (seen.has(String(current))) {
      return 0;
    }

    seen.add(String(current));
    let size = 1;
    for (let neighbor of graph[current]) {
      size += dfs(graph, neighbor, seen);
    }

    return size;
  }

  for (let node in graph) {
    result = Math.max(result, dfs(graph, node, seen))
  }

  return result;
}

console.log(largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
})); // -> 4

