function minMutation(startGene, endGene, bank) {
  let queue = [[startGene, 0]];
  let seen = new Set(startGene);

  while (queue.length) {
    let [node, steps] = queue.shift();
    if (node === endGene) {
      return steps;
    }

    for (let char of "ACGT") {
      for (let i = 0; i < node.length; i++) {
        let neighbor = node.slice(0, i) + char + node.slice(i + 1);
        if (!seen.has(neighbor) && bank.includes(neighbor)) {
          queue.push([neighbor, steps + 1]);
          seen.add(neighbor);
        }
      }
    }
  }

  return -1;
}
