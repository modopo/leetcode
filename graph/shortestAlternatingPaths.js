// You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be self-edges and parallel edges.

// You are given two arrays redEdges and blueEdges where:

// redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
// blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.
// Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist.

// Example 1:

// Input: n = 3, redEdges = [[0,1],[1,2]], blueEdges = []
// Output: [0,1,-1]
// Example 2:

// Input: n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]
// Output: [0,1,-1]

function shortestAlternatingPaths(n, redEdges, blueEdges) {
    let colorGraph = (color, edges) => {
        for (let i = 0; i < n; i++) {
            graph.get(color).set(i, []);
        }

        for (let [x, y] of edges) {
            graph.get(color).get(x).push(y);
        }
    };

    const RED = 0,
        BLUE = 1;

    let graph = new Map();
    graph.set(RED, new Map());
    graph.set(BLUE, new Map());

    colorGraph(RED, redEdges);
    colorGraph(BLUE, blueEdges);

    let result = new Array(n).fill(Infinity);
    let queue = [
        [0, RED, 0],
        [0, BLUE, 0],
    ];
    let seen = [];
    for (let i = 0; i < n; i++) {
        seen.push(new Array(2).fill(false))
    }

    seen[0][RED] = true;
    seen[0][BLUE] = true;

    while (queue.length) {
        let [current, color, dist] = queue.shift();

        result[current] = Math.min(result[current], dist);

        for (let neighbor of graph.get(color).get(current)) {
            
            if (!seen[neighbor][1 - color]) {
                seen[neighbor][1 - color] = true;
                queue.push([neighbor, 1 - color, dist + 1]);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (result[i] === Infinity) {
            result[i] = -1;
        }
    }

    return result;
}

let n = 3,
    redEdges = [
        [0, 1],
        [0, 2],
    ],
    blueEdges = [[1, 0]];

console.log(shortestAlternatingPaths(n, redEdges, blueEdges));
