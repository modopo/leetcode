/*
Example 1: You are given a string s and an integer k. Find the length of the longest substring that contains at most k distinct characters.

For example, given s = "eceba" and k = 2, return 3. The longest substring with at most 2 distinct characters is "ece".
*/

function findLongestSubstring(s, k) {
  let result = 0, left = 0;
  let counts = new Map();

  for (let right = 0; right < s.length; right++) {
    counts.set(s[right], (counts.get(s[right]) || 0) + 1);
    while (counts.size > k) {
      counts.set(s[left], counts.get(s[left]) - 1);
      if (counts.get(s[left]) === 0) {
        counts.delete(s[left]);
      }
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}

console.log(findLongestSubstring("eceda", 2));