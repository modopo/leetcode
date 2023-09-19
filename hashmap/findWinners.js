/*
You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.
*/

function findWinners(matches) {
  const lost = new Map();

  matches.forEach(match => {
    let winner = match[0], loser = match[1];

    lost.set(winner, lost.get(winner) || 0);
    lost.set(loser, (lost.get(loser) || 0) + 1);
  });

  let zero = [], one = [];

  for (const key of lost.keys()) {
    if (lost.get(key) === 0) {
      zero.push(key)
    } else if (lost.get(key) === 1) {
      one.push(key);
    }
  }
  zero = zero.sort((a, b) => a - b);
  one = one.sort((a, b) => a - b);

  return [zero, one];
}

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]));