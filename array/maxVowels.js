// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

function maxVowels(s, k) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < k; i++) {
    count += vowels.includes(s.charAt(i)) ? 1 : 0;
  }

  let result = count;

  for (let i = k; i < s.length; i++) {
    count += vowels.includes(s.charAt(i)) ? 1 : 0;
    count -= vowels.includes(s.charAt(i - k)) ? 1 : 0;
    result = Math.max(result, count);
  }

  return result;
}

console.log(maxVowels('leetcode', 3));