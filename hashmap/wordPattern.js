// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

function wordPattern(pattern, s) {
  let patternMap = new Map();

  let str = s.split(' ');

  if (pattern.length !== str.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    if (!patternMap.get(pattern[i])) {
      if ([...patternMap.values()].includes(str[i])) {
        return false;
      } else {
        patternMap.set(pattern[i], str[i])
      }
    } else if (patternMap.get(pattern[i]) !== str[i]) {
      return false;
    }
  }

  return true;
}

console.log(wordPattern('abba', 'dog cat cat dog'));