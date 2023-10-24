// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. The string is valid if all open brackets are closed by the same type of closing bracket in the correct order, and each closing bracket closes exactly one open bracket.

// For example, s = "({})" and s = "(){}[]" are valid, but s = "(]" and s = "({)}" are not valid.

function validBrackets(s) {
  let stack = [];

  let brackets = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  
  for (const start of s) {
    if (start in brackets) {
      stack.push(start);
    } else {
      if (!stack.length) {
        return false;
      }

      let previous = stack.pop();
      if (brackets[previous] != start) {
        return false;
      }
    }
  }

  return !stack.length;
}

console.log(validBrackets("(){{}}"))