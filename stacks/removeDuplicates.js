// You are given a string s. Continuously remove duplicates (two of the same character beside each other) until you can't anymore. Return the final string after this.

// For example, given s = "abbaca", you can first remove the "bb" to get "aaca". Next, you can remove the "aa" to get "ca". This is the final answer.

function removeDuplicates(s) {
  let stack = [];

  for (let letter of s) {
    if (stack.length && stack[stack.length - 1] === letter) {
      stack.pop();
    } else {
      stack.push(letter);
    }
  };

  return stack.join('');
}