// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(s) {
  let left = 0,
    right = 0,
    result = 0;
  let count = new Map();

  while (right < s.length) {
    count.set(s[right], (count.get(s[right]) || 0) + 1);

    while (count.get(s[right]) > 1) {
      count.set(s[left], count.get(s[left]) - 1);
      left++;
    }

    result = Math.max(result, right - left + 1);
    right++;
  }

  return result;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
