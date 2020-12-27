/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let hashtable = {};
  for (let char of s) {
    if (!hashtable[char]) {
      hashtable[char] = 1;
    } else {
      hashtable[char]++;
    }
  }
  for (let char of t) {
    if (!hashtable[char] || hashtable[char] == 0) {
      return false;
    }
    hashtable[char]--;
  }
  for (const key in hashtable) {
    if (hashtable[key] != 0) {
      return false;
    }
  }
  return true;
};
