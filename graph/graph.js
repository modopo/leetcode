

function depthFirst(graph, source) {
  console.log(source);
  
  for (let neighbors of graph[source]) {
    depthFirst(graph, neighbors);
  }
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

//abdfce
depthFirst(graph, 'a');