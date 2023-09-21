/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:

Input: text = "nlaebolko"
Output: 1
Example 2:

Input: text = "loonbalxballpoon"
Output: 2
Example 3:

Input: text = "leetcode"
Output: 0
*/

function maxNumberOfBallons(text) {
  let count = new Map();

  for (let idx = 0; idx < text.length; idx++) {
    count.set(text[idx], (count.get(text[idx]) || 0) + 1);
  }

  return Math.floor(Math.min(count.get('b') || 0, count.get('a') || 0, count.get('l')/2 || 0, count.get('o')/2 || 0, count.get('n') || 0));
}

console.log(maxNumberOfBallons('leetcode'));