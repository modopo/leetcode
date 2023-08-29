/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"

*/

function reverseWords(s) {
  let arr = s.split(" ");

  arr = arr.map((word) => {
    let wordArr = word.split("");
    let start = 0;
    let end = wordArr.length - 1;

    while (start < end) {
      let temp = wordArr[start];
      wordArr[start] = wordArr[end];
      wordArr[end] = temp;
      start++;
      end--;
    }
    return wordArr.join("");
  });

  return arr.join(" ");
}

console.log(reverseWords("this is a test."));
