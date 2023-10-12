// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

function isIsomorphic(s, t) {
  let letters = new Map();

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (!letters.get(s[i])) {
      if ([...letters.values()].includes(t[i])) {
        return false;
      } else {
        letters.set(s[i], t[i]);
      }
    } else if (letters.get(s[i]) !== t[i]) {
      return false;
    }
  }

  return true;
}

console.log(isIsomorphic('badc', 'baba'));
