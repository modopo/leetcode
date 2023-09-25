/*
Example 1: 49. Group Anagrams

Given an array of strings strs, group the anagrams together.

For example, given strs = ["eat","tea","tan","ate","nat","bat"], return [["bat"],["nat","tan"],["ate","eat","tea"]].
*/

function groupAnagrams(strs) {
  let groups = new Map();

  for (const word of strs) {
    let key = word.split('').sort().join('');
    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(word);
  }

  let result = [];
  for (const group of groups.values()) {
    result.push(group);
  }

  return result;
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));