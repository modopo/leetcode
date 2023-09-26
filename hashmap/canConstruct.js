/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

function canConstruct(ransomNote, magazine) {
  let magazineMap = new Map();

  for (let i = 0; i < magazine.length; i++) {
    magazineMap.set(magazine[i], (magazineMap.get(magazine[i]) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazineMap.get(ransomNote[i])) {
      return false;
    }

    magazineMap.set(ransomNote[i], magazineMap.get(ransomNote[i]) - 1);
  }

  return true;
}

console.log(canConstruct('aa', 'aab'));