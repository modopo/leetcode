// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// For example, given s = "ab#c" and t = "ad#c", return true. Because of the backspace, the strings are both equal to "ac".

function backspaceCompare(s, t) {
  let stackS = [];
  let stackT = [];

  for (let letter of s) {
    if (letter === "#") {
      stackS.pop();
    } else {
      stackS.push(letter);
    }
  }

  for (let letter of t) {
    if (letter === "#") {
      stackT.pop();
    } else {
      stackT.push(letter);
    }
  }

  return stackS.join("") === stackT.join("");
}

console.log(backspaceCompare('ab#c', 'ad#c'));