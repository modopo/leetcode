/*
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

*/

function reverseOnlyLetters(s) {
  let arr = s.split('');
  let end = arr.length - 1;
  let result = [];
  const regex = /^[a-zA-Z]$/;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(regex) !== null) {
      while (arr[end].match(regex) === null) {
        end--;
      }
      result.push(arr[end]);
      end--;
    } else {
      result.push(arr[i]);
    }
  }

  return result.join('');

}

console.log(reverseOnlyLetters('7_28]'));