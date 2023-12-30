

function depthFirst(graph, source) {
  console.log(source);
  
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
dfs(graph, 'a');