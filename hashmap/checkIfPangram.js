/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false
*/

function checkIfPangram (sentence) {
  const map = new Map();

  for (let i = 0; i < sentence.length; i++) {
    if (!map.has(sentence[i])) {
      map.set(sentence[i], i);
    }
  }

  return map.size === 26 ? true : false;
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));