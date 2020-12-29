/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hashTable = {};
  for (let i = 0; i < strs.length; i++) {
    var str = strs[i];
    var sorted = str.split("").sort().join("");
    if (!hashTable[sorted]) {
      hashTable[sorted] = [str];
    } else {
      hashTable[sorted].push(str);
    }
  }
  var output = [];
  for (var arr in hashTable) {
    output.push(hashTable[arr]);
  }

  return output;
};
