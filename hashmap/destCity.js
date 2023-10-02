// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
// Example 2:

// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are: 
// "D" -> "B" -> "C" -> "A". 
// "B" -> "C" -> "A". 
// "C" -> "A". 
// "A". 
// Clearly the destination city is "A".
// Example 3:

// Input: paths = [["A","Z"]]
// Output: "Z"

function destCityMap(paths) {
  let start = new Map();
  let end = new Map();

   if (paths.length === 1) {
    return paths[0][1];
   }

   for (const path of paths) {
    start.set(path[0], (start.get(path[0]) || 0) + 1);
    end.set(path[1], (end.get(path[1]) || 0) + 1);
   }

   for (const [key, value] of end.entries()) {
    if (!start.get(key)) {
      return key;
    }
   }
}

function destCity(paths) {
  let destSet = new Set();

  for (const path of paths) {
    destSet.add(path[0])
  }

  for (const path of paths) {
    if (!destSet.has(path[1])) {
      return path[1];
    }
  }
}

console.log(destCity([["B","C"],["D","B"],["C","A"]]));