// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

// Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

// Example 1:

// Input: path = "NES"
// Output: false 
// Explanation: Notice that the path doesn't cross any point more than once.
// Example 2:

// Input: path = "NESWW"
// Output: true
// Explanation: Notice that the path visits the origin twice.

function isPathCrossing(path) {
  let count = new Map();

  for (const direction of path) {
    count.set(direction, (count.get(direction) || 0) + 1);
  }

  let number = null;

  for (let val of count.values()) {
    if (number === null) {
      number = val;
    } else if (number !== val) {
      return false;
    }
  }

  return true;
}

console.log(isPathCrossing('NESWW'));